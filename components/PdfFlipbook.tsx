"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

export default function PdfFlipbook({ src, title }: { src: string; title: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        if (!window.pdfjsLib) {
          await new Promise<void>((resolve, reject) => {
            const existing = document.querySelector<HTMLScriptElement>("script[data-pdfjs]");
            if (existing) {
              existing.addEventListener("load", () => resolve(), { once: true });
              existing.addEventListener("error", () => reject(new Error("pdfjs load failed")), { once: true });
              return;
            }
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";
            script.type = "module";
            script.dataset.pdfjs = "true";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("pdfjs load failed"));
            document.head.appendChild(script);
          });
        }

        if (!window.pdfjsLib) {
          const mod = await import(/* webpackIgnore: true */ "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs");
          window.pdfjsLib = mod;
        }

        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

        const documentTask = window.pdfjsLib.getDocument(src);
        const loaded = await documentTask.promise;
        if (cancelled) return;
        setPdf(loaded);
        setPages(loaded.numPages);
        setLoading(false);
      } catch (e) {
        console.error(e);
        if (!cancelled) {
          setError("Не удалось загрузить каталог");
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!pdf || !canvasRef.current || !containerRef.current) return;
    let cancelled = false;

    const render = async () => {
      const pdfPage = await pdf.getPage(page);
      if (cancelled) return;
      const baseViewport = pdfPage.getViewport({ scale: 1 });
      const available = Math.max(280, containerRef.current!.clientWidth - 24);
      const scale = Math.min(2, available / baseViewport.width);
      const viewport = pdfPage.getViewport({ scale });
      const canvas = canvasRef.current!;
      const context = canvas.getContext("2d");
      if (!context) return;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      await pdfPage.render({ canvasContext: context, viewport }).promise;
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [pdf, page]);

  const previous = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(pages || p, p + 1));

  return (
    <div className="rounded-[30px] bg-[#100d09] p-3 shadow-2xl shadow-black/20 md:p-5">
      <div
        ref={containerRef}
        className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[24px] bg-[#27231e] p-3 md:min-h-[720px] md:p-6"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const delta = e.changedTouches[0].clientX - touchStart;
          if (delta > 50) previous();
          if (delta < -50) next();
          setTouchStart(null);
        }}
      >
        {loading && <div className="text-sm font-bold text-white/60">Загрузка каталога…</div>}
        {error && <div className="text-sm font-bold text-red-300">{error}</div>}
        {!loading && !error && (
          <canvas
            ref={canvasRef}
            aria-label={title}
            className="max-h-[78vh] max-w-full rounded-lg bg-white shadow-[0_20px_60px_rgba(0,0,0,.45)] transition-transform duration-300"
          />
        )}

        {!loading && !error && (
          <>
            <button
              type="button"
              onClick={previous}
              disabled={page <= 1}
              aria-label="Предыдущая страница"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-4 py-3 text-2xl font-black text-white backdrop-blur disabled:opacity-25 md:left-5"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              disabled={page >= pages}
              aria-label="Следующая страница"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-4 py-3 text-2xl font-black text-white backdrop-blur disabled:opacity-25 md:right-5"
            >
              ›
            </button>
          </>
        )}
      </div>

      {!loading && !error && (
        <div className="mt-4 flex items-center justify-between gap-4 text-sm font-bold text-white/70">
          <button type="button" onClick={previous} disabled={page <= 1} className="rounded-full border border-white/10 px-4 py-2 disabled:opacity-30">←</button>
          <span>{page} / {pages}</span>
          <button type="button" onClick={next} disabled={page >= pages} className="rounded-full border border-white/10 px-4 py-2 disabled:opacity-30">→</button>
        </div>
      )}
    </div>
  );
}

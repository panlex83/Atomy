"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

const ui: Record<string, { loading: string; error: string; previous: string; next: string }> = {
  ru: { loading: "Загрузка каталога…", error: "Не удалось загрузить каталог", previous: "Предыдущая страница", next: "Следующая страница" },
  en: { loading: "Loading catalog…", error: "Unable to load the catalog", previous: "Previous page", next: "Next page" },
  kk: { loading: "Каталог жүктелуде…", error: "Каталогты жүктеу мүмкін болмады", previous: "Алдыңғы бет", next: "Келесі бет" },
  uz: { loading: "Katalog yuklanmoqda…", error: "Katalogni yuklab bo‘lmadi", previous: "Oldingi sahifa", next: "Keyingi sahifa" },
  ky: { loading: "Каталог жүктөлүүдө…", error: "Каталогду жүктөө мүмкүн болгон жок", previous: "Мурунку бет", next: "Кийинки бет" },
};

export default function PdfFlipbook({ src, title, locale = "ru" }: { src: string; title: string; locale?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const labels = ui[locale] || ui.ru;

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        if (!window.pdfjsLib) {
          await new Promise<void>((resolve, reject) => {
            const existing = document.querySelector<HTMLScriptElement>("script[data-pdfjs]");
            if (existing) {
              if (window.pdfjsLib) return resolve();
              existing.addEventListener("load", () => resolve(), { once: true });
              existing.addEventListener("error", () => reject(new Error("pdfjs load failed")), { once: true });
              return;
            }

            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
            script.dataset.pdfjs = "true";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("pdfjs load failed"));
            document.head.appendChild(script);
          });
        }

        if (!window.pdfjsLib) throw new Error("PDF.js unavailable");
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

        const documentTask = window.pdfjsLib.getDocument({ url: src, withCredentials: false });
        const loaded = await documentTask.promise;
        if (cancelled) return;
        setPdf(loaded);
        setPages(loaded.numPages);
        setLoading(false);
      } catch (e) {
        console.error(e);
        if (!cancelled) {
          setError(labels.error);
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [src, labels.error]);

  useEffect(() => {
    if (!pdf || !canvasRef.current || !containerRef.current) return;
    let cancelled = false;

    const render = async () => {
      const pdfPage = await pdf.getPage(page);
      if (cancelled) return;
      const baseViewport = pdfPage.getViewport({ scale: 1 });
      const availableWidth = Math.max(280, containerRef.current!.clientWidth - 24);
      const availableHeight = Math.max(420, window.innerHeight * 0.72);
      const widthScale = availableWidth / baseViewport.width;
      const heightScale = availableHeight / baseViewport.height;
      const scale = Math.min(2, widthScale, heightScale);
      const viewport = pdfPage.getViewport({ scale });
      const canvas = canvasRef.current!;
      const context = canvas.getContext("2d");
      if (!context) return;
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
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
        className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[24px] bg-[#27231e] p-3 md:min-h-[720px] md:p-6"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const delta = e.changedTouches[0].clientX - touchStart;
          if (delta > 50) previous();
          if (delta < -50) next();
          setTouchStart(null);
        }}
      >
        {loading && <div className="text-sm font-bold text-white/60">{labels.loading}</div>}
        {error && <div className="text-sm font-bold text-red-300">{error}</div>}
        {!loading && !error && (
          <canvas
            ref={canvasRef}
            aria-label={title}
            className="max-h-[72vh] max-w-full rounded-lg bg-white shadow-[0_20px_60px_rgba(0,0,0,.45)]"
          />
        )}

        {!loading && !error && (
          <>
            <button type="button" onClick={previous} disabled={page <= 1} aria-label={labels.previous} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-2xl font-black text-white backdrop-blur disabled:opacity-20 md:left-5">‹</button>
            <button type="button" onClick={next} disabled={page >= pages} aria-label={labels.next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-2xl font-black text-white backdrop-blur disabled:opacity-20 md:right-5">›</button>
          </>
        )}
      </div>

      {!loading && !error && (
        <div className="mt-4 flex items-center justify-between gap-4 text-sm font-bold text-white/70">
          <button type="button" onClick={previous} disabled={page <= 1} aria-label={labels.previous} className="rounded-full border border-white/10 px-4 py-2 disabled:opacity-30">←</button>
          <span>{page} / {pages}</span>
          <button type="button" onClick={next} disabled={page >= pages} aria-label={labels.next} className="rounded-full border border-white/10 px-4 py-2 disabled:opacity-30">→</button>
        </div>
      )}
    </div>
  );
}

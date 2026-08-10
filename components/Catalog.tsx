export default function Catalog({ t }: any) {
  const flipbookUrl = "https://heyzine.com/flip-book/3b7be4e8fe.html";
  const pdfUrl = "https://drive.google.com/file/d/1dIbZCCxyUiMHeBvkI2TedTo7Mg6OUvlx/view";

  return (
    <section id="catalog" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">{t.catalog.label}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.catalog.title}</h2>
          </div>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#15110b] px-6 py-3 text-center font-black text-white hover:bg-[#2a2115]"
          >
            PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-[34px] border border-[#ddd2bf] bg-[#15110b] p-2 shadow-2xl shadow-black/15 md:p-3">
          <div className="relative aspect-[4/3] min-h-[520px] overflow-hidden rounded-[26px] bg-black md:aspect-[16/10] md:min-h-[680px]">
            <iframe
              src={flipbookUrl}
              title={t.catalog.title}
              className="absolute inset-0 h-full w-full border-0"
              allow="fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

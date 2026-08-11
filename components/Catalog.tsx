import PdfFlipbook from "@/components/PdfFlipbook";

const catalogUrl =
  "https://jeg64lfwbq5bwnpf.public.blob.vercel-storage.com/Atomy_catalog_2026.pdf";

export default function Catalog({ t }: any) {
  return (
    <section id="catalog" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">{t.catalog.label}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.catalog.title}</h2>
          </div>
          <a
            href={catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#15110b] px-6 py-3 text-center font-black text-white hover:bg-[#2a2115]"
          >
            PDF
          </a>
        </div>

        <PdfFlipbook src={catalogUrl} title={t.catalog.title} />
      </div>
    </section>
  );
}

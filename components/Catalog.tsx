export default function Catalog({ t }: any) {
  const catalogUrl = "https://drive.google.com/file/d/1dIbZCCxyUiMHeBvkI2TedTo7Mg6OUvlx/view";

  return (
    <section id="catalog" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[34px] bg-[#15110b] p-8 text-white shadow-2xl shadow-black/10 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">{t.catalog.label}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.catalog.title}</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">{t.catalog.description}</p>
            </div>

            <a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d7b56d] px-7 py-4 text-center font-black text-[#1f1a12] transition hover:bg-[#e6c77d]"
            >
              {t.catalog.printCatalog}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

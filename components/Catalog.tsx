export default function Catalog({ t }: any) {
  return (
    <section id="catalog" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[34px] bg-[#15110b] p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">{t.catalog.label}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.catalog.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{t.catalog.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.atomy.kz/category?sortType=POPULAR" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d7b56d] px-6 py-3.5 font-black text-[#1f1a12] hover:bg-[#e6c77d]">{t.catalog.allProducts}</a>
              <a href="https://www.atomy.kz/product/F92903" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3.5 font-black text-white hover:bg-white/10">{t.catalog.printCatalog}</a>
            </div>
          </div>

          <div className="rounded-[34px] border border-[#e6dcc9] bg-white p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">{t.catalog.categoriesLabel}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.catalog.categories.map((item: string) => (
                <div key={item} className="rounded-2xl border border-[#eee5d5] bg-[#fbf7ef] px-5 py-4 font-bold text-[#2a241c]">{item}</div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-neutral-500">{t.catalog.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

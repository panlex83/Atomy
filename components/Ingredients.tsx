export default function Ingredients({ t }: any) {
  return (
    <section id="ingredients" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">Состав</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">
          {t.ingredients.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">{t.ingredients.text}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.ingredients.items.map((item: string, index: number) => (
            <article key={item} className="rounded-[28px] border border-neutral-200 bg-[#fbf7ef] p-7">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#15110b] font-black text-[#d7b56d]">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-black text-[#1f1a12]">{item}</h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Растительный компонент, указанный в составе HemoHIM.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

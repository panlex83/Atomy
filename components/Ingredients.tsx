const ingredientImages = [
  "https://image.atomy.com/US/goods/A00001/org/408/241206000032408.jpg",
  "https://image.atomy.com/US/goods/A00001/org/409/241206000032409.jpg",
  "https://image.atomy.com/US/goods/A00001/org/410/241206000032410.jpg",
];

export default function Ingredients({ t }: any) {
  return (
    <section id="ingredients" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">{t.common.ingredientsLabel}</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.ingredients.title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">{t.ingredients.text}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.ingredients.items.map((item: any, index: number) => (
            <article key={item.title} className="overflow-hidden rounded-[30px] border border-neutral-200 bg-[#fbf7ef] shadow-xl shadow-[#8a6730]/10">
              <img src={ingredientImages[index]} alt={item.imageAlt} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15110b] font-black text-[#d7b56d]">0{index + 1}</div>
                <h3 className="text-2xl font-black text-[#1f1a12]">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
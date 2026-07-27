const ingredientVisuals = [
  {
    image: "https://global.atomy.com/en/img/contents/sub02/sub020201_cultivation02.png",
    description:
      "Angelica Gigas выращивается в высокогорных районах Кореи и входит в основу растительного комплекса HemoHIM.",
  },
  {
    image: "https://global.atomy.com/en/img/contents/sub02/sub020201_cultivation03.png",
    description:
      "Cnidium Officinale — один из трёх компонентов, указанных в официальной формуле продукта.",
  },
  {
    image: "https://global.atomy.com/en/img/contents/sub02/sub020201_cultivation01.png",
    description:
      "Paeonia Japonica дополняет комплекс растительных экстрактов HemoHIM.",
  },
];

export default function Ingredients({ t }: any) {
  return (
    <section id="ingredients" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">Состав</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">
              {t.ingredients.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600">{t.ingredients.text}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.ingredients.items.map((item: string, index: number) => {
            const visual = ingredientVisuals[index];

            return (
              <article
                key={item}
                className="group overflow-hidden rounded-[30px] border border-neutral-200 bg-[#fbf7ef] shadow-xl shadow-[#8a6730]/10"
              >
                <div className="overflow-hidden bg-[#f4ecdd]">
                  <img
                    src={visual.image}
                    alt={item}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15110b] font-black text-[#d7b56d]">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-black text-[#1f1a12]">{item}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">{visual.description}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6b35]">
                    Официальный материал Atomy
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ingredientImages = [
  "https://global.atomy.com/en/img/contents/sub02/sub020201_cultivation02.png",
  "https://global.atomy.com/en/img/contents/sub02/sub020201_cultivation03.png",
  "https://global.atomy.com/en/img/contents/sub02/sub020201_cultivation01.png",
];

export default function Ingredients({ t }: any) {
  return (
    <section id="ingredients" className="relative overflow-hidden bg-white px-5 py-24 md:px-8">
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#ead19b]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#7a1f18]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">
            {t.common.ingredientsLabel}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">
            {t.ingredients.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-600">{t.ingredients.text}</p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {t.ingredients.items.map((item: any, index: number) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[32px] border border-[#e8dfcf] bg-[#fbf7ef] shadow-[0_24px_70px_rgba(91,65,27,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(91,65,27,0.16)]"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-b from-[#fffaf0] to-[#efe2c8]">
                <img
                  src={ingredientImages[index]}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#15110b]/45 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-[#15110b]/85 font-black text-[#d7b56d] backdrop-blur">
                  0{index + 1}
                </div>
              </div>

              <div className="p-7 md:p-8">
                <h3 className="text-2xl font-black leading-tight text-[#1f1a12]">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

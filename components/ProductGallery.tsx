const gallery = [
  {
    src: "https://image.atomy.com/US/goods/A00001/org/405/241206000032405.jpg",
    alt: "Atomy HemoHIM — официальный продуктовый кадр",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://image.atomy.com/US/goods/A00001/org/406/241206000032406.jpg",
    alt: "Упаковка Atomy HemoHIM",
    className: "",
  },
  {
    src: "https://image.atomy.com/US/goods/A00001/org/407/241206000032407.jpg",
    alt: "Саше Atomy HemoHIM",
    className: "",
  },
];

export default function ProductGallery() {
  return (
    <section className="bg-[#15110b] px-5 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">Галерея</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
              Продукт крупным планом
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/65">
            Официальные фотографии HemoHIM: упаковка, формат продукта и внешний вид саше.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">
                <figcaption className="text-sm font-bold text-white/90">{item.alt}</figcaption>
              </div>
            </figure>
          ))}

          <div className="flex flex-col justify-between rounded-[30px] border border-[#d7b56d]/30 bg-gradient-to-br from-[#7a1f18] to-[#302317] p-7 lg:col-span-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0d690]">Формат</p>
              <p className="mt-4 max-w-lg text-3xl font-black">Удобные порционные саше для ежедневного использования</p>
            </div>
            <p className="mt-8 max-w-xl leading-7 text-white/70">
              Компактный формат удобно хранить дома и брать с собой. Информация о количестве и способе применения должна соответствовать упаковке для конкретного рынка.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

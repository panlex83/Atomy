export default function Hero({ t }: any) {
  return (
    <section className="px-6 py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-wide text-neutral-300">
            {t.hero.subtitle}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-lg text-neutral-300">
            {t.hero.description}
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href={t.whatsappLink}
              className="rounded-full bg-white px-6 py-3 font-semibold text-neutral-950"
            >
              {t.hero.cta}
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 p-8 text-center">
          <div className="aspect-square rounded-2xl bg-white/10 flex items-center justify-center">
            <span className="text-neutral-300">Фото продукта</span>
          </div>
        </div>
      </div>
    </section>
  );
}
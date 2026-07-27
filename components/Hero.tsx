export default function Hero({ t }: any) {
  return (
    <section className="relative overflow-hidden bg-[#15110b] text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#7a1f18]/60 blur-3xl" />
        <div className="absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[#d7b56d]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#ead7ad] backdrop-blur">
            Корейский продукт Atomy
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={t.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#d7b56d] px-8 py-4 text-center font-black text-[#1f1a12] transition hover:-translate-y-0.5 hover:bg-[#e6c77d]"
            >
              {t.hero.cta}
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              {t.hero.secondary}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black">3</p>
              <p className="mt-1 text-xs text-white/60">растительных компонента</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black">23</p>
              <p className="mt-1 text-xs text-white/60">глобальных региона</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black">60</p>
              <p className="mt-1 text-xs text-white/60">саше в упаковке</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-[#d7b56d]/20 to-[#7a1f18]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <img
              src="https://image.atomy.com/US/goods/A00001/org/405/241206000032405.jpg"
              alt="Официальное фото Atomy HemoHIM"
              className="aspect-[4/3] w-full rounded-[30px] bg-white object-cover"
              loading="eager"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#15110b]/75 p-4 backdrop-blur-md">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e8c978]">Official product</p>
              <p className="mt-1 text-sm text-white/70">Фотография продукта с официального каталога Atomy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

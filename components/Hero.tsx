import Image from "next/image";

export default function Hero({ t }: any) {
  return (
    <section className="relative overflow-hidden bg-[#15110b] text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#7a1f18]/60 blur-3xl" />
        <div className="absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[#d7b56d]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:min-h-[720px] lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#ead7ad]">
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
              className="rounded-full bg-[#d7b56d] px-8 py-4 text-center font-black text-[#1f1a12] hover:bg-[#e6c77d]"
            >
              {t.hero.cta}
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-bold text-white hover:bg-white/15"
            >
              {t.hero.secondary}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-black">3</p>
              <p className="mt-1 text-xs text-white/60">компонента</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-black">2009</p>
              <p className="mt-1 text-xs text-white/60">Atomy</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-black">WA</p>
              <p className="mt-1 text-xs text-white/60">заказ</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[36px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30">
            <div className="rounded-[28px] bg-gradient-to-br from-[#fff8e8] via-[#ead19b] to-[#9a6b35] p-8">
              <Image
                src="/images/hemohim-premium.svg"
                alt="Atomy HemoHIM"
                width={760}
                height={760}
                priority
                className="mx-auto h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

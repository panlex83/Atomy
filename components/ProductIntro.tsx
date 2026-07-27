export default function ProductIntro({ t }: any) {
  return (
    <section id="about" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">О продукте</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">
            {t.productIntro.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">{t.productIntro.text}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-[#8a6730]/10">
              <p className="text-2xl font-black text-[#7a1f18]">20 мл</p>
              <p className="mt-2 text-sm font-bold text-neutral-700">в одном саше</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-[#8a6730]/10">
              <p className="text-2xl font-black text-[#7a1f18]">60</p>
              <p className="mt-2 text-sm font-bold text-neutral-700">саше в упаковке</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-[#8a6730]/10">
              <p className="text-2xl font-black text-[#7a1f18]">Daily</p>
              <p className="mt-2 text-sm font-bold text-neutral-700">удобно брать с собой</p>
            </div>
          </div>

          <p className="mt-6 rounded-2xl border border-[#ead19b] bg-[#fff4da] p-5 leading-7 text-[#5a421f]">
            {t.productIntro.note}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-2xl shadow-[#8a6730]/15">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#fffaf0] via-[#f4dfad] to-[#c99b52]">
            <img
              src="https://image.atomy.com/US/goods/A00001/org/407/241206000032407.jpg?w=1400"
              alt="Atomy HemoHIM в формате саше"
              className="h-[520px] w-full object-cover object-center"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15110b]/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#15110b]/75 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e8ca85]">Удобный формат</p>
              <p className="mt-2 text-xl font-black">Индивидуальные саше HemoHIM</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Компактный формат для дома, работы и поездок.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

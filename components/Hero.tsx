export default function Hero({ t }: any) {
  const productImage = "https://image.atomy.com/US/goods/A00001/org/405/241206000032405.jpg";

  return (
    <section className="relative overflow-hidden bg-[#15110b] text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#7a1f18]/60 blur-3xl" />
        <div className="absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[#d7b56d]/25 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:min-h-[720px] lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#ead7ad]">{t.common.koreanProduct}</div>
          <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">{t.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d7b56d] px-8 py-4 text-center font-black text-[#1f1a12] hover:bg-[#e6c77d]">{t.hero.cta}</a>
            <a href="#about" className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-bold text-white hover:bg-white/15">{t.hero.secondary}</a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {t.hero.stats.map((item: any) => <div key={item.label} className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-black">{item.value}</p><p className="mt-1 text-xs text-white/60">{item.label}</p></div>)}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-[#d7b56d]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/35">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[28px] bg-[#eee4d2]">
              <img src={productImage} alt={t.hero.imageAlt} className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
                <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4dda1]">Atomy</p><p className="mt-1 text-xl font-black">HemoHIM</p></div>
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[#1f1a12]">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
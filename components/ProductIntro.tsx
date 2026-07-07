export default function ProductIntro({ t }: any) {
  return (
    <section id="about" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">О продукте</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">
            {t.productIntro.title}
          </h2>
        </div>
        <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-[#8a6730]/10">
          <p className="text-lg leading-8 text-neutral-700">{t.productIntro.text}</p>
          <p className="mt-6 rounded-2xl bg-[#fff4da] p-5 leading-7 text-[#5a421f]">
            {t.productIntro.note}
          </p>
        </div>
      </div>
    </section>
  );
}

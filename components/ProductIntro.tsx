export default function ProductIntro({ t }: any) {
  const sachetImage = "https://image.atomy.com/US/goods/A00001/org/407/241206000032407.jpg";
  return (
    <section id="about" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">{t.common.productLabel}</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.productIntro.title}</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
            {t.productIntro.paragraphs.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-7 rounded-2xl border border-[#ead19b] bg-[#fff4da] p-5 leading-7 text-[#5a421f]">{t.productIntro.note}</p>
        </div>
        <div className="sticky top-28 relative overflow-hidden rounded-[34px] bg-[#15110b] p-3 shadow-2xl shadow-[#8a6730]/20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] bg-[#eee3cc]">
            <img src={sachetImage} alt={t.productIntro.imageAlt} className="h-full w-full object-cover object-center" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f0d690]">{t.productIntro.imageBadge}</p>
              <p className="mt-2 text-2xl font-black md:text-3xl">{t.productIntro.imageTitle}</p>
              <p className="mt-2 text-sm text-white/75">{t.productIntro.imageText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

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
          <p className="mt-6 rounded-2xl border border-[#ead19b] bg-[#fff4da] p-5 leading-7 text-[#5a421f]">
            {t.productIntro.note}
          </p>
        </div>

        <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-2xl shadow-[#8a6730]/15">
          <Image
            src="/images/product-scene.svg"
            alt="Визуал продукта Atomy HemoHIM"
            width={1200}
            height={820}
            className="h-auto w-full rounded-[26px]"
          />
        </div>
      </div>
    </section>
  );
}

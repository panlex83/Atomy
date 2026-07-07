export default function VideoBlock({ t }: any) {
  return (
    <section className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">Видео</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">
            Коротко о HemoHIM
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Здесь можно разместить официальное или собственное видео: обзор продукта, объяснение состава, условия заказа и ответы на вопросы.
          </p>
          <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#15110b] px-7 py-4 font-black text-white">
            Получить консультацию
          </a>
        </div>

        <div className="overflow-hidden rounded-[32px] bg-[#15110b] p-3 shadow-2xl shadow-[#8a6730]/15">
          <div className="flex aspect-video items-center justify-center rounded-[24px] bg-gradient-to-br from-[#7a1f18] via-[#2d2418] to-[#d7b56d]/70">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90">
              <div className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-[#15110b]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            Для демонстрации заказчику блок уже оформлен как промо-видео: продукт, состав, формат саше и быстрый переход к консультации. Позже сюда можно поставить официальный ролик или собственное видео.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-[#8a6730]/10">
              <p className="text-2xl font-black text-[#7a1f18]">01</p>
              <p className="mt-2 text-sm font-bold text-neutral-700">Продукт</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-[#8a6730]/10">
              <p className="text-2xl font-black text-[#7a1f18]">02</p>
              <p className="mt-2 text-sm font-bold text-neutral-700">Состав</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-[#8a6730]/10">
              <p className="text-2xl font-black text-[#7a1f18]">03</p>
              <p className="mt-2 text-sm font-bold text-neutral-700">Заказ</p>
            </div>
          </div>

          <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#15110b] px-7 py-4 font-black text-white">
            Получить консультацию
          </a>
        </div>

        <div className="overflow-hidden rounded-[32px] bg-[#15110b] p-3 shadow-2xl shadow-[#8a6730]/15">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#7a1f18] via-[#2d2418] to-[#d7b56d]/80">
            <div className="absolute inset-0 opacity-25">
              <div className="absolute left-8 top-8 h-36 w-36 rounded-full border border-white/60" />
              <div className="absolute bottom-8 right-10 h-44 w-44 rounded-full border border-white/50" />
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
            </div>

            <div className="relative z-10 text-center text-white">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/95 shadow-2xl shadow-black/30">
                <div className="ml-1 h-0 w-0 border-y-[18px] border-l-[28px] border-y-transparent border-l-[#15110b]" />
              </div>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-[#f4d98f]">Promo video</p>
              <h3 className="mt-2 text-3xl font-black">Atomy HemoHIM</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/75">
                45–60 секунд: продукт, растительный комплекс, формат саше и способ заказа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VideoBlock({ t }: any) {
  return (
    <section className="relative overflow-hidden bg-[#15110b] px-5 py-20 text-white md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#7a1f18]/35 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-[#d7b56d]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d7b56d]">Видео</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Познакомьтесь с HemoHIM ближе</h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            В ролике показаны история продукта, его растительный комплекс, формат использования и подход Atomy к разработке HemoHIM.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/35 backdrop-blur-sm">
            <div className="aspect-video overflow-hidden rounded-[26px] bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/C9Qqre3lstQ?rel=0&modestbranding=1"
                title="Видео об Atomy HemoHIM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[34px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm md:p-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7b56d]">В этом видео</p>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d7b56d] font-black text-[#1f1a12]">01</div>
                  <div>
                    <h3 className="font-black">История HemoHIM</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">Как создавался продукт и чем он отличается.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d7b56d] font-black text-[#1f1a12]">02</div>
                  <div>
                    <h3 className="font-black">Растительный комплекс</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">Три ключевых компонента формулы.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d7b56d] font-black text-[#1f1a12]">03</div>
                  <div>
                    <h3 className="font-black">Формат продукта</h3>
                    <p className="mt-1 text-sm leading-6 text-white/60">Почему саше удобно использовать каждый день.</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={t.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d7b56d] px-6 py-4 text-center font-black text-[#1f1a12] transition hover:bg-[#e6c77d]"
            >
              Задать вопрос о продукте
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

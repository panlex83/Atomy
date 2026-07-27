export default function VideoBlock({ t }: any) {
  return (
    <section className="relative overflow-hidden bg-[#15110b] px-5 py-20 text-white md:px-8">
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#7a1f18]/35 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#d7b56d]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">{t.common.videoLabel}</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.video.title}</h2>
          <p className="mt-6 text-lg leading-8 text-white/65">{t.video.description}</p>
        </div>
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black p-2 shadow-2xl shadow-black/35">
            <div className="aspect-video overflow-hidden rounded-[25px]">
              <iframe src="https://www.youtube-nocookie.com/embed/C9Qqre3lstQ?rel=0&modestbranding=1" title={t.video.iframeTitle} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
          <aside className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d7b56d]">{t.video.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-black">{t.video.cardTitle}</h3>
              <div className="mt-7 space-y-4">
                {t.video.points.map((point: string, index: number) => <div key={point} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d7b56d] text-sm font-black text-[#1f1a12]">{index + 1}</span><p className="pt-1 leading-7 text-white/75">{point}</p></div>)}
              </div>
            </div>
            <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex justify-center rounded-full bg-[#d7b56d] px-6 py-4 text-center font-black text-[#1f1a12] hover:bg-[#e6c77d]">{t.video.button}</a>
          </aside>
        </div>
      </div>
    </section>
  );
}
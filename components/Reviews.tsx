export default function Reviews({ t, locale }: any) {
  const reviewVideo = "https://jeg64lfwbq5bwnpf.public.blob.vercel-storage.com/-7392484812736012309.mp4";
  const tracks = [
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
    { code: "kk", label: "Қазақша" },
    { code: "uz", label: "O‘zbekcha" },
    { code: "ky", label: "Кыргызча" },
  ];

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#15110b] px-5 py-20 text-white md:px-8">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#7a1f18]/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#d7b56d]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">{t.reviews.label}</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.reviews.title}</h2>
          <p className="mt-6 text-lg leading-8 text-white/65">{t.reviews.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black p-2 shadow-2xl shadow-black/35">
            <div className="aspect-video overflow-hidden rounded-[25px]">
              <iframe
                src="https://www.youtube-nocookie.com/embed/m05-WIf-ygE?rel=0&modestbranding=1"
                title={t.reviews.iframeTitle}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black p-2 shadow-2xl shadow-black/35">
            <div className="aspect-video overflow-hidden rounded-[25px] bg-black">
              <video src={reviewVideo} controls playsInline preload="metadata" className="h-full w-full object-contain">
                {tracks.map((track) => (
                  <track
                    key={track.code}
                    src={`/subtitles/hemohim-review-${track.code}.vtt`}
                    kind="subtitles"
                    srcLang={track.code}
                    label={track.label}
                    default={locale === track.code}
                  />
                ))}
                {t.reviews.iframeTitle}
              </video>
            </div>
          </div>
        </div>

        <aside className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d7b56d]">{t.reviews.cardLabel}</p>
          <h3 className="mt-4 text-3xl font-black">{t.reviews.cardTitle}</h3>
          <p className="mt-5 leading-7 text-white/70">{t.reviews.cardText}</p>
          <p className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/55">{t.reviews.disclaimer}</p>
        </aside>
      </div>
    </section>
  );
}

export default function AboutAtomy({ t }: any) {
  return (
    <section id="atomy" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] bg-[#15110b] p-8 text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">Atomy</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.aboutAtomy.title}</h2>
        </div>
        <div className="rounded-[32px] bg-[#fbf7ef] p-8">
          <p className="text-lg leading-8 text-neutral-700">{t.aboutAtomy.text}</p>
        </div>
      </div>
    </section>
  );
}

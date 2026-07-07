export default function Benefits({ t }: any) {
  return (
    <section id="benefits" className="bg-[#1f1a12] px-5 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">Преимущества</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.benefits.title}</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.benefits.items.map((item: any) => (
            <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-7">
              <div className="mb-6 h-1.5 w-14 rounded-full bg-[#d7b56d]" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

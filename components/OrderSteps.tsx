export default function OrderSteps({ t }: any) {
  return (
    <section id="order" className="bg-[#15110b] px-5 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d7b56d]">Заказ</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.order.title}</h2>
          </div>
          <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d7b56d] px-8 py-4 text-center font-black text-[#1f1a12]">
            {t.order.cta}
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {t.order.steps.map((step: string, index: number) => (
            <article key={step} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-7">
              <div className="mb-7 text-5xl font-black text-[#d7b56d]">{index + 1}</div>
              <p className="leading-7 text-white/70">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

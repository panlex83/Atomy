export default function FAQ({ t }: any) {
  return (
    <section id="faq" className="bg-[#fbf7ef] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">FAQ</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.faq.title}</h2>

        <div className="mt-10 space-y-4">
          {t.faq.items.map((item: any) => (
            <details key={item.question} className="rounded-[24px] bg-white p-6 shadow-lg shadow-[#8a6730]/5">
              <summary className="cursor-pointer font-black text-[#1f1a12]">{item.question}</summary>
              <p className="mt-4 leading-7 text-neutral-650">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

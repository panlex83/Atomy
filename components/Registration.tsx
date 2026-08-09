const registrationUrl = "https://www.atomy.kz/gate/join/easyreg/v2/45364114";

export default function Registration({ t }: any) {
  return (
    <section id="registration" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[#eadfc9] bg-gradient-to-br from-[#fffaf1] via-white to-[#f3e6c9] p-8 shadow-[0_28px_90px_rgba(91,65,27,0.10)] md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">{t.registration.label}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.registration.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{t.registration.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#15110b] px-7 py-4 font-black text-white hover:bg-[#2a2117]">{t.registration.button}</a>
              <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d7b56d] px-7 py-4 font-black text-[#1f1a12] hover:bg-[#e6c77d]">{t.registration.helpButton}</a>
            </div>
          </div>

          <div className="grid gap-4">
            {t.registration.steps.map((step: string, index: number) => (
              <div key={step} className="flex gap-4 rounded-[24px] border border-white bg-white/85 p-5 shadow-lg shadow-[#8a6730]/5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#15110b] font-black text-[#d7b56d]">0{index + 1}</span>
                <p className="pt-2 font-bold leading-6 text-[#2a241c]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

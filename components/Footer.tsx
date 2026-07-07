export default function Footer({ t }: any) {
  return (
    <footer className="bg-[#15110b] px-5 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black">{t.siteName}</p>
            <p className="mt-2 text-sm text-white/50">Atomy HemoHIM informational website</p>
          </div>
          <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d7b56d] px-6 py-3 text-center font-black text-[#1f1a12]">
            WhatsApp
          </a>
        </div>
        <p className="mt-8 max-w-5xl text-sm leading-6 text-white/50">{t.disclaimer}</p>
      </div>
    </footer>
  );
}

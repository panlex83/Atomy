export default function Contacts({ t }: any) {
  const instagramUrl = `https://instagram.com/${t.contacts.instagram}`;
  const tiktokUrl = `https://www.tiktok.com/@${t.contacts.tiktok}`;
  const emailUrl = `mailto:${t.contacts.email}`;

  return (
    <section id="contacts" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9a6b35]">Контакты</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f1a12] md:text-5xl">{t.contacts.title}</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Основной канал связи — WhatsApp. Напишите, чтобы уточнить наличие, условия заказа и доставки.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a href={t.whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-[24px] bg-[#15110b] p-6 text-white">
            <p className="text-sm text-[#d7b56d]">WhatsApp</p>
            <p className="mt-2 text-xl font-black">{t.contacts.whatsapp}</p>
          </a>
          <a href={emailUrl} className="rounded-[24px] bg-[#fbf7ef] p-6 text-[#1f1a12]">
            <p className="text-sm text-[#9a6b35]">Email</p>
            <p className="mt-2 break-words text-lg font-black">{t.contacts.email}</p>
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-[24px] bg-[#fbf7ef] p-6 text-[#1f1a12]">
            <p className="text-sm text-[#9a6b35]">Instagram</p>
            <p className="mt-2 text-lg font-black">{t.contacts.instagram}</p>
          </a>
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="rounded-[24px] bg-[#fbf7ef] p-6 text-[#1f1a12]">
            <p className="text-sm text-[#9a6b35]">TikTok</p>
            <p className="mt-2 text-lg font-black">{t.contacts.tiktok}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

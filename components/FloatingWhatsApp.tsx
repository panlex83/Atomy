"use client";

export default function FloatingWhatsApp({ t }: any) {
  return (
    <a
      href={t.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-black/30"
    >
      WhatsApp
    </a>
  );
}

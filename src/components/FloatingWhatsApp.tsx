import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_MESSAGE = "Halo RAVQINA! Saya tertarik dengan koleksi hijab Anda.";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Pulse Animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-card text-foreground px-3 py-2 rounded-lg shadow-md font-body text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat via WhatsApp
      </span>
    </button>
  );
};

export default FloatingWhatsApp;
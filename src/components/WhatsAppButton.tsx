import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  mobile?: boolean;
}

export function WhatsAppButton({ className = "", mobile = false }: WhatsAppButtonProps) {
  const whatsappUrl = "https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe.";
  
  if (mobile) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Per WhatsApp schreiben"
        className={`inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium ${className}`}
        style={{ minHeight: '44px', minWidth: '44px' }}
      >
        <MessageCircle size={20} />
        <span className="ml-2">WhatsApp</span>
      </a>
    );
  }
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp schreiben"
      className={`fixed bottom-4 right-4 z-50 flex items-center justify-center w-15 h-15 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all hover:scale-105 ${className}`}
      style={{ width: '60px', height: '60px' }}
    >
      <MessageCircle size={24} />
    </a>
  );
}
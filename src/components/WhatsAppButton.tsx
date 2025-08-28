interface WhatsAppButtonProps {
  className?: string;
  mobile?: boolean; // true = botón con texto; false = flotante redondo
}

export function WhatsAppButton({
  className = "",
  mobile = false,
}: WhatsAppButtonProps) {
  const whatsappUrl =
    "https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe.";

  if (mobile) {
    // Botón con texto para cabecera / sticky CTA
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Per WhatsApp schreiben"
        className={`inline-flex items-center justify-center font-medium px-4 py-2 rounded-lg transition-colors hover:opacity-90 ${className}`}
        style={{
          minHeight: "44px",
          minWidth: "44px",
          backgroundColor: "#25D366", // verde oficial
          color: "white",
        }}
      >
        <img
          src="/assets/WhatsApp-Icon.svg"
          alt=""
          aria-hidden="true"
          className="w-5 h-5"
        />
        <span className="ml-2">Per WhatsApp schreiben</span>
      </a>
    );
  }

  // Botón flotante redondo (esquina inferior derecha)
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp schreiben"
      className={`fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 ${className}`}
      style={{
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
      }}
    >
      <img
        src="/assets/WhatsApp-Icon.svg"
        alt=""
        aria-hidden="true"
        className="w-7 h-7"
      />
    </a>
  );
}

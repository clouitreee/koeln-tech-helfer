interface WhatsAppButtonProps {
  className?: string;
  mobile?: boolean;         // true = botón con texto; false = flotante
  label?: string;           // texto del botón (solo mobile)
  size?: "sm" | "md";       // alto del botón (solo mobile)
}

export function WhatsAppButton({
  className = "",
  mobile = false,
  label = "Nachricht",      // texto corto por defecto
  size = "md",
}: WhatsAppButtonProps) {
  const whatsappUrl =
    "https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe.";

  if (mobile) {
    const height = size === "md" ? "44px" : "40px";

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Per WhatsApp schreiben"
        className={`inline-flex items-center justify-center font-medium rounded-lg transition-colors hover:opacity-90 text-sm ${className}`}
        style={{
          minHeight: height,
          minWidth: "44px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "0 12px",
        }}
      >
        <img
          src="/assets/WhatsApp-Icon.svg"
          alt=""
          aria-hidden="true"
          className="w-5 h-5 shrink-0"
        />
        <span className="ml-2">{label}</span>
      </a>
    );
  }

  // Flotante redondo
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp schreiben"
      className={`fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 ${className}`}
      style={{ width: "56px", height: "56px", backgroundColor: "#25D366" }}
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

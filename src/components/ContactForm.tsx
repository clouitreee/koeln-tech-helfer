// src/components/ContactForm.tsx
// Formulario “tonto” que hace POST directo a Formspree.
// No usa hooks ni fetch, compila siempre, y envía correos.
export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xvgbzzyb"  // <-- tu endpoint
      method="POST"
      className="space-y-4"
    >
      {/* honeypot anti-bots */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      {/* asunto opcional */}
      <input type="hidden" name="_subject" value="Neue Website-Anfrage" />
      {/* redirección opcional después de enviar
      <input type="hidden" name="_next" value="https://koeln-tech-helfer.pages.dev/?sent=1" />
      */}

      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input name="name" required className="w-full rounded-lg bg-muted px-4 py-3 outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Telefon *</label>
        <input name="phone" required className="w-full rounded-lg bg-muted px-4 py-3 outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">E-Mail (optional)</label>
        <input type="email" name="email" className="w-full rounded-lg bg-muted px-4 py-3 outline-none" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Nachricht *</label>
        <textarea name="message" required rows={4} className="w-full rounded-lg bg-muted px-4 py-3 outline-none" />
      </div>

      <button type="submit" className="w-full rounded-xl bg-primary text-primary-foreground h-12 font-semibold">
        Nachricht senden
      </button>
    </form>
  );
}

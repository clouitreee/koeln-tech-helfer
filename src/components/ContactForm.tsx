import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xvgbzzyb"; // <-- tu endpoint real

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Fehler beim Senden.");
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Fehler beim Senden.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          name="name"
          required
          className="w-full rounded-lg bg-muted px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Telefon *</label>
        <input
          name="phone"
          required
          className="w-full rounded-lg bg-muted px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">E-Mail (optional)</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-lg bg-muted px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Nachricht *</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-lg bg-muted px-4 py-3 outline-none"
        />
      </div>

      {status === "ok" && (
        <p className="text-green-600 text-sm">
          Danke! Ich melde mich schnellstmöglich.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">Ups. {error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-primary text-primary-foreground h-12 font-semibold disabled:opacity-50"
      >
        {status === "sending" ? "Sende..." : "Nachricht senden"}
      </button>
    </form>
  );
}


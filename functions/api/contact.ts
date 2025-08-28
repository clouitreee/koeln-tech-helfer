// functions/api/contact.ts

type Env = {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
};

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  try {
    const body = await ctx.request.json().catch(() => null);
    const { name, phone, email, message } = (body ?? {}) as {
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
    };

    // Validación básica
    if (!name || !phone || !message) {
      return new Response("Felder fehlen.", { status: 400 });
    }

    // Email HTML
    const html = `
      <h2>Neue Anfrage von der Website</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Telefon:</strong> ${esc(phone)}</p>
      ${email ? `<p><strong>E-Mail:</strong> ${esc(email)}</p>` : ""}
      <p><strong>Nachricht:</strong></p>
      <pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial">${esc(message)}</pre>
    `;

    // Llamada a Resend
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ctx.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ctx.env.CONTACT_FROM, // ej: "Website <onboarding@resend.dev>" o dominio verificado
        to: [ctx.env.CONTACT_TO],   // tu email destino
        subject: "Neue Website-Anfrage",
        html,
      }),
    });

    if (!r.ok) {
      const txt = await r.text();
      return new Response(`Mail-Fehler: ${txt}`, { status: 500 });
    }

    return json({ ok: true });
  } catch (e: any) {
    return new Response(`Fehler: ${e?.message || "Unbekannt"}`, { status: 500 });
  }
};

// Helpers
function json(data: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    ...init,
  });
}

function esc(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

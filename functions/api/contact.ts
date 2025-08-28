// functions/api/contact.ts
export const onRequestPost: PagesFunction<{
  RESEND_API_KEY: string
  CONTACT_TO: string
  CONTACT_FROM: string
}> = async (ctx) => {
  try {
    const body = await ctx.request.json();
    const { name, phone, email, message } = body || {};

    if (!name || !phone || !message) {
      return new Response("Felder fehlen.", { status: 400 });
    }

    const html = `
      <h2>Neue Anfrage von der Website</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Telefon:</strong> ${esc(phone)}</p>
      ${email ? `<p><strong>E-Mail:</strong> ${esc(email)}</p>` : ""}
      <p><strong>Nachricht:</strong></p>
      <pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial">${esc(message)}</pre>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ctx.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ctx.env.CONTACT_FROM,   // ej: "Website <noreply@tu-dominio.dev>"
        to: [ctx.env.CONTACT_TO],     // ej: "pleinto@proton.me"
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

function json(data: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    ...init,
  });
}

function esc(s: string) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// _worker.js — Pages Advanced Mode (JS)

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Salud de vida: GET /api/ping => "pong"
    if (url.pathname === "/api/ping") {
      return new Response("pong", { status: 200 });
    }

    // Form endpoint
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }
      try {
        const body = await request.json().catch(() => null);
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
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: env.CONTACT_FROM,
            to: [env.CONTACT_TO],
            subject: "Neue Website-Anfrage",
            html,
          }),
        });

        if (!r.ok) {
          const txt = await r.text();
          return new Response(`Mail-Fehler: ${txt}`, { status: 500 });
        }

        return new Response(JSON.stringify({ ok: true }), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (e) {
        return new Response(`Fehler: ${e && e.message ? e.message : "Unbekannt"}`, { status: 500 });
      }
    }

    // Estáticos de Pages
    return env.ASSETS.fetch(request);
  },
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


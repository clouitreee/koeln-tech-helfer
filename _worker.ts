// _worker.ts — Pages Advanced Mode

export interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
  ASSETS: Fetcher; // estático de Pages
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    // Endpoint del formulario
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }
      try {
        const body = await request.json().catch(() => null);
        const { name, phone, email, message } = (body ?? {}) as {
          name?: string; phone?: string; email?: string; message?: string;
        };

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
            from: env.CONTACT_FROM,   // ej: "Website <onboarding@resend.dev>"
            to: [env.CONTACT_TO],     // tu email destino
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
    }

    // Todo lo demás: sirve los archivos estáticos
    return env.ASSETS.fetch(request);
  },
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


export default function Datenschutz() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Datenschutzerklärung</h1>

      <p>
        <strong>Verantwortlich:</strong><br />
        [Dein vollständiger Name]<br />
        E-Mail: info@claveon.de
      </p>

      <h2 className="text-xl font-semibold mt-6">Erhobene Daten</h2>
      <p>
        Wir speichern keine personenbezogenen Daten außer denjenigen,
        die Sie uns freiwillig über das Kontaktformular senden.
      </p>

      <h2 className="text-xl font-semibold mt-6">Kontaktformular</h2>
      <p>
        Das Formular wird über den Dienst{" "}
        <a
          className="underline"
          href="https://formspree.io/"
          target="_blank"
          rel="noreferrer"
        >
          Formspree
        </a>{" "}
        verarbeitet. Die eingegebenen Daten werden ausschließlich zur
        Beantwortung Ihrer Anfrage verwendet und nicht dauerhaft
        gespeichert.
      </p>

      <h2 className="text-xl font-semibold mt-6">Hosting</h2>
      <p>
        Die Website wird über Cloudflare Pages bereitgestellt. Dabei
        können technische Zugriffsdaten (z. B. IP-Adresse) verarbeitet
        werden.
      </p>

      <h2 className="text-xl font-semibold mt-6">Ihre Rechte</h2>
      <p>
        Nach DSGVO: Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung. Kontakt: info@claveon.de
      </p>
    </main>
  );
}

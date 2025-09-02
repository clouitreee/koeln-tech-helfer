export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>

      <p>
        <strong>Verantwortlich nach § 5 TMG:</strong><br />
        Martin<br />
        Liebigstraße<br />
        50823 Köln
      </p>

      <p className="mt-2">
        <strong>E-Mail:</strong> info@claveon.de
      </p>

      <p className="mt-4 text-sm text-muted-foreground">
        Dies ist ein unabhängiges Projekt, aktuell ohne klassischen
        kommerziellen Betrieb. Angaben in reduzierter Form.
      </p>
    </main>
  );
}

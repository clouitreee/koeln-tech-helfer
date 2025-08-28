import { useState } from "react";
import { Phone, Download, Share2, Wifi, Monitor, Smartphone, Printer, Tv, Home, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [shareSupported] = useState(typeof navigator !== "undefined" && "share" in navigator);

  const whatsappUrl = "https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe.";
  const phoneUrl = "tel:+4915565029989";
  const vcardUrl = "/assets/martin.vcf";

  const shareWebsite = async () => {
    const href = typeof window !== "undefined" ? window.location.href : "";
    if (shareSupported && typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as any).share({
          title: "Technikhilfe Martin Köln",
          url: href,
        });
      } catch (_) {
        window.open(`https://wa.me/?text=${encodeURIComponent(href)}`, "_blank");
      }
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(href)}`, "_blank");
    }
  };

  const services = [
    { icon: <Wifi className="w-8 h-8" />, title: "WLAN & Internet", description: "Router, Repeater, langsames WLAN beheben." },
    { icon: <Monitor className="w-8 h-8" />, title: "PC & Mac", description: "Einrichtung, Updates, Malware-Check, Sicherung." },
    { icon: <Smartphone className="w-8 h-8" />, title: "Smartphone & Tablet", description: "Apps, E-Mail, Fotos, WhatsApp, Backups." },
    { icon: <Printer className="w-8 h-8" />, title: "Drucker & Scanner", description: "Installation, WLAN-Druck, Fehlermeldungen." },
    { icon: <Tv className="w-8 h-8" />, title: "TV & Streaming", description: "Sender, Smart-TV, Mediatheken." },
    { icon: <Home className="w-8 h-8" />, title: "Smart Home", description: "Grundeinrichtung, sichere Nutzung." },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Schulung", description: "Schritt für Schritt, geduldig." },
  ];

  const steps = [
    { number: "1", title: "Termin vereinbaren", description: "WhatsApp schreiben oder anrufen. Wir finden schnell einen Termin." },
    { number: "2", title: "Vor Ort helfen", description: "Einrichten, prüfen, erklären in Ruhe – ohne Fachjargon." },
    { number: "3", title: "Fertig & entspannt", description: "Alles läuft. Sie nutzen Ihre Technik stressfrei." },
  ];

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="min-h-screen bg-background">
      {/* Botón flotante WhatsApp */}
      <WhatsAppButton />

      {/* Header/Hero */}
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Technikhilfe in Köln – schnell, freundlich, zuverlässig.</h1>
              <h2 className="text-xl mb-6 opacity-90">Hilfe bei Computer, WLAN, Smartphone, Drucker und TV – direkt bei Ihnen zuhause.</h2>

              <div className="flex flex-wrap gap-4 items-center">
                {/* Botón WhatsApp con texto (verde oficial, bordes correctos) */}
                <WhatsAppButton mobile className="px-4 py-2" />

                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  style={{ minHeight: "44px" }}
                >
                  <a href={phoneUrl} aria-label="Anrufen">
                    <Phone className="w-5 h-5 mr-2" />
                    Anrufen
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  style={{ minHeight: "44px" }}
                >
                  <a href={vcardUrl} download aria-label="vCard speichern">
                    <Download className="w-5 h-5 mr-2" />
                    vCard speichern
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/assets/qr-whatsapp.svg"
                alt="QR-Code für WhatsApp-Kontakt"
                className="w-48 h-48 mx-auto mb-4 bg-white p-4 rounded-lg"
              />
              <p className="text-sm opacity-80">Kamera öffnen → QR anvisieren → Link antippen.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sticky CTA (mejorado) */}
<div className="md:hidden fixed inset-x-0 bottom-0 z-40">
  <div
    className="mx-auto w-full max-w-screen-sm px-4 pt-3 border-t border-border bg-card/95 backdrop-blur"
    // safe-area para iPhone (evita que el CTA quede pegado al borde/gestos)
    style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}
  >
    <div className="flex gap-2">
      <WhatsAppButton mobile className="flex-1 rounded-lg py-3 text-center text-sm" />
      <Button asChild variant="outline" className="flex-1 rounded-lg py-3 text-center text-sm">
        <a href={phoneUrl} aria-label="Anrufen">
          {/* icono + texto compactos */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.6.62A2 2 0 0 1 22 16.92z" />
          </svg>
          Anrufen
        </a>
      </Button>
    </div>
  </div>
</div>

{/* Padding inferior para que el sticky no tape contenido */}
<div className="md:hidden" style={{ height: "calc(env(safe-area-inset-bottom) + 84px)" }} />


      {/* So arbeite ich */}
      <section id="arbeitsweise" className="py-16 bg-card">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12">So arbeite ich</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12">Leistungen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">Markenunabhängig. Erklärungen in einfachem Deutsch.</p>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="py-16 bg-card">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">Über mich</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Ich bin Martin. Ich helfe in Köln bei Technikfragen vor Ort. Ich arbeite ruhig, strukturiert und lösungsorientiert. Wichtig ist mir: verständliche Erklärungen und schnelle Hilfe.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Erfahrung</h3>
                <p className="text-muted-foreground">Vor-Ort-Support, Einrichtung, Fehlersuche</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sicherheit</h3>
                <p className="text-muted-foreground">Datenschutz beachtet</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sprachen</h3>
                <p className="text-muted-foreground">Deutsch, Spanisch, Englisch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12">Kontakt</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Kontaktdaten</h3>
              <div className="space-y-4">
                <div><strong>Telefon:</strong> +49 1556 5029989</div>
                <div>
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:pleinto@proton.me" className="text-primary hover:underline">pleinto@proton.me</a>
                </div>
                <div>
                  <strong>WhatsApp:</strong>{" "}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Direkt schreiben</a>
                </div>
                <div><strong>Einsatzgebiet:</strong> Köln und Umgebung</div>
                <div><strong>Zeiten:</strong> Nach Vereinbarung, meist Mo–Fr 9–18 Uhr</div>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm"><strong>Hinweis:</strong> Wenn ich im Termin bin, rufe ich zurück.</p>
                <p className="text-sm mt-2"><strong>Zahlung:</strong> Zahlung nach Termin. Details per WhatsApp.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Weiterempfehlen */}
      <section id="weiterempfehlen" className="py-16 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Zufrieden? Empfehlen Sie mich weiter.</h2>
            <p className="mb-6">
              Teilen Sie diesen Link mit Familie oder Freunden: <strong>{origin}</strong>
            </p>
            <Button onClick={shareWebsite} className="inline-flex items-center" style={{ minHeight: "44px" }}>
              <Share2 className="w-5 h-5 mr-2" />
              Link per WhatsApp teilen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="rechtliches" className="py-12 bg-muted">
        <div className="container">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#impressum" className="text-muted-foreground hover:text-foreground">Impressum</a>
              <a href="#datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutzerklärung</a>
            </div>
            <p className="text-sm text-muted-foreground">Keine Tracking-Cookies. Keine Weitergabe Ihrer Daten an Dritte.</p>
          </div>
        </div>
      </footer>

      {/* Padding inferior para que el sticky no tape contenido */}
      <div className="md:hidden h-20" />
    </div>
  );
};

export default Index;

import { useState } from "react";
import {
  Share2,
  Wifi,
  Monitor,
  Smartphone,
  Printer,
  Tv,
  Home,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [shareSupported] = useState(
    typeof navigator !== "undefined" && "share" in navigator
  );

  const shareWebsite = async () => {
    const href = typeof window !== "undefined" ? window.location.href : "";
    if (shareSupported && typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as any).share({
          title: "Technikhilfe Martin Köln",
          url: href,
        });
      } catch {
        window.open(`https://wa.me/?text=\${encodeURIComponent(href)}`, "_blank");
      }
    } else {
      window.open(`https://wa.me/?text=\${encodeURIComponent(href)}`, "_blank");
    }
  };

  const whatsappHref =
    "https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe.";

  const services = [
    { icon: <Wifi className="w-7 h-7 md:w-8 md:h-8" />, title: "WLAN & Internet", description: "Router, Repeater, langsames WLAN beheben." },
    { icon: <Monitor className="w-7 h-7 md:w-8 md:h-8" />, title: "PC & Mac", description: "Einrichtung, Updates, Malware-Check, Sicherung." },
    { icon: <Smartphone className="w-7 h-7 md:w-8 md:h-8" />, title: "Smartphone & Tablet", description: "Apps, E-Mail, Fotos, WhatsApp, Backups." },
    { icon: <Printer className="w-7 h-7 md:w-8 md:h-8" />, title: "Drucker & Scanner", description: "Installation, WLAN-Druck, Fehlermeldungen." },
    { icon: <Tv className="w-7 h-7 md:w-8 md:h-8" />, title: "TV & Streaming", description: "Sender, Smart-TV, Mediatheken." },
    { icon: <Home className="w-7 h-7 md:w-8 md:h-8" />, title: "Smart Home", description: "Grundeinrichtung, sichere Nutzung." },
    { icon: <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />, title: "Schulung", description: "Schritt für Schritt, geduldig." },
  ];

  const steps = [
    { number: "1", title: "Termin vereinbaren", description: "Per WhatsApp schreiben oder E-Mail senden. Wir finden schnell einen Termin." },
    { number: "2", title: "Vor Ort helfen", description: "Einrichten, prüfen, erklären in Ruhe – ohne Fachjargon." },
    { number: "3", title: "Fertig & entspannt", description: "Alles läuft. Sie nutzen Ihre Technik stressfrei." },
  ];

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="hero py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Columna texto */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Technikhilfe in Köln – schnell, freundlich, zuverlässig.
              </h1>
              <h2 className="text-lg md:text-xl mb-6 opacity-90">
                Hilfe bei Computer, WLAN, Smartphone, Drucker und TV – direkt bei Ihnen zuhause.
              </h2>

              {/* CTA WhatsApp y E-Mail */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                {/* WhatsApp */}
                <Button
                  className="inline-flex items-center rounded-full px-5 md:px-6 py-3 text-base md:text-lg font-semibold shadow"
                  style={{ minHeight: "44px", backgroundColor: "#25D366", color: "#ffffff" }}
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Per WhatsApp schreiben"
                    className="flex items-center no-underline"
                  >
                    <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-2 inline-block align-middle" />
                    WhatsApp
                  </a>
                </Button>

                {/* E-Mail */}
                <Button
                  className="inline-flex items-center rounded-full px-5 md:px-6 py-3 text-base md:text-lg font-semibold shadow"
                  style={{ minHeight: "44px", backgroundColor: "#2563EB", color: "#ffffff" }}
                >
                  <a href="mailto:info@claveon.de" aria-label="E-Mail schreiben" className="flex items-center no-underline">
                    <img src="/assets/mail.svg" alt="E-Mail" className="w-5 h-5 mr-2 inline-block align-middle" />
                    E-Mail
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna QR */}
            <div className="text-center">
              <img
                src="/assets/qr-whatsapp.svg"
                alt="QR-Code für WhatsApp-Kontakt"
                className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 bg-white p-4 rounded-lg"
              />
              <p className="text-xs md:text-sm opacity-80">
                Kamera öffnen → QR anvisieren → Link antippen.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* PASOS */}
      <section id="arbeitsweise" className="py-14 md:py-16 bg-card">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            So arbeite ich
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4">
                  {s.number}
                </div>
                <h3 className="text-lg font-semibold mb-1.5">{s.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="leistungen" className="py-14 md:py-16">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Leistungen
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-6 md:mb-8">
            {services.map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-base md:text-lg font-semibold mb-1.5">{service.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm md:text-base">
            Markenunabhängig. Erklärungen in einfachem Deutsch.
          </p>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="ueber-mich" className="py-14 md:py-16 bg-card">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Über mich
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg mb-5 md:mb-6">
              Ich bin Martin. Ich helfe in Köln bei Technikfragen vor Ort. Ich arbeite ruhig,
              strukturiert und lösungsorientiert. Wichtig ist mir: verständliche Erklärungen
              und schnelle Hilfe.
            </p>
            <div className="grid sm:grid-cols-3 gap-5 md:gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-1.5">Erfahrung</h3>
                <p className="text-muted-foreground text-sm">Vor-Ort-Support, Einrichtung, Fehlersuche</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1.5">Sicherheit</h3>
                <p className="text-muted-foreground text-sm">Datenschutz beachtet</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1.5">Sprachen</h3>
                <p className="text-muted-foreground text-sm">Deutsch, Spanisch, Englisch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="kontakt" className="py-14 md:py-16">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-12">Kontakt</h2>
        <div className="max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Nachricht senden</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* COMPARTIR */}
      <section id="weiterempfehlen" className="py-14 md:py-16 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
              Zufrieden? Empfehlen Sie mich weiter.
            </h2>
            <p className="mb-4 md:mb-6 text-sm md:text-base">
              Teilen Sie diesen Link mit Familie oder Freunden: <strong>{origin}</strong>
            </p>
            <Button onClick={shareWebsite} className="inline-flex items-center" style={{ minHeight: "44px" }}>
              <Share2 className="w-5 h-5 mr-2" />
              Link per WhatsApp teilen
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="rechtliches" className="py-10 md:py-12 bg-muted">
        <div className="container">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-5 md:gap-6 mb-5 md:mb-6">
              <a href="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</a>
              <a href="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutzerklärung</a>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Keine Tracking-Cookies. Keine Weitergabe Ihrer Daten an Dritte.</p>
          </div>
        </div>
      </footer>

      <div className="md:hidden h-20" />
    </div>
  );
};

export default Index;

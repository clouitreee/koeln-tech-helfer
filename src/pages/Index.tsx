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
  MessageCircle, // icono válido en lucide-react
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
    { number: "1", title: "Termin vereinbaren", description: "WhatsApp schreiben. Wir finden schnell einen Termin." },
    { number: "2", title: "Vor Ort helfen", description: "Einrichten, prüfen, erklären in Ruhe – ohne Fachjargon." },
    { number: "3", title: "Fertig & entspannt", description: "Alles läuft. Sie nutzen Ihre Technik stressfrei." },
  ];

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Hero */}
      <header className="hero py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Technikhilfe in Köln – schnell, freundlich, zuverlässig.
              </h1>
              <h2 className="text-xl mb-6 opacity-90">
                Hilfe bei Computer, WLAN, Smartphone, Drucker und TV – direkt bei Ihnen zuhause.
              </h2>

              {/* CTA principal: solo WhatsApp */}
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <Button
                  asChild
                  className="inline-flex items-center rounded-full px-6 py-3 text-lg font-semibold"
                  style={{
                    minHeight: "44px",
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                  }}
                >
                  <a
                    href="https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Per WhatsApp schreiben"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>

                <p className="text-sm opacity-90 ml-2">
                  oder per E-Mail:{" "}
                  <a href="mailto:info@claveon.de" className="underline">
                    info@claveon.de
                  </a>
                </p>
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

      {/* Mobile Sticky CTA (solo WhatsApp) */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40">
        <div
          className="mx-auto w-full max-w-screen-sm px-4 pt-3 border-t border-border bg-card/95 backdrop-blur"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}
        >
          <div className="flex gap-2">
            <Button
              asChild
              className="flex-1 rounded-lg text-center"
              style={{ minHeight: "44px", backgroundColor: "#25D366", color: "#ffffff" }}
            >
              <a
                href="https://wa.me/4915565029989?text=Hallo%20Martin%2C%20ich%20brauche%20Hilfe."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2 inline-block" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* padding inferior acorde al sticky */}
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

      {/* Kontakt: solo formulario */}
      <section id="kontakt" className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12">Kontakt</h2>
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
            <ContactForm />
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
              <a href="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</a>
              <a href="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutzerklärung</a>
            </div>
            <p className="text-sm text-muted-foreground">
              Keine Tracking-Cookies. Keine Weitergabe Ihrer Daten an Dritte.
            </p>
          </div>
        </div>
      </footer>

      {/* Padding inferior para que el sticky no tape contenido */}
      <div className="md:hidden h-20" />
    </div>
  );
};

export default Index;

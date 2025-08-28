import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Technikhilfe Anfrage von ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Telefon: ${formData.phone}
E-Mail: ${formData.email}

Nachricht:
${formData.message}
    `);
    
    window.location.href = `mailto:pleinto@proton.me?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div 
        className="bg-card border border-border rounded-lg p-6 text-center"
        aria-live="polite"
      >
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">Danke!</h3>
        <p className="text-muted-foreground">Ihre Nachricht ist eingegangen. Ich melde mich bald.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div>
        <Label htmlFor="name" className="text-sm font-medium">
          Name *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1"
          style={{ minHeight: '44px' }}
        />
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-sm font-medium">
          Telefon *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1"
          style={{ minHeight: '44px' }}
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          E-Mail (optional)
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1"
          style={{ minHeight: '44px' }}
        />
      </div>
      
      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Nachricht *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 min-h-24"
          placeholder="Beschreiben Sie kurz Ihr Technikproblem..."
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        style={{ minHeight: '44px' }}
      >
        Nachricht senden
      </Button>
    </form>
  );
}
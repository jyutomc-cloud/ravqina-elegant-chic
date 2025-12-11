import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "6281234567890";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = "Halo RAVQINA! Saya ingin bertanya tentang produk hijab Anda.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium text-accent uppercase tracking-widest">
            Hubungi Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Mari Terhubung
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Punya pertanyaan atau ingin memesan? Hubungi kami melalui WhatsApp atau kirim pesan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg animate-fade-in">
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Kirim Pesan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Nama Lengkap
                </label>
                <Input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-accent"
                />
              </div>
              
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-accent"
                />
              </div>
              
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Pesan
                </label>
                <Textarea
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background border-border focus:border-accent resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                <Send size={18} />
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* WhatsApp CTA */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">
                Order via WhatsApp
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Untuk pemesanan yang lebih cepat, hubungi kami langsung melalui WhatsApp.
              </p>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-3 py-6 text-lg"
              >
                <MessageCircle size={24} />
                Chat via WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-xl font-semibold text-primary mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-body font-medium text-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email</p>
                    <p className="font-body font-medium text-foreground">hello@ravqina.id</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Instagram</p>
                    <p className="font-body font-medium text-foreground">@ravqina.official</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-body font-medium text-foreground">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
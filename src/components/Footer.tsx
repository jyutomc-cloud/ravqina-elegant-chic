import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";
import logo from "@/assets/ravqina-logo.jpg";

const WHATSAPP_NUMBER = "6281234567890";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="RAVQINA Official"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-display text-xl font-semibold">
                RAVQINA Official
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Hijab premium dengan desain modern dan elegan untuk perempuan Indonesia 
              yang ingin tampil anggun dalam setiap momen.
            </p>
            <p className="font-display text-lg italic text-accent">
              "Elegance in Every Fold"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 mb-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/ravqina.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@ravqina.id"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="font-body text-sm text-primary-foreground/70">
              Tersedia setiap hari, 09:00 - 21:00 WIB
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-1">
              © 2025 RAVQINA Official. Made with <Heart size={14} className="text-accent" /> in Indonesia
            </p>
            <p className="font-body text-xs text-primary-foreground/40">
              Designed by RAVQINA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
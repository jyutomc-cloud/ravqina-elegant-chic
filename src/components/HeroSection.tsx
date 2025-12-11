import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hijab1 from "@/assets/hijab-1.jpg";
import hijab2 from "@/assets/hijab-2.jpg";
import hijab3 from "@/assets/hijab-3.jpg";
import hijab4 from "@/assets/hijab-4.jpg";

const slides = [
  {
    image: hijab1,
    title: "Elegance in Every Fold",
    subtitle: "Anggun, Lembut, dan Modern Bersama Ravqina",
  },
  {
    image: hijab2,
    title: "Soft, Stylish, and Soulful",
    subtitle: "Hijab yang Menyempurnakan Dirimu",
  },
  {
    image: hijab3,
    title: "Premium Quality Hijab",
    subtitle: "Bahan Lembut, Jahitan Rapi, Warna Elegan",
  },
  {
    image: hijab4,
    title: "Modern Muslim Fashion",
    subtitle: "Tampil Percaya Diri dalam Setiap Momen",
  },
];

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_MESSAGE = "Halo RAVQINA! Saya tertarik dengan koleksi hijab Anda.";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/60" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            >
              Shop via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#product")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              Lihat Koleksi
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/30 backdrop-blur-sm text-primary-foreground hover:bg-card/50 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/30 backdrop-blur-sm text-primary-foreground hover:bg-card/50 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
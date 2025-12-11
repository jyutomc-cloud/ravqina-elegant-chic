import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aisyah R.",
    role: "Mahasiswi",
    content: "Hijab Ravqina bahannya super lembut dan adem banget! Warnanya juga cantik-cantik, cocok untuk daily maupun acara formal.",
    avatar: "A",
  },
  {
    id: 2,
    name: "Fatimah S.",
    role: "Karyawan Swasta",
    content: "Sudah langganan dari awal launching! Kualitasnya konsisten, jahitannya rapi, dan yang paling penting nyaman dipakai seharian.",
    avatar: "F",
  },
  {
    id: 3,
    name: "Khadijah M.",
    role: "Ibu Rumah Tangga",
    content: "Suka banget sama koleksi warnanya yang soft dan elegan. Anak-anak saya juga suka pakai hijab Ravqina!",
    avatar: "K",
  },
  {
    id: 4,
    name: "Maryam H.",
    role: "Guru",
    content: "Pelayanannya ramah, pengirimannya cepat, dan produknya sesuai ekspektasi. Recommended banget!",
    avatar: "M",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium text-accent uppercase tracking-widest">
            Testimoni
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Cerita dari para pelanggan setia Ravqina yang telah merasakan kenyamanan dan keanggunan hijab kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial */}
          <div className="bg-gradient-elegant rounded-3xl p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-accent/30 mb-6" />
            
            <div className="min-h-[120px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-accent">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-muted hover:bg-accent/20 text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-muted hover:bg-accent/20 text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
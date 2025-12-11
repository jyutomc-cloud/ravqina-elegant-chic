import { Flower2, Heart, Star, Crown } from "lucide-react";
import logo from "@/assets/ravqina-logo.jpg";

const values = [
  {
    icon: Flower2,
    title: "Lembut & Menenangkan",
    description: "Hijab nyaman dengan warna-warna yang menenangkan dan material pilihan.",
  },
  {
    icon: Heart,
    title: "Elegan Tanpa Berlebihan",
    description: "Desain simple-chic dengan sentuhan keanggunan natural.",
  },
  {
    icon: Star,
    title: "Modern & Kekinian",
    description: "Untuk perempuan masa kini yang aktif dan ingin tetap stylish.",
  },
  {
    icon: Crown,
    title: "Beridentitas & Bermakna",
    description: "Bagian dari perjalanan dan ekspresi diri perempuan modern.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="font-body text-sm font-medium text-accent uppercase tracking-widest">
              Tentang Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Filosofi RAVQINA
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                <strong className="text-primary">RAVQINA</strong> terinspirasi dari kesan lembut, 
                modern, dan penuh keanggunan yang melekat pada perempuan masa kini.
              </p>
              
              <div className="pl-4 border-l-4 border-accent">
                <p className="mb-2">
                  <strong className="text-primary">RAV</strong> — Melambangkan "radiance", 
                  cahaya keanggunan yang terpancar dari pribadi setiap perempuan.
                </p>
                <p>
                  <strong className="text-primary">QINA</strong> — Berasal dari kata yang 
                  menggambarkan perlindungan dan ketenangan, seperti hijab yang menjadi 
                  pelindung dan identitas.
                </p>
              </div>

              <blockquote className="font-display text-2xl italic text-primary text-center py-6">
                "Hijab yang Menyempurnakan Dirimu"
              </blockquote>
            </div>
          </div>

          {/* Right - Logo & Values */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Logo Display */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-accent/20">
                  <img
                    src={logo}
                    alt="RAVQINA Official Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: "20s" }} />
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-4 bg-card rounded-xl shadow-sm hover-lift"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <value.icon className="w-8 h-8 text-accent mb-2" />
                  <h4 className="font-display text-sm font-semibold text-primary mb-1">
                    {value.title}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-card rounded-2xl shadow-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Crown className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">Visi</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Menjadi brand hijab modern yang mengutamakan kenyamanan, kualitas, 
              serta nilai elegansi perempuan Indonesia dalam setiap desain.
            </p>
          </div>

          <div className="p-8 bg-card rounded-2xl shadow-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">Misi</h3>
            </div>
            <ul className="font-body text-muted-foreground leading-relaxed space-y-2">
              <li>• Menghadirkan produk hijab dengan material premium dan nyaman.</li>
              <li>• Mengembangkan desain yang mengikuti tren tanpa meninggalkan nilai kesopanan.</li>
              <li>• Mendukung perempuan untuk tampil percaya diri, anggun, dan berkelas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
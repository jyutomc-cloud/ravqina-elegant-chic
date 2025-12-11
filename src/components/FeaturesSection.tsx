import { Sparkles, Palette, Scissors, Calendar } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Bahan Lembut",
    description: "Material premium yang nyaman dipakai seharian dengan tekstur halus dan ringan.",
  },
  {
    icon: Palette,
    title: "Warna Elegan",
    description: "Koleksi warna soft dan menenangkan yang selalu update mengikuti tren.",
  },
  {
    icon: Scissors,
    title: "Jahitan Rapi",
    description: "Standar kualitas tinggi dengan finishing yang sempurna di setiap detailnya.",
  },
  {
    icon: Calendar,
    title: "Cocok Segala Acara",
    description: "Dari kegiatan harian hingga acara formal, tampil anggun dalam setiap momen.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Keunggulan Ravqina Hijab
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Setiap hijab Ravqina dibuat dengan cinta dan dedikasi untuk menghadirkan
            kenyamanan dan keanggunan yang sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-sm hover-lift text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
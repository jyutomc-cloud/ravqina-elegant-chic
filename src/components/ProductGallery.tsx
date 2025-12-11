import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import hijab1 from "@/assets/hijab-1.jpg";
import hijab2 from "@/assets/hijab-2.jpg";
import hijab3 from "@/assets/hijab-3.jpg";
import hijab4 from "@/assets/hijab-4.jpg";
import hijab5 from "@/assets/hijab-5.jpg";
import hijab6 from "@/assets/hijab-6.jpg";
import hijab7 from "@/assets/hijab-7.jpg";
import hijab8 from "@/assets/hijab-8.jpg";

const WHATSAPP_NUMBER = "6281234567890";

const products = [
  { id: 1, image: hijab1, name: "Ravqina Hijab - Koleksi 1" },
  { id: 2, image: hijab2, name: "Ravqina Hijab - Koleksi 2" },
  { id: 3, image: hijab3, name: "Ravqina Hijab - Koleksi 3" },
  { id: 4, image: hijab4, name: "Ravqina Hijab - Koleksi 4" },
  { id: 5, image: hijab5, name: "Ravqina Hijab - Koleksi 5" },
  { id: 6, image: hijab6, name: "Ravqina Hijab - Koleksi 6" },
  { id: 7, image: hijab7, name: "Ravqina Hijab - Koleksi 7" },
  { id: 8, image: hijab8, name: "Ravqina Hijab - Koleksi 8" },
];

const ProductGallery = () => {
  const handleOrderClick = (productName: string) => {
    const message = `Halo RAVQINA! Saya tertarik untuk memesan ${productName}. Mohon info lebih lanjut.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="product" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium text-accent uppercase tracking-widest">
            Koleksi Terbaru
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Galeri Produk
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Temukan koleksi hijab premium kami dengan desain modern dan bahan berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-muted animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <h3 className="font-display text-lg font-semibold text-primary-foreground text-center mb-3">
                  {product.name}
                </h3>
                <Button
                  size="sm"
                  onClick={() => handleOrderClick(product.name)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <ShoppingBag size={16} />
                  Order via WA
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
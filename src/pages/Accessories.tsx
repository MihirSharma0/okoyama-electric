import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ShoppingBag, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accessories = () => {
  const accessories = [
    {
      id: "smart-helmet",
      name: "Okoyama Aero-HeadsUp Helmet",
      desc: "Premium smart helmet with integrated Bluetooth intercom, bone-conduction audio, and auto-braking rear LED lights.",
      price: "₹8,999",
      tag: "Best Seller",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "hyper-home-pod",
      name: "HyperCharger Home Pod (15A)",
      desc: "Vibration-proof fast home charging dock with surge protection and auto-shutoff mechanism.",
      price: "₹14,499",
      tag: "Essential",
      image: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "utility-mount",
      name: "MagSafe Precision Utility Mount",
      desc: "Anodized aerospace aluminum mount with 15W wireless MagSafe charging and anti-vibration rubber damper.",
      price: "₹2,499",
      tag: "New",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a128f3e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "leather-saddle",
      name: "Heritage Ergonomic Tan Saddle",
      desc: "Handcrafted authentic tan leather saddle with memory foam padding, engineered to resist all weather conditions.",
      price: "₹4,999",
      tag: "Premium",
      image: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Premium Accessories | Okoyama Electric</title>
        <meta name="description" content="Shop official Okoyama accessories. From smart bluetooth helmets to custom tan leather seats and high-speed chargers." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Okoyama Gear
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Crafted <span className="text-gradient-gold">Accessories</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enhance your ride with bespoke, wind-tunnel tested accessories tailored for Okoyama scooters.
            </p>
          </motion.div>
        </section>

        {/* Catalog */}
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessories.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden card-premium flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-48 bg-secondary/20 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-md uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-foreground line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{item.desc}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-semibold">
                        <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                        <span>4.9 (124 reviews)</span>
                      </div>
                    </div>
                    <Button variant="hero" className="w-full text-xs py-5">
                      <ShoppingBag className="w-4 h-4 mr-2" /> Add to Order
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessories;

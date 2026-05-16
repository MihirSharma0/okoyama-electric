import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import vintage1990 from "@/assets/vintage-1990.png";
import sportPro from "@/assets/Sport_Pro.png";
import eagleEye from "@/assets/Eagle_Eye.png";
import trench from "@/assets/Trench.png";
import trigger3x from "@/assets/Trigger_3x.png";
import truss from "@/assets/Truss.png";
import wexproRound from "@/assets/Wexpro_Round.png";
import wexproSquare from "@/assets/Wexpro_Square.png";

// Modal Images (JPEGs)
import sportJpg from "@/assets/Sport.jpeg";
import sportProJpg from "@/assets/Sport_Pro.jpeg";
import eagleEyeJpg from "@/assets/Eagle_Eye.jpeg";
import trenchJpg from "@/assets/Trench_X.jpeg";
import trigger3xJpg from "@/assets/Trigger_3X.jpeg";
import trussJpg from "@/assets/Truss_2X.jpeg";
import wexproRoundJpg from "@/assets/Wexpro_Round.jpeg";
import wexproSquareJpg from "@/assets/Wexpro_Square.jpeg";

import { X, Calendar, MapPin, Phone, User, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const products = [
  {
    id: "sport",
    name: "Sport",
    tagline: "Classically Electric",
    description: "A timeless design meets modern electric mobility. Perfect for those who appreciate classic aesthetics with zero emissions.",
    image: vintage1990,
    modalImage: sportJpg,
    price: "From ₹1,29,000",
    specs: ["48V | 60V", "Lead Acid | Lithium", "10\" Wheels"],
    featured: true,
  },
  {
    id: "sport-pro",
    name: "Sport Pro",
    tagline: "Dynamic & Bold",
    description: "Built for the urban athlete. The Sport Pro offers agile handling and aggressive styling for the modern commuter.",
    image: sportPro,
    modalImage: sportProJpg,
    price: "From ₹1,49,000",
    specs: ["48V | 60V", "Lead Acid | Lithium", "Front/Rear Drum"],
    featured: false,
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    tagline: "Modern Precision",
    description: "Sharp lines and advanced features. Eagle Eye designed for peak performance and visibility in any condition.",
    image: eagleEye,
    modalImage: eagleEyeJpg,
    price: "From ₹1,59,000",
    specs: ["48V | 60V", "Lead Acid | Lithium", "Front Disc / Rear Drum"],
    featured: false,
  },
  {
    id: "trench",
    name: "Trench",
    tagline: "Rugged & Reliable",
    description: "Designed for the toughest urban terrains. The Trench combined durability with efficient electric power.",
    image: trench,
    modalImage: trenchJpg,
    price: "From ₹1,45,000",
    specs: ["48V | 60V", "Lithium", "12\" Wheels"],
    featured: false,
  },
  {
    id: "trigger-3x",
    name: "Trigger 3x",
    tagline: "Instant Acceleration",
    description: "Experience the thrill of electric torque. The Trigger 3x is built for speed and agility.",
    image: trigger3x,
    modalImage: trigger3xJpg,
    price: "From ₹1,69,000",
    specs: ["60V | 72V", "Lithium Ion", "Dual Disc Brakes"],
    featured: false,
  },
  {
    id: "truss",
    name: "Truss 2X",
    tagline: "Unmatched Stability",
    description: "Balanced for comfort and safety. The Truss 2X provides a smooth ride on any surface.",
    image: truss,
    modalImage: trussJpg,
    price: "From ₹1,35,000",
    specs: ["48V | 60V", "Lead Acid | Lithium", "Combi-Braking System"],
    featured: false,
  },
  {
    id: "wexpro-round",
    name: "Wexpro Round",
    tagline: "Smooth Elegance",
    description: "Curves that command attention. The Wexpro Round blends retro charm with futuristic tech.",
    image: wexproRound,
    modalImage: wexproRoundJpg,
    price: "From ₹1,55,000",
    specs: ["60V", "Lithium", "Digital Cluster"],
    featured: false,
  },
  {
    id: "wexpro-square",
    name: "Wexpro Square",
    tagline: "Modern Minimalism",
    description: "Boxy, bold, and beautiful. The Wexpro Square is for those who dare to be different.",
    image: wexproSquare,
    modalImage: wexproSquareJpg,
    price: "From ₹1,55,000",
    specs: ["60V", "Lithium", "LED Signature"],
    featured: false,
  },
];

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const openBooking = (product: typeof products[0]) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeBooking = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="models" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The Okoyama Electric Scooter Family
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our diverse range of electric mobility solutions, each crafted for perfection.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              id={product.id}
              className="group relative h-[500px] rounded-3xl overflow-hidden scroll-mt-24 card-premium"
            >
              {/* Main Product Image (Full Card) */}
              <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Popularity Tag (Always visible) */}
              {product.featured && (
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                    BEST SELLER
                  </span>
                </div>
              )}

              {/* Info Overlay (Slides up on hover) */}
              <div className="absolute inset-0 flex flex-col justify-end">
                {/* Visual Gradient for better readability when not hovered */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative glass-premium p-8 translate-y-[calc(100%-80px)] group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col h-[75%]">
                  {/* Peek-a-boo Header (Visible before hover) */}
                  <div className="flex items-center justify-between mb-8 h-8">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {product.name}
                    </h3>
                    <span className="text-lg font-semibold text-primary">
                      {product.price.split('From ')[1] || product.price}
                    </span>
                  </div>

                  {/* Expanded Info (Visible on hover) */}
                  <div className="flex-1 opacity-100 transition-opacity duration-300">
                    <p className="text-primary font-medium text-sm mb-3">{product.tagline}</p>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-md text-foreground text-[10px] font-medium uppercase tracking-wider rounded-full border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 items-center mt-auto">
                      <Button
                        variant="hero"
                        className="flex-1 py-6 text-base shadow-xl hover:scale-[1.02] transition-transform"
                        onClick={() => openBooking(product)}
                      >
                        Experience Now
                      </Button>
                      <Link to="/test-ride" aria-label={`Test ride ${product.name}`}>
                        <Button variant="heroOutline" size="icon" aria-label={`Book test ride for ${product.name}`} className="w-[60px] h-[60px] shrink-0 border-2 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <ArrowRight className="w-[30px] h-[30px]" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBooking}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-[90vh] md:h-auto md:max-h-[85vh] bg-card border border-border rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left Side: Product Image (JPEG) */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-secondary/10 flex items-center justify-center p-6">
                <img
                  src={selectedProduct.modalImage}
                  alt={selectedProduct.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right Side: Info & Booking Form */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                <button
                  onClick={closeBooking}
                  aria-label="Close details"
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors md:top-6 md:right-6"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="max-w-md mx-auto">
                  {/* Model Header */}
                  <div className="mb-6">
                    <h2 className="text-4xl font-display font-bold mb-1 text-foreground">{selectedProduct.name}</h2>
                    <p className="text-primary font-medium tracking-wide uppercase text-sm">{selectedProduct.tagline}</p>
                  </div>

                  {/* Full Product Info */}
                  <div className="mb-8 pb-8 border-b border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-foreground">{selectedProduct.price}</span>
                      <div className="flex gap-2">
                        {selectedProduct.specs.map(spec => (
                          <span key={spec} className="px-2 py-0.5 bg-secondary text-[10px] uppercase font-semibold rounded-md">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold mb-2 text-gradient-gold">Experience It Yourself</h3>
                    <p className="text-muted-foreground text-sm font-medium">Schedule your premium test ride experience today.</p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          <User className="w-3 h-3" /> Full Name
                        </label>
                        <Input placeholder="John Doe" className="bg-secondary/30 border-border/50 focus:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          <Phone className="w-3 h-3" /> Phone
                        </label>
                        <Input placeholder="+91 98XXX XXXXX" className="bg-secondary/30 border-border/50 focus:border-primary/50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email Address
                      </label>
                      <Input placeholder="john@example.com" type="email" className="bg-secondary/30 border-border/50 focus:border-primary/50" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-3 h-3" /> Location
                        </label>
                        <Input placeholder="City" className="bg-secondary/30 border-border/50 focus:border-primary/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-3 h-3" /> Preferred Date
                        </label>
                        <Input type="date" className="bg-secondary/30 border-border/50 focus:border-primary/50" />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="hero" className="w-full py-6 text-lg shadow-gold" onClick={closeBooking}>
                        Confirm Booking
                      </Button>
                      <p className="text-[10px] text-center text-muted-foreground mt-4 leading-relaxed">
                        By clicking confirm, you agree to our Terms of Service and Privacy Policy. Our team will contact you within 24 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

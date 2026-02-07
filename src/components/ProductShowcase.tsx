import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import vintage1990 from "@/assets/vintage-1990.png";
import sportPro from "@/assets/sport-pro.png";
import eagleEye from "@/assets/eagle-eye.png";

const products = [
  {
    id: "vintage-1990",
    name: "Vintage 1990",
    tagline: "Classically Electric",
    description: "A timeless design meets modern electric mobility. Perfect for those who appreciate classic aesthetics with zero emissions.",
    image: vintage1990,
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
    price: "From ₹1,49,000",
    specs: ["48V | 60V", "Lead Acid | Lithium", "Front/Rear Drum"],
    featured: false,
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    tagline: "Modern Precision",
    description: "Sharp lines and advanced features. The Eagle Eye is designed for peak performance and visibility in any condition.",
    image: eagleEye,
    price: "From ₹1,59,000",
    specs: ["48V | 60V", "Lead Acid | Lithium", "Front Disc / Rear Drum"],
    featured: false,
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The Okoyama Family
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two distinct personalities. One shared commitment to excellence.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              id={product.id}
              className="card-premium rounded-2xl overflow-hidden scroll-mt-24"
            >
              {/* Product image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Product info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold">
                      {product.name}
                    </h3>
                    <p className="text-primary font-medium">{product.tagline}</p>
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {product.price}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link to="/test-ride" className="flex-1">
                    <Button variant="hero" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                  <Button variant="heroOutline" size="icon" className="w-12">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

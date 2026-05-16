import { motion } from "framer-motion";
import { Zap, Shield, Wrench, MapPin } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "5,000+ Charging Points",
    description: "Nationwide fast-charging network. Never worry about range.",
    link: "#charging",
  },
  {
    icon: Shield,
    title: "8-Year Battery Warranty",
    description: "Industry-leading protection for peace of mind.",
    link: "#warranty",
  },
  {
    icon: Wrench,
    title: "Premium Service Network",
    description: "Expert technicians in 200+ cities across Japan.",
    link: "#service",
  },
  {
    icon: MapPin,
    title: "Smart Buyback Program",
    description: "Guaranteed value when you're ready to upgrade.",
    link: "#buyback",
  },
];

export function AdvantageSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The Okoyama Electric Scooter <span className="text-gradient-gold">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Effortless riding. Worry-free ownership.
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.a
              key={advantage.title}
              href={advantage.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-premium rounded-xl p-6 block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {advantage.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {advantage.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

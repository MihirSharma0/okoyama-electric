import { motion } from "framer-motion";
import { Bike, Table2, CreditCard, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: Bike,
    label: "Test Ride",
    description: "Experience Okoyama",
    href: "/test-ride",
  },
  {
    icon: Table2,
    label: "Compare Models",
    description: "Find your perfect fit",
    href: "/compare",
  },
  {
    icon: CreditCard,
    label: "Finance Options",
    description: "Flexible payment plans",
    href: "/finance",
  },
  {
    icon: MapPin,
    label: "Find a Dealer",
    description: "Locate us near you",
    href: "/dealers",
  },
];

export function QuickActions() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-8"
        >
          Okoyama Electric Scooter Actions
        </motion.h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={action.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(43_96%_56%/0.1)] transition-all h-full"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <action.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{action.label}</p>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

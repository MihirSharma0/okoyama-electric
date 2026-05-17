import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Zap, MapPin, Smartphone, BatteryCharging, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChargingNetwork = () => {
  const stats = [
    { label: "Active Chargers", value: "5,000+" },
    { label: "Charging Speed", value: "1.5 km/min" },
    { label: "Uptime Guaranteed", value: "99.9%" },
    { label: "Cities Covered", value: "180+" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Okoyama HyperGrid | Fast Electric Scooter Charging Network</title>
        <meta name="description" content="Explore Okoyama HyperGrid. Indian-Japanese advanced fast charging network. Charge 0-80% in just 45 minutes." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Okoyama HyperGrid
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Unleash Endless <span className="text-gradient-gold">Mobility</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are building India's most reliable and comprehensive fast-charging network, engineered with Japanese safety standards and active cooling architectures.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/dealers">
                <Button variant="hero">Find a Charger</Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Stats Grid */}
        <section className="bg-card border-t border-b border-border py-16 mb-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center space-y-2"
                >
                  <p className="text-4xl md:text-5xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold">Fast. Secure. Universal.</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Hyper-fast charging",
                    desc: "Add up to 50 km of true range in under 30 minutes at any Okoyama HyperGrid station.",
                    icon: Zap,
                  },
                  {
                    title: "Smart App Integration",
                    desc: "Book a charger in advance, monitor live charge states, and pay seamlessly using Okoyama Connect.",
                    icon: Smartphone,
                  },
                  {
                    title: "Active Thermal Balancing",
                    desc: "Station handles heat actively, protecting your battery cells and maintaining peak efficiency.",
                    icon: BatteryCharging,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Callout */}
            <div className="p-8 rounded-3xl bg-secondary/15 border border-border space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <ShieldAlert className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-display font-bold">Home Charging, Redefined</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every Okoyama scooter comes with our lightweight, water-resistant **Smart Home Pod**. Plug it into any 15A socket and charge from 0 to 100% overnight with zero risk of power surges, thanks to its internal auto-cut relay.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>IP67 Water & Dust Resistance rating</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>Lightning & Surge protection layers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChargingNetwork;

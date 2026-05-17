import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Zap, Cpu, Navigation, Shield, Award, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import trench from "@/assets/Trench.png";

const Trench = () => {
  const specs = [
    { label: "True Range", value: "110 km", icon: Navigation },
    { label: "Top Speed", value: "75 km/h", icon: Cpu },
    { label: "Charge Time", value: "4 Hours", icon: Zap },
    { label: "Wheel Diameter", value: "12 inch Tubeless", icon: Shield },
    { label: "Battery Chemistry", value: "Lithium Ion", icon: Award },
    { label: "Braking Setup", value: "Disc / Drum Gen-2", icon: RefreshCw },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Okoyama Trench | Rugged & Reliable Electric Scooter</title>
        <meta name="description" content="Explore Okoyama Trench. A tough, shock-absorbing chassis built with premium Japanese cell protection for all terrains." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background z-0" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Rugged & Reliable
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Okoyama <span className="text-gradient-gold">Trench</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Designed for the toughest urban terrains and unpaved roads. The Trench pairs heavy-duty hydraulic shock absorbers with high-impact composite armor to keep your daily ride stable and safe.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/test-ride">
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
                  Book a Test Ride
                </Button>
              </Link>
              <Link to="/compare">
                <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg">
                  Compare Specs
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center h-[400px] lg:h-[500px]"
          >
            <div className="absolute w-[80%] h-[80%] bg-primary/10 rounded-full blur-3xl -z-10" />
            <img
              src={trench}
              alt="Okoyama Trench Rugged Scooter"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-24 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Tough Specifications</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Equipped with larger 12" wheels, advanced off-road tires, and deep cell thermal protective shielding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-background border border-border/60 flex flex-col justify-between h-48 hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-3xl font-display font-bold text-foreground mt-4">{spec.value}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trench;

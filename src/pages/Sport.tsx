import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Zap, Cpu, Navigation, Shield, Award, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import vintage1990 from "@/assets/vintage-1990.png";

const Sport = () => {
  const specs = [
    { label: "True Range", value: "100 km", icon: Navigation },
    { label: "Top Speed", value: "60 km/h", icon: Cpu },
    { label: "Charge Time", value: "4-5 Hours", icon: Zap },
    { label: "Voltage Configuration", value: "48V | 60V Dual", icon: Shield },
    { label: "Battery Chemistry", value: "Lead Acid | Lithium", icon: Award },
    { label: "Braking Setup", value: "Drum / Drum Gen-2", icon: RefreshCw },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Okoyama Sport | Classically Electric Scooter</title>
        <meta name="description" content="Explore Okoyama Sport. Retro-classic aesthetics fused with modern zero-emission electric mobility." />
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
              Classically Electric
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Okoyama <span className="text-gradient-gold">Sport</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A timeless retro roadster silhouette meets zero-emission precision engineering. Perfect for those who seek nostalgic design combined with reliable modern daily commuting.
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
              src={vintage1990}
              alt="Okoyama Sport Vintage Roadster"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-24 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Timeless Specifications</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Simplicity, reliable range, and dual-pack battery layouts optimized for urban journeys.
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

export default Sport;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-okoyama.jpg";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(0 0% 0% / 0.85) 0%, hsl(0 0% 0% / 0.5) 40%, hsl(0 0% 0% / 0.2) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="feature-badge mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Introducing the 2026 Lineup</span>
          </motion.div>

          {/* Headline */}
          <h1 className="hero-headline mb-6">
            <span className="block text-foreground text-3xl md:text-5xl lg:text-7xl">Okoyama Electric Scooters</span>
            <span className="text-gradient-gold block text-2xl md:text-4xl lg:text-5xl mt-2 font-medium tracking-tight">Japanese Tech Leading the Electric 2 Wheeler Industry</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline mb-8">
            Premium electric mobility, crafted with Japanese precision.
            Silent power. Intelligent design. Zero compromise.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/test-ride">
              <Button variant="hero" size="xl">
                Book a Test Ride
              </Button>
            </Link>
            <a href="#models">
              <Button variant="heroOutline" size="xl">
                Explore Models
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom feature marquee hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-10 left-0 right-0 py-8 flex flex-col items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity group"
      >
        <p className="text-sm text-white/40 group-hover:text-white/80 font-medium tracking-widest uppercase transition-colors">
          Scroll to discover
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

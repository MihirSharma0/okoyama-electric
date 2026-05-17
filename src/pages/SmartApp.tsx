import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Smartphone, Shield, Zap, Navigation, Bell, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const SmartApp = () => {
  const features = [
    {
      title: "Remote Proximity Lock/Unlock",
      desc: "Walk up to your Okoyama and watch it wake up. Your phone serves as your cryptographically secure keyless starter.",
      icon: Shield,
    },
    {
      title: "Turn-by-Turn Navigation",
      desc: "Cast maps from your mobile app directly to your scooter's 7-inch high-resolution TFT dashboard via BLE.",
      icon: Navigation,
    },
    {
      title: "Real-Time Ride Telemetry",
      desc: "Analyze your lean angles, average speed, motor load, and energy recovery efficiency on our dashboard.",
      icon: Activity,
    },
    {
      title: "Geofencing & Anti-Theft Alerts",
      desc: "Receive instant push alerts and live GPS tracking links if your scooter moves outside your designated radius.",
      icon: Bell,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Okoyama Connect App | Smart Electric Mobility</title>
        <meta name="description" content="Discover Okoyama Connect. Access remote startup, geofencing, OTA diagnostics, and navigation right from your smartphone." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Okoyama OS
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Okoyama <span className="text-gradient-gold">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your smartphone is now a control room. Monitor battery health, push firmware updates OTA, and lock your scooter from anywhere in the world.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="hero" className="px-6 py-5">App Store</Button>
              <Button variant="outline" className="px-6 py-5">Google Play</Button>
            </div>
          </motion.div>
        </section>

        {/* Feature grid */}
        <section className="container mx-auto px-4 max-w-5xl mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-card border border-border flex gap-6 hover:border-primary/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl font-display text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Live diagnostics */}
        <section className="bg-card border-t border-b border-border py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">OTA Performance Refinements</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With built-in eSIM capabilities, your Okoyama scooter automatically pulls regular firmware updates overnight. Get new drive modes, improved battery optimization algorithms, and updated dashboard aesthetics without visiting a service hub.
                </p>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <span className="font-semibold block">99.9% Secure Encryption</span>
                  <span className="text-xs text-muted-foreground">Every command transmitted between the App, Server, and Scooter leverages AES-256 military-grade packaging.</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
                  alt="App interface"
                  className="rounded-3xl border border-border w-[80%] aspect-[3/4] object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartApp;

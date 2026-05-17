import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, CheckCircle2, RefreshCw, Activity, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BatteryWarranty = () => {
  const coverages = [
    {
      title: "8 Years / 80,000 km Warranty",
      desc: "Comprehensive protection covers battery performance, capacity retention above 75%, and electronics.",
    },
    {
      title: "Premium Japanese Cell Chemistry",
      desc: "Formulated with custom high-stability nickel-manganese-cobalt (NMC) cells designed for longevity.",
    },
    {
      title: "Zero-Downtime Smart Replacement",
      desc: "If any anomaly is detected by our OTA diagnostics, we replace the pack within 24 hours at no cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Battery Warranty | Okoyama Electric</title>
        <meta name="description" content="Read about Okoyama's industry leading 8-year battery warranty. Powered by robust Japanese battery management engineering." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Ultimate Reliability
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              8-Year <span className="text-gradient-gold">Battery Shield</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We stand by our precision engineering. Okoyama scooters feature the longest-lasting battery architectures in the industry, backed by Japanese quality control.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/test-ride">
                <Button variant="hero">Experience Okoyama</Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-4 max-w-5xl mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {coverages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border space-y-4 hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology breakdown */}
        <section className="bg-card border-t border-b border-border py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1558441719-ff34b0524a24?q=80&w=800&auto=format&fit=crop"
                  alt="Battery chemistry engineering"
                  className="rounded-3xl border border-border w-full object-cover aspect-[4/3] opacity-80"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">Uncompromising Safety</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our custom packs leverage advanced thermal isolation sheets between each individual cylindrical cell. This means even under intense external temperatures, cells stay perfectly balanced and isolated from one another, removing risk of thermal runaways.
                </p>
                <div className="space-y-3">
                  {[
                    "UL 2580 certified Japanese Lithium Ion Cells",
                    "Dual-stage physical safety fuses",
                    "Smart Overcharge & Discharging Prevention",
                    "IP67 Dust & Submersion Proof Rating",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BatteryWarranty;

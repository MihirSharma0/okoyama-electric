import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Award, Compass, Landmark, Users, ShieldCheck, HelpCircle } from "lucide-react";

const AboutUs = () => {
  const corporateFacts = [
    {
      title: "Legal Identity",
      value: "Estinno Energy Private Limited",
      desc: "OKOYAMA is a registered trademark specializing in next-generation electric scooters.",
      icon: ShieldCheck,
    },
    {
      title: "Inception Year",
      value: "Founded in 2018",
      desc: "Years of dedicated Research & Development in advanced automobile powertrains.",
      icon: Award,
    },
    {
      title: "Key Leadership & Founders",
      value: "Anurag Mishra & Mrityunjay Sharma",
      desc: "Led by veteran inventors and technical directors with a passion for clean transport.",
      icon: Users,
    },
    {
      title: "Incubation & Acceleration Support",
      value: "FTBI, NIT Rourkela",
      desc: "Supported by the prestigious Foundation For Technology & Business Incubation, NIT Rourkela.",
      icon: Landmark,
    },
  ];

  const coreValues = [
    {
      title: "Academic-Grade Tech",
      desc: "Our active thermal battery management systems were prototyped and validated within high-tech research labs at NIT Rourkela.",
      icon: Compass,
    },
    {
      title: "Top-Notch Performance",
      desc: "We hold ourselves to sub-millimeter manufacturing tolerances, delivering robust electric scooters built for tough urban terrains.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Us | OKOYAMA Electric Scooters</title>
        <meta name="description" content="Discover OKOYAMA. Owned by Estinno Energy Private Limited, founded in 2018 by Anurag Mishra and Mrityunjay Sharma, and supported by FTBI, NIT Rourkela." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Story Header */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Corporate Profile
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Engineering <span className="text-gradient-gold">Next-Gen</span> Mobility
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              OKOYAMA, a registered trademark owned by **Estinno Energy Private Limited**, specializes in the manufacturing of high-caliber electric scooters. Born in 2018 out of a vision to establish robust green mobility, this brand has earned an outstanding reputation for delivering top-notch products in the industry.
            </p>
          </motion.div>
        </section>

        {/* Corporate Profile Bento Grid */}
        <section className="container mx-auto px-4 max-w-5xl mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {corporateFacts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-8 rounded-3xl bg-card border border-border flex gap-6 hover:border-primary/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{fact.title}</span>
                    <h3 className="text-xl font-bold font-display text-foreground leading-tight">{fact.value}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{fact.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Incubation Story & Pillars */}
        <section className="bg-card border-t border-b border-border py-20 mb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">Supported by FTBI, NIT Rourkela</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our core research operations were accelerated by the **Foundation For Technology & Business Incubation (FTBI), NIT Rourkela**. This institutional backing gave us cleanroom cell development facilities, advanced computational simulators, and access to premium technical academic minds to perfect our chassis dynamics and battery architectures.
                </p>
                <div className="grid gap-6 pt-4">
                  {coreValues.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-sm font-display">{item.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-[340px] aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-xl shadow-gold/5">
                  <Landmark className="w-16 h-16 text-primary animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-primary">Incubation Center</span>
                  <h4 className="font-bold font-display text-sm leading-snug">Foundation for Technology & Business Incubation, NIT Rourkela</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate FAQ Block */}
        <section className="container mx-auto px-4 max-w-3xl space-y-12">
          <h2 className="text-3xl font-display font-bold text-center">Quick Corporate Facts</h2>
          <div className="space-y-6">
            {[
              {
                q: "When was OKOYAMA Electric Scooters founded?",
                a: "OKOYAMA Electric Scooters was founded in the year 2018 under the registered parent legal entity Estinno Energy Private Limited.",
              },
              {
                q: "Who are the key founders of OKOYAMA?",
                a: "OKOYAMA Electric Scooters was founded by Anurag Mishra and Mrityunjay Sharma.",
              },
              {
                q: "Which incubators supported the brand?",
                a: "The brand has been proudly supported by the Foundation For Technology & Business Incubation (FTBI), NIT Rourkela.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary/10 border border-border space-y-2">
                <h4 className="font-bold font-display text-foreground flex items-center gap-2 text-sm">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" /> {faq.q}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

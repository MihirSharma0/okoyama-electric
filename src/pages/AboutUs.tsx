import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Award, Target, Compass, Globe } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      title: "Precision Monozukuri",
      desc: "The Japanese art of making things. We design every battery module, motor controller, and steel frame to exact sub-millimeter tolerances.",
      icon: Award,
    },
    {
      title: "Carbon Neutral Vision",
      desc: "Our assembly lines run on 100% solar energy. We aim for full circularity, ensuring 98% of battery minerals are recycled.",
      icon: Target,
    },
    {
      title: "Inclusive Innovation",
      desc: "We build advanced electric transport that is accessible to all, providing premium safety features at a fair price.",
      icon: Compass,
    },
    {
      title: "Global Collaboration",
      desc: "Combining the best of Japanese engineering precision with India's agile manufacturing scaling models.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Us | Okoyama Electric</title>
        <meta name="description" content="Discover our heritage. Okoyama Electric is pioneering premium green mobility with deep roots in Japanese engineering precision." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Story */}
        <section className="container mx-auto px-4 max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-center"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Engineering <span className="text-gradient-gold">Perfection</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Founded in 2021 as a joint research venture between top-tier Tokyo battery labs and expert Indian automotive industrial designers, Okoyama was born out of a single dream: to create beautiful, zero-emission transportation that never compromises on safety, speed, or longevity.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="bg-card border-t border-b border-border py-20 mb-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Our Operating Pillars</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {values.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-display text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership or stats */}
        <section className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-display font-bold">Zero-Compromise Standards</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every scooter leaves our cleanroom-standard assembly floor only after completing a rigorous 48-point diagnostic routine, supervised by veteran quality control engineers from Yokohama. That is the Okoyama promise.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

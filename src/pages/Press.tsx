import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Newspaper, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Press = () => {
  const releases = [
    {
      date: "May 12, 2026",
      title: "Okoyama Electric expands battery R&D facility in Bengaluru",
      desc: "Investing ₹120 Cr to expand fast cell prototyping laboratory and local thermal analysis simulators.",
    },
    {
      date: "April 28, 2026",
      title: "Okoyama Pulse Wins Golden Circle Award for Industrial EV Design",
      desc: "Recognized by global panels for blending vintage roadster geometries with aerodynamic electric performance.",
    },
    {
      date: "March 15, 2026",
      title: "Okoyama partners with central agencies to deploy 2,000 hyperfast chargers",
      desc: "Strengthening clean charging infrastructure across prime regional highways for intercity EV commuting.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Press & Media | Okoyama Electric</title>
        <meta name="description" content="Access our latest press releases, downloadable brand kits, logos, and media contact channels." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Intro */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Newsroom
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Press & <span className="text-gradient-gold">Media</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read all our corporate announcements, media features, and download brand asset packets.
            </p>
          </motion.div>
        </section>

        {/* Press Kit Download banner */}
        <section className="container mx-auto px-4 max-w-4xl mb-24">
          <div className="p-8 rounded-3xl bg-card border border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold font-display">Download Media Kit</h3>
              <p className="text-sm text-muted-foreground">Includes high-res product photos, official logos, and executive bios.</p>
            </div>
            <Button variant="hero" className="shrink-0 py-6 text-sm">
              <Download className="w-4 h-4 mr-2" /> Download ZIP (24MB)
            </Button>
          </div>
        </section>

        {/* Press Releases */}
        <section className="container mx-auto px-4 max-w-4xl space-y-12">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Latest Announcements</h2>
          <div className="space-y-8">
            {releases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="pb-8 border-b border-border space-y-3 last:border-0"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.date}</span>
                <h3 className="text-xl font-bold font-display text-foreground flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  {item.title} <ExternalLink className="w-4 h-4" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;

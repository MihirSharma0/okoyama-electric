import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Briefcase, MapPin, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobs = [
    {
      title: "Senior BMS Firmware Engineer",
      dept: "Battery Engineering",
      loc: "Bengaluru, KA",
      type: "Full-Time",
    },
    {
      title: "Motor Controller Design Specialist",
      dept: "Powertrain R&D",
      loc: "Tokyo, Japan",
      type: "Full-Time",
    },
    {
      title: "Industrial Product Designer",
      dept: "Vehicle Ergonomics",
      loc: "Bengaluru, KA",
      type: "Full-Time",
    },
    {
      title: "OTA Cloud Operations Architect",
      dept: "Connected Systems",
      loc: "Hybrid / Bengaluru",
      type: "Full-Time",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Careers at Okoyama | Shape Electric Mobility</title>
        <meta name="description" content="Join the Okoyama family. Discover open positions in battery engineering, hardware design, and smart firmware architectures." />
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
              Work With Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Build the <span className="text-gradient-gold">Future</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We seek visionary thinkers, designers, and creators who are passionate about sculpting beautiful, premium electric transport.
            </p>
          </motion.div>
        </section>

        {/* Culture cards */}
        <section className="container mx-auto px-4 max-w-5xl mb-24 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-card border border-border flex gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-display">Craftsmanship Culture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in extreme ownership and refinement. We encourage continuous learning, peer code reviews, and physical hardware brainstorming.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-card border border-border flex gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-display">Global Exposure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Collaborate directly with advanced cleanroom battery researchers in Tokyo and automotive assembly specialists across global cities.
              </p>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Current Opportunities</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-secondary/15 border border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/20 transition-all"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-display text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-semibold">
                    <span className="px-2 py-0.5 bg-secondary rounded">{job.dept}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" /> {job.loc}
                    </span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button variant="hero" className="text-xs">Apply Now</Button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;

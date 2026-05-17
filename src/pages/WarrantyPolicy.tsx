import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Award, Heart } from "lucide-react";

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Warranty Policy | Okoyama Electric</title>
        <meta name="description" content="Review authorized warranty terms for Okoyama Electric vehicles, battery cells, motor controllers, and electronics." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Intro */}
        <section className="container mx-auto px-4 max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold">Warranty Policy</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Effective Date: May 17, 2026. This document explains authorized warranty criteria, coverage scopes, and replacement steps for Okoyama Electric vehicles.
            </p>
          </motion.div>
        </section>

        {/* Legal block */}
        <section className="container mx-auto px-4 max-w-4xl space-y-12 leading-relaxed text-muted-foreground text-sm">
          <div className="p-8 rounded-3xl bg-card border border-border grid md:grid-cols-3 gap-6 text-foreground mb-8">
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h4 className="font-bold font-display">Japanese Lithium Cells</h4>
              <p className="text-xs text-muted-foreground">8 Years or 80,000 km warranty coverage.</p>
            </div>
            <div className="space-y-2">
              <Award className="w-8 h-8 text-primary" />
              <h4 className="font-bold font-display">Hub & Radial Motors</h4>
              <p className="text-xs text-muted-foreground">3 Years or 36,000 km powertrain warranty coverage.</p>
            </div>
            <div className="space-y-2">
              <Heart className="w-8 h-8 text-primary" />
              <h4 className="font-bold font-display">Chassis & Frame</h4>
              <p className="text-xs text-muted-foreground">5 Years structural anti-corrosion guarantee.</p>
            </div>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">1. Core Warranty Coverage</h2>
            <p className="text-muted-foreground">
              Okoyama warrants that each vehicle assembly, under regular use, is free from defects in material and workmanship. The warranty begins on the date of vehicle delivery or registration, whichever is earlier.
            </p>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">2. Specific Exclusions</h2>
            <p className="text-muted-foreground">
              The warranty does not cover issues resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-xs">
              <li>Modifications or fitment of unauthorized third-party electrical modifications or accessories.</li>
              <li>Negligence, improper charging routines, or use of unofficial chargers.</li>
              <li>Damage caused by accidents, water submersion beyond specified IP rating standards, or natural calamities.</li>
              <li>Normal wear and tear of consumable components (such as tires, brake pads, and mirrors).</li>
            </ul>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">3. Claim Registration Process</h2>
            <p className="text-muted-foreground">
              To trigger a warranty check:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-xs">
              <li>File a diagnostics ticket on the **Okoyama Connect App** or contact our support lines.</li>
              <li>Bring the vehicle to any authorized **Okoyama Super Hub** or schedule a mobile support technician evaluation.</li>
              <li>Our engineers will verify the OTA system records and complete repairs using original Japanese parts.</li>
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WarrantyPolicy;

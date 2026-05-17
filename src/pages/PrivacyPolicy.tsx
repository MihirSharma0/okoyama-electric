import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | Okoyama Electric</title>
        <meta name="description" content="Review Okoyama Electric's privacy guidelines and data protection protocols." />
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
            <h1 className="text-4xl md:text-6xl font-display font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Effective Date: May 17, 2026. At Okoyama Electric, your privacy is a core priority. We secure your telemetry, location, and account credentials.
            </p>
          </motion.div>
        </section>

        {/* Legal block */}
        <section className="container mx-auto px-4 max-w-4xl space-y-12 leading-relaxed text-muted-foreground text-sm">
          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              To operate our smart vehicles, we capture telemetry details including battery level, speed, acceleration curves, system logs, and real-time GPS locations to support geofencing and anti-theft alarms.
            </p>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">2. How We Secure Data</h2>
            <p className="text-muted-foreground">
              All communications between your mobile device, the vehicle, and our servers are encrypted via **AES-256 security packaging**. GPS locations are anonymized and stored separately from billing details, keeping your physical tracking fully isolated.
            </p>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">3. Third-party Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, barter, or distribute your private ride telemetry. We only share transaction and shipping details with authorized banking gateways or dealership logistics partners to fulfill your booking request.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Terms of Service | Okoyama Electric</title>
        <meta name="description" content="Review official Terms of Service for booking, ordering, and using Okoyama Electric smart vehicles." />
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
            <h1 className="text-4xl md:text-6xl font-display font-bold">Terms of Service</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Effective Date: May 17, 2026. These terms govern your access to the Okoyama website, bookings, and connected smart vehicle systems.
            </p>
          </motion.div>
        </section>

        {/* Legal block */}
        <section className="container mx-auto px-4 max-w-4xl space-y-12 leading-relaxed text-muted-foreground text-sm">
          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">1. Booking & Deposits</h2>
            <p className="text-muted-foreground">
              Bookings initiated through our web portal constitute an invitation to purchase. A booking is verified only upon receipt of your deposit. Deposit refunds are fully supported up to 72 hours prior to manufacturing dispatch.
            </p>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">2. Connected Features & OTA Updates</h2>
            <p className="text-muted-foreground">
              Okoyama scooters require active data subscriptions for remote map casting, geofencing alarms, and OTA updates. We reserve the right to deliver OTA patches for vehicle stability and cell safety at any time.
            </p>
          </div>

          <div className="space-y-4 text-foreground">
            <h2 className="text-2xl font-bold font-display">3. Limitations of Liability</h2>
            <p className="text-muted-foreground">
              Okoyama is not responsible for physical damages resulting from unofficial powertrain tampering, battery modifications, or racing activities. Tampering voids all warranties.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

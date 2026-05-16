import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureMarquee } from "@/components/FeatureMarquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { AdvantageSection } from "@/components/AdvantageSection";
import { QuickActions } from "@/components/QuickActions";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Okoyama Electric</title>
        <meta name="description" content="Discover Okoyama Electric, leading the electric 2 wheeler industry with premium electric scooters featuring advanced Japanese tech for sustainable commuting." />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureMarquee />
        <ProductShowcase />
        <AdvantageSection />
        <QuickActions />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureMarquee } from "@/components/FeatureMarquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { AdvantageSection } from "@/components/AdvantageSection";
import { QuickActions } from "@/components/QuickActions";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

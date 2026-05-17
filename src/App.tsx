import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import TestRide from "./pages/TestRide";
import Compare from "./pages/Compare";
import Finance from "./pages/Finance";
import Dealers from "./pages/Dealers";
import NotFound from "./pages/NotFound";

// New Section Pages
import Sport from "./pages/Sport";
import SportPro from "./pages/SportPro";
import EagleEye from "./pages/EagleEye";
import Trench from "./pages/Trench";
import Trigger3x from "./pages/Trigger3x";
import Truss from "./pages/Truss";
import WexproRound from "./pages/WexproRound";
import WexproSquare from "./pages/WexproSquare";

import ChargingNetwork from "./pages/ChargingNetwork";
import BatteryWarranty from "./pages/BatteryWarranty";
import ServiceCenters from "./pages/ServiceCenters";
import Accessories from "./pages/Accessories";
import SmartApp from "./pages/SmartApp";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import InvestorRelations from "./pages/InvestorRelations";
import Contact from "./pages/Contact";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test-ride" element={<TestRide />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/dealers" element={<Dealers />} />
            
            {/* Scooter Model Landing Pages */}
            <Route path="/sport" element={<Sport />} />
            <Route path="/sport-pro" element={<SportPro />} />
            <Route path="/eagle-eye" element={<EagleEye />} />
            <Route path="/trench" element={<Trench />} />
            <Route path="/trigger-3x" element={<Trigger3x />} />
            <Route path="/truss" element={<Truss />} />
            <Route path="/wexpro-round" element={<WexproRound />} />
            <Route path="/wexpro-square" element={<WexproSquare />} />
            
            {/* Ownership Pages */}
            <Route path="/charging-network" element={<ChargingNetwork />} />
            <Route path="/battery-warranty" element={<BatteryWarranty />} />
            <Route path="/service-centers" element={<ServiceCenters />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/smart-app" element={<SmartApp />} />
            
            {/* Company Pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* Support Pages */}
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

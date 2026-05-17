import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqCategories = [
    {
      title: "Battery & Charging",
      items: [
        {
          q: "What cells are used in Okoyama batteries?",
          a: "We utilize advanced Nickel Manganese Cobalt (NMC) chemistry cylindrical cells imported directly from premium Japanese manufacturers. They offer higher energy density and superior structural integrity compared to standard LFP packs.",
        },
        {
          q: "How long does a full charge take?",
          a: "Using the standard HyperHome Pod, a full charge takes 4 to 5 hours. With the commercial HyperGrid stations, you can charge from 0 to 80% in just 45 minutes.",
        },
        {
          q: "Can the battery be removed for charging?",
          a: "Yes, models like the Eagle Eye and Trigger 3x feature dual modular battery blocks that can be removed and charged at your apartment or desk using any standard socket.",
        },
      ],
    },
    {
      title: "Performance & Warranty",
      items: [
        {
          q: "What is the true range under average conditions?",
          a: "Okoyama models deliver exceptional range. For example, our high-precision Eagle Eye provides a true range of 150 km per charge, while our sporty Trigger 3x delivers up to 140 km.",
        },
        {
          q: "What does the 8-year warranty cover?",
          a: "Our battery warranty covers physical cell degradation below 75% capacity, internal battery management logic chips (BMS), active thermal cooling systems, and casing structural faults for 8 years or 80,000 km.",
        },
      ],
    },
    {
      title: "Booking & Delivery",
      items: [
        {
          q: "How can I book a test ride?",
          a: "Simply head over to our 'Book Test Ride' page, input your city, select your preferred date, and our relationship executive will call to confirm your dedicated 1-on-1 slot.",
        },
        {
          q: "What is the typical delivery wait time?",
          a: "Depending on your specific color options, the wait time is generally 2 to 4 weeks from full booking confirmation.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Frequently Asked Questions | Okoyama Electric</title>
        <meta name="description" content="Get answers about Okoyama charging speeds, battery specifications, active warranty, and dealership booking timelines." />
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
              Get Answers
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Everything you need to know about Okoyama models, smart app operations, charging network coverage, and financing procedures.
            </p>
          </motion.div>
        </section>

        {/* Accordions */}
        <section className="container mx-auto px-4 max-w-4xl space-y-16">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-primary border-b border-border pb-2">{category.title}</h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {category.items.map((item, itemIdx) => (
                  <AccordionItem
                    key={itemIdx}
                    value={`item-${idx}-${itemIdx}`}
                    className="bg-card border border-border rounded-xl px-6 py-2"
                  >
                    <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary transition-colors text-base py-4 font-display">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm pt-2 pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactUs = () => {
  const infoItems = [
    {
      title: "Customer Support",
      detail: "+91 6207583289",
      sub: "Support Hotline • 9:00 AM - 7:00 PM",
      icon: Phone,
    },
    {
      title: "Email Channels",
      detail: "hello@okoyaka.com",
      sub: "support@okoyaka.com",
      icon: Mail,
    },
    {
      title: "Corporate Headquarters",
      detail: "Ground Floor, Plot No 278, Khasra No 143, Extended Lal Dora, Comfort First Solutions, Kanjhawala, New Delhi, North West Delhi, Delhi, 110081",
      sub: "Open Mon-Fri • 9:30 AM - 6:30 PM",
      icon: MapPin,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message recorded. Our priority team will reach you inside 4 hours.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact Us | Okoyama Electric</title>
        <meta name="description" content="Reach the Okoyama team. Our customer care line and business partnerships desk is open for inquiries." />
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              We Are Here to <span className="text-gradient-gold">Listen</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about booking a test ride, dealership licenses, or bulk purchase partnerships? Reach out below.
            </p>
          </motion.div>
        </section>

        {/* Contact Info & Form */}
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left side */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold font-display">Contact Details</h2>
              <div className="space-y-4">
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-card border border-border flex gap-6 hover:border-primary/15 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">{item.title}</h3>
                        <p className="font-bold text-foreground text-sm leading-relaxed">{item.detail}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side Form */}
            <div className="lg:col-span-3 p-8 rounded-3xl bg-card border border-border space-y-6">
              <h2 className="text-2xl font-bold font-display">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Full Name</label>
                    <Input placeholder="Okoyama Electric" className="bg-secondary/20" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Phone Number</label>
                    <Input placeholder="+91 XXXXX XXXXX" className="bg-secondary/20" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-secondary/20" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Message</label>
                  <Textarea placeholder="Explain your request in detail..." rows={5} className="bg-secondary/20" required />
                </div>
                <Button type="submit" variant="hero" className="w-full py-6 text-base mt-2">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Wrench, PhoneCall, ShieldAlert, Sparkles, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ServiceCenters = () => {
  const features = [
    {
      title: "90-Min Express Service",
      desc: "Get diagnostic checks, wash, brake tuning, and system updates done in under 90 minutes.",
      icon: Clock,
    },
    {
      title: "Mobile Support Vans",
      desc: "Stuck somewhere? Our GPS-tracked roadside response vans will reach you in under 45 minutes.",
      icon: ShieldAlert,
    },
    {
      title: "100% Genuine Parts",
      desc: "Every bolt, cell, and brake pad is imported directly from Japanese partner assembly lines.",
      icon: Sparkles,
    },
  ];

  const centers = [
    {
      city: "Bengaluru",
      name: "Koramangala Super Hub",
      address: "123, 80 Feet Road, Koramangala 4th Block, Bengaluru, KA 560034",
      phone: "+91 80 1234 5678",
    },
    {
      city: "Bengaluru",
      name: "Indiranagar Service Center",
      address: "45, 100 Feet Road, Indiranagar, Bengaluru, KA 560038",
      phone: "+91 80 8765 4321",
    },
    {
      city: "Mumbai",
      name: "Andheri East Experience & Service Hub",
      address: "G-10, Solitaire Corporate Park, Chakala, Andheri East, Mumbai, MH 400093",
      phone: "+91 22 9988 7766",
    },
    {
      city: "Delhi NCR",
      name: "Okhla Phase 3 Service Workshop",
      address: "Plot 88, Okhla Industrial Area Phase III, New Delhi, DL 110020",
      phone: "+91 11 4455 6677",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Authorized Service Centers | Okoyama Electric</title>
        <meta name="description" content="Find authorized Okoyama Electric service centers near you. Book a maintenance slot, get roadside assistance, and buy genuine accessories." />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Okoyama Care
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Seamless <span className="text-gradient-gold">Ownership</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer proactive smart servicing, direct-to-home mobile mechanics, and a nationwide network of authorized premium repair centers.
            </p>
          </motion.div>
        </section>

        {/* Perks Grid */}
        <section className="container mx-auto px-4 max-w-5xl mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border space-y-4 hover:border-primary/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* List of Centers & Interactive Form */}
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Col: Booking */}
            <div className="lg:col-span-2 p-8 rounded-3xl bg-card border border-border space-y-6">
              <h2 className="text-2xl font-bold font-display">Schedule a Service</h2>
              <p className="text-sm text-muted-foreground">
                Select your convenient date and city to lock in a priority slot.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Phone Number</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Scooter Model</label>
                  <Input placeholder="Okoyama Sport" className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Date</label>
                  <Input type="date" className="bg-secondary/20" />
                </div>
                <Button variant="hero" className="w-full py-6 text-base mt-2">
                  Book Slot
                </Button>
              </form>
            </div>

            {/* Right Col: Centers */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-bold font-display">Our Service Locations</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {centers.map((center, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-secondary/15 border border-border flex flex-col justify-between h-48 hover:border-primary/20 transition-all">
                    <div>
                      <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded text-[10px] font-bold uppercase tracking-wider">
                        {center.city}
                      </span>
                      <h3 className="font-bold text-lg mt-2 text-foreground">{center.name}</h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{center.address}</p>
                    </div>
                    <div className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5 mt-4">
                      <PhoneCall className="w-3.5 h-3.5 text-primary" />
                      <span>{center.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCenters;

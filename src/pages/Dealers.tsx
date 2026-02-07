import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dealers = () => {
    const dealers = [
        {
            name: "Okoyama Experience Center - Koramangala",
            address: "123, 80 Feet Road, Koramangala 4th Block, Bengaluru, KA 560034",
            phone: "+91 80 1234 5678",
            hours: "10:00 AM - 8:00 PM",
        },
        {
            name: "Okoyama Elite Hub - Indiranagar",
            address: "45, 100 Feet Road, Indiranagar, Bengaluru, KA 560038",
            phone: "+91 80 8765 4321",
            hours: "10:00 AM - 8:00 PM",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Find a Dealer</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Visit our experience centers to see the magic in person.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {dealers.map((dealer, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-card border border-border flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold">{dealer.name}</h2>
                                <div className="flex gap-4 text-muted-foreground text-sm">
                                    <MapPin className="w-4 h-4 shrink-0 text-primary" />
                                    <span>{dealer.address}</span>
                                </div>
                                <div className="flex gap-4 text-muted-foreground text-sm">
                                    <Phone className="w-4 h-4 shrink-0 text-primary" />
                                    <span>{dealer.phone}</span>
                                </div>
                                <div className="flex gap-4 text-muted-foreground text-sm">
                                    <Clock className="w-4 h-4 shrink-0 text-primary" />
                                    <span>{dealer.hours}</span>
                                </div>
                            </div>
                            <Button variant="outline" className="shrink-0">Get Directions</Button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dealers;

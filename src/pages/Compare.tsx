import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Compare = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Compare Models</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Find the Okoyama that fits your lifestyle. Compare specs across our entire lineup.
                    </p>
                </motion.div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="p-4 text-left">Features</th>
                                <th className="p-4 text-center">Vintage 1990</th>
                                <th className="p-4 text-center">Sport Pro</th>
                                <th className="p-4 text-center">Eagle Eye</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Range", "100 km", "120 km", "150 km"],
                                ["Top Speed", "60 km/h", "85 km/h", "95 km/h"],
                                ["Charging Time", "4-5 hrs", "3-4 hrs", "3 hrs"],
                                ["Brakes", "Drum/Drum", "Disc/Drum", "Disc/Disc"],
                                ["Bluetooth", "No", "Yes", "Yes"],
                            ].map(([label, ...values], i) => (
                                <tr key={i} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium">{label}</td>
                                    {values.map((v, j) => (
                                        <td key={j} className="p-4 text-center text-muted-foreground">{v}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Compare;

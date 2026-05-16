import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

const Finance = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Finance Options | Okoyama Electric Scooters</title>
                <meta name="description" content="Explore flexible finance options for your new Okoyama Electric Scooter. Easy EMIs and quick approvals." />
            </Helmet>
            <Navbar />
            <main className="container mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Finance Options</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Making premium electric mobility accessible. Simple, transparent, and flexible plans.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="p-8 rounded-2xl bg-card border border-border">
                        <h2 className="text-2xl font-bold mb-6">EMI Calculator</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm mb-2">Down Payment (₹)</label>
                                <Input defaultValue="20000" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Tenure (Months)</label>
                                <Input defaultValue="24" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Interest Rate (%)</label>
                                <Input defaultValue="9.5" disabled />
                            </div>
                            <div className="pt-6 border-t border-border">
                                <p className="text-sm text-muted-foreground mb-1">Estimated Monthly EMI</p>
                                <p className="text-3xl font-bold text-primary">₹ 4,850/mo*</p>
                            </div>
                            <Button variant="hero" className="w-full">Apply for Finance</Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Why Finance with Okoyama?</h2>
                        {[
                            { title: "Quick Approval", desc: "Get sanctioned in as little as 24 hours." },
                            { title: "Low Interest Rates", desc: "Starting at 8.99% for eligible customers." },
                            { title: "Zero Paperwork", desc: "Fully digital application process." },
                            { title: "Flexible Tenure", desc: "Repayment options from 6 to 36 months." },
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <div>
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Finance;

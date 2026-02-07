import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const TestRide = () => {
    return (
        <div className="min-h-screen bg-background text-foreground uppercase-none">
            <Navbar />
            <main className="container mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Book a Test Ride</h1>
                    <p className="text-muted-foreground mb-12">
                        Experience the future of mobility. Fill out the form below and our team will contact you shortly.
                    </p>

                    <form className="space-y-6 text-left p-8 rounded-2xl bg-card border border-border">
                        <div>
                            <label className="block text-sm font-medium mb-2">Full Name</label>
                            <Input placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                            <Input placeholder="+91 98765 43210" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Preferred Location</label>
                            <Input placeholder="Select City" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Additional Notes</label>
                            <Textarea placeholder="Any specific model you're interested in?" />
                        </div>
                        <Button variant="hero" className="w-full py-6 text-lg">
                            Confirm Booking
                        </Button>
                    </form>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default TestRide;

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get the Best <span className="text-gradient-gold">Offers</span> on Okoyama Electric
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Share your details and our team will reach out with personalized offers on Japanese Tech scooters for your city.
            </p>

            {/* Decorative image placeholder */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl">🛵</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-premium rounded-2xl p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Select defaultValue="+91">
                    <SelectTrigger className="w-24 bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">+91</SelectItem>
                      <SelectItem value="+81">+81</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="flex-1 bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City / Area</Label>
                <Input
                  id="city"
                  placeholder="Enter your city or postal code"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label>Interested In</Label>
                <Select>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sport">Sport</SelectItem>
                    <SelectItem value="sport-pro">Sport Pro</SelectItem>
                    <SelectItem value="eagle-eye">Eagle Eye</SelectItem>
                    <SelectItem value="trench">Trench</SelectItem>
                    <SelectItem value="trigger-3x">Trigger 3x</SelectItem>
                    <SelectItem value="truss">Truss 2X</SelectItem>
                    <SelectItem value="wexpro-round">Wexpro Round</SelectItem>
                    <SelectItem value="wexpro-square">Wexpro Square</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Offers"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By clicking 'Get Offers' you agree to our{" "}
                <a href="#privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                and allow us to contact you.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

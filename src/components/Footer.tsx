import { motion } from "framer-motion";

const footerLinks = {
  "Electric Scooters": [
    { label: "Okoyama Pulse", href: "#pulse" },
    { label: "Okoyama Zen", href: "#zen" },
    { label: "Compare Models", href: "#compare" },
    { label: "Book Test Ride", href: "#test-ride" },
    { label: "Find Dealers", href: "#dealers" },
  ],
  "Ownership": [
    { label: "Charging Network", href: "#charging" },
    { label: "Battery Warranty", href: "#warranty" },
    { label: "Service Centers", href: "#service" },
    { label: "Accessories", href: "#accessories" },
    { label: "Smart App", href: "#app" },
  ],
  "Company": [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
    { label: "Investor Relations", href: "#investors" },
    { label: "Contact", href: "#contact" },
  ],
  "Support": [
    { label: "FAQs", href: "#faq" },
    { label: "EMI Calculator", href: "#emi" },
    { label: "Warranty Policy", href: "#warranty" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "#", icon: "📸" },
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "YouTube", href: "#", icon: "▶️" },
  { label: "LinkedIn", href: "#", icon: "💼" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-gradient-gold">岡山</span>
                <span className="text-foreground ml-1">OKOYAMA</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Premium electric mobility, crafted with Japanese precision.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg hover:bg-primary/20 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Okoyama Electric. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

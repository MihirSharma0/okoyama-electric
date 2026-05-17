import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const footerLinks = {
  "Electric Scooters": [
    { label: "Sport", href: "/sport" },
    { label: "Sport Pro", href: "/sport-pro" },
    { label: "Eagle Eye", href: "/eagle-eye" },
    { label: "Trench", href: "/trench" },
    { label: "Trigger 3x", href: "/trigger-3x" },
    { label: "Truss 2X", href: "/truss" },
    { label: "Wexpro Round", href: "/wexpro-round" },
    { label: "Wexpro Square", href: "/wexpro-square" },
  ],
  "Ownership": [
    { label: "Charging Network", href: "/charging-network" },
    { label: "Battery Warranty", href: "/battery-warranty" },
    { label: "Service Centers", href: "/service-centers" },
    { label: "Accessories", href: "/accessories" },
    { label: "Smart App", href: "/smart-app" },
  ],
  "Company": [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Contact", href: "/contact" },
  ],
  "Support": [
    { label: "FAQs", href: "/faqs" },
    { label: "EMI Calculator", href: "/finance" },
    { label: "Compare Models", href: "/compare" },
    { label: "Book Test Ride", href: "/test-ride" },
    { label: "Find Dealers", href: "/dealers" },
    { label: "Warranty Policy", href: "/warranty-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/okoyama", icon: "📸" },
  { label: "Twitter", href: "https://twitter.com/okoyama", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com/okoyama", icon: "▶️" },
  { label: "LinkedIn", href: "https://linkedin.com/company/okoyama", icon: "💼" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Okoyama Logo" width={64} height={64} className="h-8 w-auto object-contain rounded-sm" />
              <div className="flex flex-col justify-center">
                <span className="font-display text-2xl font-bold tracking-tight leading-none text-foreground ml-1">
                  OKOYAMA
                </span>
                <div className="flex justify-between text-[10px] text-muted-foreground uppercase ml-1 mt-[3px] font-semibold leading-none w-[calc(100%-4px)]">
                  {"ELECTRIC".split("").map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Premium electric mobility, crafted with Japanese precision.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <h3 className="font-display font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
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
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/warranty-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

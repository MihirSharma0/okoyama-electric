import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const navLinks = [
  { label: "Vintage 1990", href: "#vintage-1990" },
  { label: "Sport Pro", href: "#sport-pro" },
  { label: "Eagle Eye", href: "#eagle-eye" },
];

const quickLinks = [
  { label: "Test Ride", href: "/test-ride" },
  { label: "Compare Models", href: "/compare" },
  { label: "Finance", href: "/finance" },
  { label: "Find a Dealer", href: "/dealers" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-gradient-gold">岡山</span>
            <span className="text-foreground ml-1">OKOYAMA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={window.location.pathname === '/' ? link.href : `/${link.href}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              onBlur={() => setTimeout(() => setShowMore(false), 200)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Quick Links
              <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 py-2 rounded-lg bg-card border border-border shadow-lg"
                >
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/test-ride">
            <Button variant="heroOutline" size="sm">
              Test Ride
            </Button>
          </Link>
          <Link to="/test-ride">
            <Button variant="hero" size="sm">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container py-4 space-y-4">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Models</p>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={window.location.pathname === '/' ? link.href : `/${link.href}`}
                    className="block py-1 text-lg font-medium text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 space-y-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Links</p>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block py-1 text-lg font-medium text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <Link to="/test-ride" className="flex-1">
                  <Button variant="heroOutline" className="w-full">
                    Test Ride
                  </Button>
                </Link>
                <Link to="/test-ride" className="flex-1">
                  <Button variant="hero" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

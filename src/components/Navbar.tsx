import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Sport", href: "/sport" },
  { label: "Sport Pro", href: "/sport-pro" },
  { label: "Eagle Eye", href: "/eagle-eye" },
  { label: "Trench", href: "/trench" },
  { label: "Trigger 3x", href: "/trigger-3x" },
  { label: "Truss 2X", href: "/truss" },
  { label: "Wexpro Round", href: "/wexpro-round" },
  { label: "Wexpro Square", href: "/wexpro-square" },
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
          <img src={logo} alt="Okoyama Logo" width={80} height={80} className="h-10 w-auto object-contain rounded-sm" />
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
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Models dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-4"
            >
              Models
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 mt-0 w-56 py-2 rounded-xl bg-card border border-border shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="grid gap-1 px-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links directly on Nav */}
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
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

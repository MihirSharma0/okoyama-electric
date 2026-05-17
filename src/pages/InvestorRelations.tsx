import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TrendingUp, FileText, Globe, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestorRelations = () => {
  const reports = [
    { title: "Q4 FY25-26 Financial Summary", size: "1.4 MB" },
    { title: "2025 Annual Sustainability Report", size: "4.2 MB" },
    { title: "Okoyama Corporate Governance Codex", size: "850 KB" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Investor Relations | Okoyama Electric</title>
        <meta name="description" content="Access Okoyama Electric financial statements, earnings call sheets, ESG objectives, and governance boards." />
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
              Governance & Finance
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Investor <span className="text-gradient-gold">Relations</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We operate with maximum financial transparency, driving a robust green mobility business plan aligned with long-term ESG growth vectors.
            </p>
          </motion.div>
        </section>

        {/* Highlight Stats */}
        <section className="container mx-auto px-4 max-w-5xl mb-24 grid md:grid-cols-3 gap-8">
          {[
            { label: "YoY Volume Growth", value: "+148%", icon: TrendingUp },
            { label: "Solar Energy Assembly", value: "100%", icon: Globe },
            { label: "Authorized Capitalization", value: "₹250 Cr", icon: Landmark },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border text-center space-y-4 hover:border-primary/15 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-4xl font-display font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</p>
              </motion.div>
            );
          })}
        </section>

        {/* Reports Download */}
        <section className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Earnings & Statements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reports.map((report, i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary/15 border border-border flex items-center justify-between gap-6 hover:border-primary/10 transition-all">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground line-clamp-1">{report.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">PDF Format • {report.size}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 text-xs">Download</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorRelations;

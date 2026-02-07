import { Zap, Map, Gauge, Shield, Battery, Smartphone, Navigation, RotateCcw } from "lucide-react";

const features = [
  { icon: Zap, text: "0-40 km/h in 2.8 sec" },
  { icon: Map, text: "Built-in navigation" },
  { icon: Gauge, text: "120 km/h top speed" },
  { icon: Shield, text: "8-year battery warranty" },
  { icon: Battery, text: "Full charge in 45 mins" },
  { icon: Smartphone, text: "Smart app control" },
  { icon: Navigation, text: "Live location sharing" },
  { icon: RotateCcw, text: "One-press reverse" },
];

export function FeatureMarquee() {
  return (
    <section className="py-6 bg-secondary border-y border-border overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

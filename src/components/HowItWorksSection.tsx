import { motion } from "framer-motion";
import { Rocket, Users, Camera, Gift, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "Pre-Market Assets",
    description: "Launched via Zora + Farcaster",
  },
  {
    number: "02",
    icon: Users,
    title: "Collectors Engage",
    description: "Post Coins or Bid on Casts",
  },
  {
    number: "03",
    icon: Camera,
    title: "Per Epoch Snapshots",
    description: "Track holders for airdrop allocations",
  },
  {
    number: "04",
    icon: Gift,
    title: "Collector Rewards",
    description: "100% NFTs, 60% tokens",
  },
  {
    number: "05",
    icon: Zap,
    title: "Asset-Generation Events",
    description: "AGEs announced after Cast 1234",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text-primary">
            How It Works
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl font-display font-bold gradient-text-accent">
                      {step.number}
                    </span>
                    <step.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

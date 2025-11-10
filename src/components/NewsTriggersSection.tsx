import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Sparkles, Lightbulb, Search } from "lucide-react";

const triggers = [
  {
    icon: AlertTriangle,
    title: "Verified / Suspected Extinction",
    color: "text-destructive",
  },
  {
    icon: TrendingUp,
    title: "Conservation Status Change",
    color: "text-accent",
  },
  {
    icon: Sparkles,
    title: "De-extinction Event",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "New Conservation Strategies",
    color: "text-accent-glow",
  },
  {
    icon: Search,
    title: "Discovery of New Species",
    color: "text-primary-glow",
  },
];

export const NewsTriggersSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text-accent">
            News Triggers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Events that activate new Asset-Generation Events (AGEs)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triggers.map((trigger, index) => (
            <motion.div
              key={trigger.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl flex items-start gap-4 hover:glow-primary transition-all duration-300 group"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <trigger.icon size={32} className={`${trigger.color} shrink-0`} />
              </motion.div>
              <div>
                <h3 className="text-lg font-display font-semibold">{trigger.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

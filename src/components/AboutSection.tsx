import { motion } from "framer-motion";
import { Database, Bird, Coins } from "lucide-react";

const features = [
  { icon: Database, label: "On-Chain", color: "text-primary" },
  { icon: Bird, label: "Conservation", color: "text-accent" },
  { icon: Coins, label: "Community", color: "text-primary-glow" },
];

export const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text-primary">
            What Is FCBCC?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            A storytelling-based, onchain collectible experiment — where art, lore, and conservation 
            meet Base culture. Built as a living archive of endangered species, immortalized through 
            blockchain technology and community storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className={`${feature.color} p-6 rounded-full glass-card`}
              >
                <feature.icon size={48} />
              </motion.div>
              <h3 className="text-xl font-display font-semibold">{feature.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

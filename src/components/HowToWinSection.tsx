import { motion } from "framer-motion";
import { Trophy, Gem } from "lucide-react";

const winMethods = [
  {
    icon: Trophy,
    title: "Win by Auction",
    description: "Participate in Farcaster Cast Auctions",
    gradient: "from-accent to-accent-glow",
  },
  {
    icon: Gem,
    title: "Win by Ownership",
    description: "Hold the most Post Coins on Zora",
    gradient: "from-primary to-primary-glow",
  },
];

export const HowToWinSection = () => {
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
            How to Win
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {winMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-xl relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${method.gradient} opacity-5 rounded-full blur-3xl`}
              />
              
              <method.icon size={64} className="mb-6 text-primary group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-2xl font-display font-bold mb-3">{method.title}</h3>
              <p className="text-muted-foreground text-lg">{method.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-lg text-foreground/70 max-w-3xl mx-auto"
        >
          Winning unlocks access to exclusive airdrops, lore updates, and community IP.
        </motion.p>
      </div>
    </section>
  );
};

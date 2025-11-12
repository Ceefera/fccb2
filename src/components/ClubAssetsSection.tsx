import { motion } from "framer-motion";
import { Feather, Wallet, Radio, Video, Puzzle } from "lucide-react";

const assets = [
  {
    icon: Feather,
    title: "FCBCC NFT Collection",
    description: "Exclusive digital collectibles",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Wallet,
    title: "Creator Coin ($warplette)",
    description: "Community token rewards",
    gradient: "from-accent to-accent-glow",
  },
  {
    icon: Radio,
    title: "Base Chain Account + Casts",
    description: "Onchain identity & content",
    gradient: "from-primary to-accent",
  },
  {
    icon: Video,
    title: "BaseApp Posts / Videos",
    description: "Multimedia storytelling",
    gradient: "from-accent to-primary",
  },
  {
    icon: Puzzle,
    title: "Tokenized Conservation Events",
    description: "AGE announcements & rewards",
    gradient: "from-primary-glow to-accent-glow",
  },
];

export const ClubAssetsSection = () => {
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
            Club Assets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Community IP, Collectibles, Identity and Rewards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, index) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${asset.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${asset.gradient} mb-4`}>
                  <asset.icon size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{asset.title}</h3>
                <p className="text-muted-foreground">{asset.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

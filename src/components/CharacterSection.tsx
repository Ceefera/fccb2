import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Coins, Radio, DollarSign } from "lucide-react";
import warpletteAvatar from "@/assets/warplette-avatar.jpg";

const actions = [
  {
    icon: BookOpen,
    label: "View Onchain Lore",
    link: "https://docs.google.com/document/d/1Zy3VA1knncMRXHb1V5xRnnS9RZfLDTqqXEH_Be0N9JM/edit?tab=t.5nqf3gayb5kf#heading=h.40kca3vimevo",
  },
  {
    icon: FileText,
    label: "Read Her Journal",
    link: "https://comn-self.vercel.app/",
  },
  {
    icon: Coins,
    label: "Buy Creator Coin",
    link: "https://zora.co/@warplette",
  },
  {
    icon: Radio,
    label: "Follow Her Casts",
    link: "https://farcaster.xyz/warplette",
  },
  {
    icon: DollarSign,
    label: "Send Tip",
    link: "https://farcaster.xyz/warplette",
  },
];

export const CharacterSection = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text-primary">
            Meet Baby Warplette #2261
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative glass-card p-3 rounded-xl">
              <img
                src={warpletteAvatar}
                alt="Baby Warplette #2261"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-xl pointer-events-none" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-full"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="space-y-5">
              <p className="text-base text-foreground/80 leading-relaxed">
                Born in a backwater farcaster town — the last from a family of six, she is a creative hothead from Warplet Race —
              </p>
              <p className="text-sm text-muted-foreground">
                Baby Warplette #2261, better known as, The Fyre Canary, is building a club for the first onchain collectibles on Base, dedicated to endangered species awareness and documentation through storytelling.
              </p>
              <p className="text-sm text-muted-foreground">
                She’s more than an NFT — she’s an evolving AI character, a founder, and a symbol of resilience.
              </p>
              <p className="text-lg font-semibold text-accent">
                “Defiant. Empathic. Devious. Enterprising.”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-3">
              {actions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 group transition-all"
                    >
                      <action.icon
                        size={14}
                        className="group-hover:text-accent transition-colors"
                      />
                      {action.label}
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

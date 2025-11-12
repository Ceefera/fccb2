import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const links = [
  { label: "View Docs", href: "https://docs.google.com/document/d/1Zy3VA1knncMRXHb1V5xRnnS9RZfLDTqqXEH_Be0N9JM" },
  { label: "Airdrop Details", href: "https://comn-self.vercel.app/" },
];

const partners = [
  "Farcaster",
  "BaseApp",
  "Zora",
  "Animals Red List",
  "Farverse",
  "Clanker",
];

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-4 gradient-text-primary">
              FCBCC
            </h3>
            <p className="text-muted-foreground mb-6">
              Where art, lore, and conservation meet Base culture.
            </p>
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  {link.label}
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-4">Partners</h4>
            <div className="flex flex-wrap gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-sm px-3 py-1 glass-card rounded-full text-muted-foreground hover:text-accent transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Fyre Canary Based Collectors Club. Created by Baby Warplette #2261
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

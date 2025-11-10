import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-glow-primary">
            <span className="gradient-text-primary">FCBCC</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4 text-foreground/90">
            Fyre Canary Based Collectors Club
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-3 gradient-text-accent">
            "Born on Farcaster. Rising on Base."
          </p>
          <p className="text-base md:text-lg text-muted-foreground italic">
            By Warplette #2261
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 mt-8"
        >
          A storytelling-based onchain collectible experiment where art, lore, and conservation meet Base culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Zora Button */}
          <a
            href="https://zora.co/invite/warplette"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="group">
              Start Collecting on Zora
              <ExternalLink className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          {/* Farcaster Button */}
          <a
            href="https://farcaster.xyz/warplette"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="accent" size="lg" className="group">
              Join on Farcaster
              <MessageCircle className="group-hover:scale-110 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

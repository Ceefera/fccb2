import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge / Quote */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm text-primary text-sm md:text-base font-medium">
            <Sparkles className="w-4 h-4 text-primary/80" />
            <span>"Born on Farcaster. Rising on Base."</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-glow-primary">
            <span className="gradient-text-primary">FCBCC</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4 text-foreground/90">
            Fyre Canary
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4 text-foreground/90">
            Based Collectors Club
          </h2>

          <p className="text-base md:text-lg text-muted-foreground italic">
            By{" "}
            <a
              href="https://opensea.io/item/base/0x2180e3b342e2dd561b2eb14057f7097c0841896e/2261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              Warplette #2261
            </a>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 mt-8"
        >
          Bringing curated endangered species onchain through art, lore, and the community culture on Base.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
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

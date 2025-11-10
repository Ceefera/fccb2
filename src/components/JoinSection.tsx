import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Twitter } from "lucide-react";

export const JoinSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-glow-primary">
            <span className="gradient-text-primary">Join the Movement</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Be part of a living onchain story. Win a Cast Auction or hold Post Coins to enter the club.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
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

            <a
              href="https://x.com/warplette"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                Follow on X
                <Twitter className="group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

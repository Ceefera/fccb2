import { motion } from "framer-motion";
import { Image, Sparkles, FileCheck, Users, Lightbulb } from "lucide-react";

const goals = [
  {
    icon: Image,
    title: "Curated Collection",
    description: "Conservation awareness through art",
  },
  {
    icon: Sparkles,
    title: "Immortalize Species",
    description: "Tokenized storytelling",
  },
  {
    icon: FileCheck,
    title: "Transparent Ledger",
    description: "Public conservation progress",
  },
  {
    icon: Users,
    title: "Collector Community",
    description: "Build community on Base",
  },
  {
    icon: Lightbulb,
    title: "Original Concept",
    description: "Warplet concept art",
  },
];

export const ProjectGoalsSection = () => {
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
            Project Goals
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300 group"
            >
              <goal.icon 
                size={48} 
                className="mb-4 text-primary group-hover:text-accent transition-colors duration-300" 
              />
              <h3 className="text-xl font-display font-semibold mb-2">{goal.title}</h3>
              <p className="text-muted-foreground">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

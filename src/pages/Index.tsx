import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { HowToWinSection } from "@/components/HowToWinSection";
import { CharacterSection } from "@/components/CharacterSection";
import { ProjectGoalsSection } from "@/components/ProjectGoalsSection";
import { ClubAssetsSection } from "@/components/ClubAssetsSection";
import { NewsTriggersSection } from "@/components/NewsTriggersSection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <HowToWinSection />
      <CharacterSection />
      <ProjectGoalsSection />
      <ClubAssetsSection />
      <NewsTriggersSection />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default Index;

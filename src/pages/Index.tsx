import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-background overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;

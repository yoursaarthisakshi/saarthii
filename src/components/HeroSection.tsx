import { Button } from "@/components/ui/button";
import { Heart, Brain, Sparkles, ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroProfile from "@/assets/hero_profile.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-secondary/30 to-lavender-light/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-coral/10 via-transparent to-transparent" />
      
      {/* Floating decorative elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 md:left-20"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="h-8 w-8 md:h-12 md:w-12 text-coral opacity-60" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-10 md:right-32"
          animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Brain className="h-10 w-10 md:h-14 md:w-14 text-lavender opacity-70" />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 md:left-40"
          animate={{ y: [-5, 15, -5], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkles className="h-6 w-6 md:h-10 md:w-10 text-peach opacity-60" />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-10 md:right-20"
          animate={{ y: [5, -15, 5], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Heart className="h-6 w-6 md:h-8 md:w-8 text-pink opacity-50" />
        </motion.div>
        
        {/* Enhanced blob decorations */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-lavender/30 to-coral/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-coral/15 to-peach/20 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo with glow effect */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto">
              {/* Glowing ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-coral via-peach to-lavender blur-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-coral-light to-lavender p-1">
                <img 
                  src={heroProfile} 
                  alt="Sakshi George - Psychologist and Life Coach"
                  className="w-full h-full rounded-full object-cover ring-4 ring-background"
                />
              </div>
            </div>
          </motion.div>

          {/* Name & Title with staggered animations */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-5 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient-coral inline-block">Sakshi George</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-foreground/70 mb-3 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Psychologist & Life Coach
          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Helping you understand your emotions, heal quietly carried parts of
            yourself, and navigate relationships with clarity.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative gradient-coral text-white shadow-xl shadow-coral/25 hover:shadow-2xl hover:shadow-coral/40 transition-all duration-300 hover:scale-105 px-8 py-6 text-base rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Book a Session
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-coral via-peach to-coral bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 px-8 py-6 text-base rounded-full backdrop-blur-sm"
            >
              Learn More About Me
            </Button>
          </motion.div>

          {/* Tagline with subtle animation */}
          <motion.p 
            className="text-sm md:text-base text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            "Overthinking is accepted here. Your feelings are taken seriously."
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
          aria-label="Scroll to learn more"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:bg-background transition-all"
          >
            <ArrowDown className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;

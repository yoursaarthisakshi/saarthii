import { Button } from "@/components/ui/button";
import { Heart, Brain, Sparkles, ArrowDown } from "lucide-react";
import heroProfile from "@/assets/hero_profile.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-warm">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 md:left-20 float-animation">
          <Heart className="h-8 w-8 md:h-12 md:w-12 text-coral opacity-40" />
        </div>
        <div className="absolute top-40 right-10 md:right-32 float-animation-delayed">
          <Brain className="h-10 w-10 md:h-14 md:w-14 text-lavender opacity-50" />
        </div>
        <div className="absolute bottom-40 left-20 md:left-40 float-animation">
          <Sparkles className="h-6 w-6 md:h-10 md:w-10 text-peach opacity-40" />
        </div>
        <div className="absolute top-1/2 right-10 md:right-20 float-animation-delayed">
          <Heart className="h-6 w-6 md:h-8 md:w-8 text-pink opacity-30" />
        </div>
        
        {/* Blob decorations */}
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-lavender/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[400px] md:h-[400px] rounded-full bg-coral/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Photo placeholder */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full bg-gradient-to-br from-coral-light to-lavender p-1">
              <img 
                src={heroProfile} 
                alt="Sakshi George - Psychologist and Life Coach"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in-up animation-delay-100">
            Hi, I'm{" "}
            <span className="text-gradient-coral">Sakshi George</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in-up animation-delay-200">
            Psychologist & Life Coach
          </p>

          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
            Helping you understand your emotions, heal quietly carried parts of
            yourself, and navigate relationships with clarity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-coral text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg px-8"
            >
              Book a Session
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
            >
              Learn More About Me
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground italic animate-fade-in-up animation-delay-500">
            "Overthinking is accepted here. Your feelings are taken seriously."
          </p>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Scroll to learn more"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

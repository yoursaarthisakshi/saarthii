import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Sparkles, Shield, Users, Lightbulb } from "lucide-react";

const therapeuticApproaches = [
  "Inner Child Healing",
  "Expressive Art Therapy",
  "Emotional Regulation",
  "Positive Psychology",
  "EMO Matrix Counselling",
  "Mindfulness Techniques",
];

const focusAreas = [
  "Relationships",
  "Anxiety & Stress",
  "Overthinking",
  "Self-Awareness",
  "Emotional Growth",
  "Boundary Setting",
  "Life Transitions",
  "Self-Esteem",
];

const softSkills = [
  { icon: Heart, label: "Empathy & Compassion" },
  { icon: Brain, label: "Active Listening" },
  { icon: Shield, label: "Safe, Non-Judgmental Space" },
  { icon: Lightbulb, label: "Practical Guidance" },
  { icon: Users, label: "Collaborative Approach" },
  { icon: Sparkles, label: "Clarity & Insight" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-secondary/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-lavender/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Skills & <span className="text-gradient-coral">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of professional psychology training with practical, relatable guidance
              tailored to your unique journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              {/* Therapeutic Approaches */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg gradient-coral flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </span>
                  Therapeutic Approaches
                </h3>
                <div className="flex flex-wrap gap-3">
                  {therapeuticApproaches.map((approach) => (
                    <Badge
                      key={approach}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default py-2 px-4 text-sm"
                    >
                      {approach}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Focus Areas */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </span>
                  Focus Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <Badge
                      key={area}
                      variant="outline"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default py-2 px-4 text-sm"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Soft Skills */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 h-fit">
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-peach flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </span>
                What I Bring to Each Session
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full gradient-coral flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>

              {/* Bonus highlight */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-lavender/20 border border-primary/20">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <span className="font-semibold text-primary">My unique approach:</span>{" "}
                  Blending professional psychology with practical, relatable guidance —
                  helping you not just understand, but actually apply insights to your
                  everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

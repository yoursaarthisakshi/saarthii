import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Sparkles, Shield, Users, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  { icon: Heart, label: "Empathy & Compassion", gradient: "from-coral to-peach" },
  { icon: Brain, label: "Active Listening", gradient: "from-lavender to-pink" },
  { icon: Shield, label: "Safe, Non-Judgmental Space", gradient: "from-peach to-coral-light" },
  { icon: Lightbulb, label: "Practical Guidance", gradient: "from-coral to-peach" },
  { icon: Users, label: "Collaborative Approach", gradient: "from-lavender to-pink" },
  { icon: Sparkles, label: "Clarity & Insight", gradient: "from-peach to-coral-light" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/60 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-lavender/30 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Skills & <span className="text-gradient-coral">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              A blend of professional psychology training with practical, relatable guidance
              tailored to your unique journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Therapeutic Approaches */}
              <motion.div 
                className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold mb-7 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center shadow-lg shadow-coral/20">
                    <Brain className="h-6 w-6 text-white" />
                  </span>
                  Therapeutic Approaches
                </h3>
                <div className="flex flex-wrap gap-3">
                  {therapeuticApproaches.map((approach, index) => (
                    <motion.div
                      key={approach}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default py-2.5 px-5 text-sm rounded-full hover:scale-105"
                      >
                        {approach}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Focus Areas */}
              <motion.div 
                className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold mb-7 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl gradient-lavender flex items-center justify-center shadow-lg shadow-lavender/20">
                    <Heart className="h-6 w-6 text-white" />
                  </span>
                  Focus Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default py-2.5 px-5 text-sm rounded-full hover:scale-105"
                      >
                        {area}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Soft Skills */}
            <motion.div 
              className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500 h-fit"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-display font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-peach flex items-center justify-center shadow-lg shadow-peach/20">
                  <Sparkles className="h-6 w-6 text-white" />
                </span>
                What I Bring to Each Session
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <span className="font-medium text-sm md:text-base">{skill.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bonus highlight */}
              <motion.div 
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-lavender/15 to-primary/10 border border-primary/20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <span className="font-bold text-primary">My unique approach:</span>{" "}
                  Blending professional psychology with practical, relatable guidance —
                  helping you not just understand, but actually apply insights to your
                  everyday life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

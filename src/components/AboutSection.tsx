import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutPhoto from "@/assets/about_me.png";

const educationTimeline = [
  {
    title: "Bachelor's in Psychology",
    icon: GraduationCap,
    description: "Foundation in psychological principles",
  },
  {
    title: "Master's in Psychology",
    icon: GraduationCap,
    description: "Advanced study of human behavior",
  },
  {
    title: "EMO Matrix Counselling Training",
    icon: Award,
    description: "Specialized emotional healing techniques",
  },
  {
    title: "Positive Psychiatry",
    icon: BookOpen,
    description: "University of Sydney certification",
  },
  {
    title: "Expressive Art Therapy",
    icon: Heart,
    description: "HR 'O' HOUR certified practitioner",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-lavender/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-coral/10 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Photo Side */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Main image container */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-lavender/20" />
                  <img 
                    src={aboutPhoto} 
                    alt="Sakshi George - Psychologist and Life Coach"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating accent shapes */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-coral opacity-80 blur-sm"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full gradient-lavender opacity-60 blur-sm"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                About <span className="text-gradient-coral">Me</span>
              </h2>
              
              <div className="space-y-5 text-foreground/70 leading-relaxed mb-10 text-base md:text-lg">
                <p>
                  I'm Sakshi George, a psychologist and life coach dedicated to helping
                  individuals understand their emotions, heal from past experiences, and
                  build healthier relationships—with themselves and others.
                </p>
                <p>
                  My approach blends professional psychological expertise with practical,
                  relatable guidance. I believe that everyone deserves a safe,
                  non-judgmental space to explore their thoughts and feelings.
                </p>
                <p>
                  Whether you're struggling with anxiety, navigating relationship
                  challenges, or simply seeking more self-awareness, I'm here to walk
                  alongside you on your journey toward emotional clarity and growth.
                </p>
              </div>

              {/* Quote highlight */}
              <motion.blockquote 
                className="relative border-l-4 border-primary pl-6 py-4 bg-gradient-to-r from-secondary/80 to-transparent rounded-r-xl"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="italic text-foreground/90 text-lg">
                  "Overthinking is accepted here. Your feelings are taken seriously."
                </p>
              </motion.blockquote>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <motion.div 
            className="mt-24 md:mt-32"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-4xl font-display font-bold text-center mb-14">
              Education & <span className="text-gradient-coral">Training</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-lavender/10" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-14 h-14 rounded-xl gradient-coral flex items-center justify-center mb-5 shadow-lg shadow-coral/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

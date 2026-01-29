import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, GraduationCap, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Psychologist",
    organization: "Private Practice",
    period: "Ongoing",
    description:
      "Providing one-on-one therapy sessions for emotional healing, relationship guidance, and self-awareness development.",
    icon: Briefcase,
    stats: { value: 1200, label: "Individuals Guided" },
    gradient: "from-coral to-peach",
    shadow: "shadow-coral/20",
  },
  {
    title: "Emotional Intelligence Facilitator",
    organization: "Skillizee",
    period: "Ongoing",
    description:
      "Working with students on emotional regulation, self-awareness, and developing healthy coping mechanisms.",
    icon: GraduationCap,
    stats: { value: 4000, label: "Students Reached" },
    gradient: "from-lavender to-pink",
    shadow: "shadow-lavender/20",
  },
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-cream via-secondary/20 to-cream">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-lavender/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Work <span className="text-gradient-coral">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Years of dedicated practice helping individuals navigate their emotional
              journeys and find clarity.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`group bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl ${exp.shadow} transition-all duration-500 border border-border/50 hover:border-primary/20 relative overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Background decoration */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-10 bg-gradient-to-br ${exp.gradient}`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-7">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${exp.gradient} shadow-xl ${exp.shadow}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <exp.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-4">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-7">
                    {exp.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-secondary/80 to-secondary/40 border border-border/50">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <TrendingUp className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        <AnimatedCounter target={exp.stats.value} />
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">{exp.stats.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Summary */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-5 shadow-xl border border-border/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full gradient-coral flex items-center justify-center shadow-lg shadow-coral/20">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="text-base md:text-lg font-medium">
                Trusted by <span className="text-primary font-bold text-xl">5,200+</span> individuals
                on their healing journey
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

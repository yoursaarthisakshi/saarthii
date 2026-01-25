import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, GraduationCap, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Psychologist",
    organization: "Private Practice",
    period: "Ongoing",
    description:
      "Providing one-on-one therapy sessions for emotional healing, relationship guidance, and self-awareness development.",
    icon: Briefcase,
    stats: { value: 800, label: "Individuals Guided" },
    color: "coral",
  },
  {
    title: "Emotional Intelligence Facilitator",
    organization: "Skillizee",
    period: "Ongoing",
    description:
      "Working with students on emotional regulation, self-awareness, and developing healthy coping mechanisms.",
    icon: GraduationCap,
    stats: { value: 500, label: "Students Reached" },
    color: "lavender",
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

  return <span ref={ref}>{count}+</span>;
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-lavender/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Work <span className="text-gradient-coral">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Years of dedicated practice helping individuals navigate their emotional
              journeys and find clarity.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 ${
                    exp.color === "coral" ? "gradient-coral" : "gradient-lavender"
                  }`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        exp.color === "coral" ? "gradient-coral" : "gradient-lavender"
                      }`}
                    >
                      <exp.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-4">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                    <div className="w-10 h-10 rounded-full gradient-coral flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        <AnimatedCounter target={exp.stats.value} />
                      </div>
                      <div className="text-xs text-muted-foreground">{exp.stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-sm border border-border/50">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Trusted by <span className="text-primary font-bold">1,300+</span> individuals
                on their healing journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

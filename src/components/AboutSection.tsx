import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";

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
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-lavender/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-lavender-light p-1">
                  <div className="w-full h-full rounded-2xl bg-cream flex items-center justify-center">
                    <span className="text-muted-foreground">About Photo</span>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full gradient-coral opacity-20 blur-xl" />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About <span className="text-gradient-coral">Me</span>
              </h2>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
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
              <blockquote className="border-l-4 border-primary pl-4 py-2 bg-secondary/50 rounded-r-lg mb-8">
                <p className="italic text-foreground/90">
                  "Overthinking is accepted here. Your feelings are taken seriously."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-16 md:mt-24">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
              Education & <span className="text-gradient-coral">Training</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {educationTimeline.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full gradient-coral flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

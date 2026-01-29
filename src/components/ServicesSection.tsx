import { Button } from "@/components/ui/button";
import { Users, Monitor, Compass, ArrowRight, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Users,
    title: "One-on-One Therapy",
    description:
      "In-person & online sessions for emotional healing, relationships, and self-awareness. A safe space to explore your inner world.",
    features: ["Inner child healing", "Anxiety & stress", "Relationship issues", "Self-discovery"],
    gradient: "from-coral to-peach",
    shadow: "shadow-coral/20",
  },
  {
    icon: Monitor,
    title: "Online Consultations",
    description:
      "Accessible support from anywhere you are. Connect with me virtually for meaningful therapeutic conversations.",
    features: ["Flexible scheduling", "Comfortable setting", "Same quality care", "Global accessibility"],
    gradient: "from-lavender to-pink",
    shadow: "shadow-lavender/20",
  },
  {
    icon: Compass,
    title: "Life Coaching",
    description:
      "Guidance for clarity, healthy boundaries & conscious choices. Navigate life transitions with confidence.",
    features: ["Goal setting", "Boundary building", "Decision clarity", "Personal growth"],
    gradient: "from-peach to-coral-light",
    shadow: "shadow-peach/20",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-cream via-secondary/20 to-cream">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-lavender/10 blur-3xl" />

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
              How I Can <span className="text-gradient-coral">Help You</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Every journey is unique. Choose the support that feels right for where you are
              right now.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl ${service.shadow} transition-all duration-500 border border-border/50 hover:border-primary/20 overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/3 to-lavender/5" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-7 bg-gradient-to-br ${service.gradient} shadow-xl ${service.shadow}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-7 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground/70"
                      >
                        <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-xl py-5 group/btn"
                  >
                    Book a Session
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

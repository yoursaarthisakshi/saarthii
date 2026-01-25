import { Button } from "@/components/ui/button";
import { Users, Monitor, Compass } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "One-on-One Therapy",
    description:
      "In-person & online sessions for emotional healing, relationships, and self-awareness. A safe space to explore your inner world.",
    features: ["Inner child healing", "Anxiety & stress", "Relationship issues", "Self-discovery"],
    color: "coral",
  },
  {
    icon: Monitor,
    title: "Online Consultations",
    description:
      "Accessible support from anywhere you are. Connect with me virtually for meaningful therapeutic conversations.",
    features: ["Flexible scheduling", "Comfortable setting", "Same quality care", "Global accessibility"],
    color: "lavender",
  },
  {
    icon: Compass,
    title: "Life Coaching",
    description:
      "Guidance for clarity, healthy boundaries & conscious choices. Navigate life transitions with confidence.",
    features: ["Goal setting", "Boundary building", "Decision clarity", "Personal growth"],
    color: "peach",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-28 gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full bg-lavender/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How I Can <span className="text-gradient-coral">Help You</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every journey is unique. Choose the support that feels right for where you are
              right now.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                    service.color === "coral"
                      ? "gradient-coral"
                      : service.color === "lavender"
                      ? "gradient-lavender"
                      : "bg-peach"
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      service.color === "coral"
                        ? "gradient-coral"
                        : service.color === "lavender"
                        ? "gradient-lavender"
                        : "bg-peach"
                    }`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Book a Session
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

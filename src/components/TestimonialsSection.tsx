import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    initials: "A.K.",
    rating: 5,
    quote:
      "Sakshi helped me understand patterns I'd been repeating for years. Her gentle approach made me feel safe to open up.",
    service: "1:1 Therapy",
    color: "coral",
  },
  {
    initials: "R.M.",
    rating: 5,
    quote:
      "I finally learned how to set boundaries without guilt. The sessions gave me clarity I didn't know I needed.",
    service: "Life Coaching",
    color: "lavender",
  },
  {
    initials: "P.S.",
    rating: 5,
    quote:
      "She creates such a warm, non-judgmental space. I felt heard for the first time in a long time.",
    service: "Online Consultation",
    color: "peach",
  },
  {
    initials: "N.D.",
    rating: 5,
    quote:
      "Working with Sakshi changed how I relate to my emotions. I'm more self-aware and kinder to myself now.",
    service: "1:1 Therapy",
    color: "pink",
  },
  {
    initials: "T.J.",
    rating: 5,
    quote:
      "Her blend of professional insight and practical advice is exactly what I needed. Highly recommend!",
    service: "Life Coaching",
    color: "coral",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--lavender-light)) 0%, hsl(var(--cream)) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 rotate-180">
        <Quote className="h-24 w-24 text-lavender" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Words from Those I've{" "}
              <span className="text-gradient-coral">Worked With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from clients who trusted me on their journey of healing and
              self-discovery.
            </p>
          </div>

          {/* Carousel */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <div className="group bg-card h-full rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 relative overflow-hidden">
                      {/* Quote decoration */}
                      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                      {/* Avatar */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                            testimonial.color === "coral"
                              ? "gradient-coral"
                              : testimonial.color === "lavender"
                              ? "gradient-lavender"
                              : testimonial.color === "peach"
                              ? "bg-peach"
                              : "bg-pink"
                          }`}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          {/* Star Rating */}
                          <div className="flex gap-0.5 mb-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-primary text-primary animate-star-pulse"
                                style={{ animationDelay: `${i * 100}ms` }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {testimonial.service}
                          </span>
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-foreground/80 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-primary/30 hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

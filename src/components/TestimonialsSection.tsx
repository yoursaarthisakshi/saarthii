import { useEffect, useState } from "react";
import { Star, Quote, Camera } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const testimonials = [
  {
    initials: "A.K.",
    rating: 5,
    quote:
      "I was skeptical at first, but Sakshi's approach is so warm and understanding. She helped me see patterns I was blind to for years. After just a few sessions, I started feeling lighter and more in control of my emotions.",
    service: "1:1 Therapy",
    color: "coral",
  },
  {
    initials: "R.M.",
    rating: 5,
    quote:
      "The boundary-setting techniques she taught me changed my relationships completely. I used to feel guilty saying no, but now I understand it's an act of self-love. Thank you, Sakshi!",
    service: "Life Coaching",
    color: "lavender",
  },
  {
    initials: "P.S.",
    rating: 5,
    quote:
      "I reached out during one of my lowest points. Sakshi created such a safe space that I could finally talk about things I'd buried for years. She listens without judgment and offers genuine insights.",
    service: "Online Consultation",
    color: "peach",
  },
  {
    initials: "N.D.",
    rating: 5,
    quote:
      "My anxiety was affecting my work and relationships. Through our sessions, I learned practical coping strategies that actually work. I'm more self-aware now and much kinder to myself.",
    service: "1:1 Therapy",
    color: "pink",
  },
  {
    initials: "T.J.",
    rating: 5,
    quote:
      "What I love about Sakshi is her blend of professional expertise and practical, actionable advice. She doesn't just talk theory - she gives you tools you can use immediately. Life-changing!",
    service: "Life Coaching",
    color: "coral",
  },
  {
    initials: "S.R.",
    rating: 5,
    quote:
      "I was going through a difficult breakup and felt completely lost. Sakshi helped me process my emotions and rediscover my self-worth. I'm grateful for her patience and wisdom.",
    service: "Online Consultation",
    color: "lavender",
  },
];

// Placeholder for feedback screenshots - replace with actual screenshot imports
// Example: import feedback1 from "@/assets/feedback1.jpg";
const feedbackScreenshots: { src: string; alt: string }[] = [
  // Add your feedback screenshots here:
  // { src: feedback1, alt: "Client feedback screenshot 1" },
  // { src: feedback2, alt: "Client feedback screenshot 2" },
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

          {/* Testimonials Carousel */}
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
                      <p className="text-foreground/80 leading-relaxed italic text-sm">
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

          {/* Feedback Screenshots Gallery */}
          {feedbackScreenshots.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Camera className="h-4 w-4" />
                  <span>Real Feedback</span>
                </div>
                <h3 className="text-2xl font-display font-bold">
                  Screenshots from Happy Clients
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {feedbackScreenshots.map((screenshot, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <button className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-white text-sm font-medium">Click to view</span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-2">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for when no screenshots are added yet */}
          {feedbackScreenshots.length === 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm">
                <Camera className="h-4 w-4" />
                <span>Feedback screenshots coming soon</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

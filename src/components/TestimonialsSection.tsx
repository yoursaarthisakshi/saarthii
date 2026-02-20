import { useEffect, useState, useRef } from "react";
import { Star, Quote, Camera } from "lucide-react";
import { motion, useInView } from "framer-motion";
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
import feedback1 from "@/assets/feedback1.jpeg";
import feedback2 from "@/assets/feedback2.jpeg";
import feedback3 from "@/assets/feedback3.jpeg";
import feedback4 from "@/assets/feedback4.jpeg";
import feedback5 from "@/assets/feedback5.jpeg";
import feedback6 from "@/assets/feedback6.jpeg";
import feedback7 from "@/assets/feedback7.jpeg";
import feedback8 from "@/assets/feedback8.jpeg";
import feedback9 from "@/assets/feedback9.jpeg";
import feedback10 from "@/assets/feedback10.jpeg";

const testimonials = [
  {
    initials: "A.K.",
    rating: 5,
    quote:
      "I was skeptical at first, but Sakshi's approach is so warm and understanding. She helped me see patterns I was blind to for years. After just a few sessions, I started feeling lighter and more in control of my emotions.",
    service: "1:1 Therapy",
    gradient: "from-coral to-peach",
  },
  {
    initials: "R.M.",
    rating: 5,
    quote:
      "The boundary-setting techniques she taught me changed my relationships completely. I used to feel guilty saying no, but now I understand it's an act of self-love. Thank you, Sakshi!",
    service: "Life Coaching",
    gradient: "from-lavender to-pink",
  },
  {
    initials: "P.S.",
    rating: 5,
    quote:
      "I reached out during one of my lowest points. Sakshi created such a safe space that I could finally talk about things I'd buried for years. She listens without judgment and offers genuine insights.",
    service: "Online Consultation",
    gradient: "from-peach to-coral-light",
  },
  {
    initials: "N.D.",
    rating: 5,
    quote:
      "My anxiety was affecting my work and relationships. Through our sessions, I learned practical coping strategies that actually work. I'm more self-aware now and much kinder to myself.",
    service: "1:1 Therapy",
    gradient: "from-pink to-lavender",
  },
  {
    initials: "T.J.",
    rating: 5,
    quote:
      "What I love about Sakshi is her blend of professional expertise and practical, actionable advice. She doesn't just talk theory - she gives you tools you can use immediately. Life-changing!",
    service: "Life Coaching",
    gradient: "from-coral to-peach",
  },
  {
    initials: "S.R.",
    rating: 5,
    quote:
      "I was going through a difficult breakup and felt completely lost. Sakshi helped me process my emotions and rediscover my self-worth. I'm grateful for her patience and wisdom.",
    service: "Online Consultation",
    gradient: "from-lavender to-pink",
  },
];

const feedbackScreenshots: { src: string; alt: string }[] = [
  { src: feedback1, alt: "Client feedback - Thank you for everything" },
  { src: feedback2, alt: "Client feedback - Sessions brought clarity and calm" },
  { src: feedback3, alt: "Client feedback - Thanks for your time and open heart" },
  { src: feedback4, alt: "Client feedback - Unwavering support and invaluable advice" },
  { src: feedback5, alt: "Client feedback - Made me feel like an elder sister" },
  { src: feedback6, alt: "Client feedback - Life changed after sessions" },
  { src: feedback7, alt: "Client feedback - Feel more relaxed and calm" },
  { src: feedback8, alt: "Client feedback - Felt comfortable opening up" },
  { src: feedback9, alt: "Client feedback - Really feel good to talk with you" },
  { src: feedback10, alt: "Client feedback - Feeling positive after our session" },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

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
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-lavender-light/50 via-cream to-lavender-light/30"
      ref={ref}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 opacity-10"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Quote className="h-40 w-40 text-primary" />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 opacity-10 rotate-180"
        animate={{ rotate: [180, 170, 180] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Quote className="h-32 w-32 text-lavender" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Words from Those I've{" "}
              <span className="text-gradient-coral">Worked With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Real experiences from clients who trusted me on their journey of healing and
              self-discovery.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
                    <motion.div 
                      className="h-full"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <div className="group bg-card h-full rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 relative overflow-hidden">
                        {/* Quote decoration */}
                        <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                        {/* Avatar */}
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br ${testimonial.gradient} shadow-lg`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {testimonial.initials}
                          </motion.div>
                          <div>
                            {/* Star Rating */}
                            <div className="flex gap-0.5 mb-1">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-primary text-primary"
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground font-medium">
                              {testimonial.service}
                            </span>
                          </div>
                        </div>

                        {/* Quote */}
                        <p className="text-foreground/80 leading-relaxed italic text-sm md:text-base">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 mt-10">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-full transition-all" />
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        current === index
                          ? "bg-primary w-8"
                          : "bg-primary/30 hover:bg-primary/50 w-2.5"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-full transition-all" />
              </div>
            </Carousel>
          </motion.div>

          {/* Feedback Screenshots Gallery */}
          {feedbackScreenshots.length > 0 && (
            <motion.div 
              className="mt-24"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Gallery Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
                  <Camera className="h-4 w-4" />
                  <span>Real Messages</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">
                  Straight from Their{" "}
                  <span className="text-gradient-coral">Heart ❤️</span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                  Unfiltered messages from people who felt the difference — in their own words.
                </p>
              </div>

              {/* Masonry-style gallery */}
              <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4">
                {feedbackScreenshots.map((screenshot, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <motion.button
                        className="group relative w-full break-inside-avoid rounded-2xl overflow-hidden border border-border/40 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.05 * index }}
                        whileHover={{ scale: 1.02, y: -3 }}
                      >
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-auto object-cover block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <span className="text-white text-xs font-semibold tracking-wide bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            View Full
                          </span>
                        </div>
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg p-2 bg-background/95 backdrop-blur">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto rounded-xl"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

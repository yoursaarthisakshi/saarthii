import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin, Calendar, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-lavender/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Let's <span className="text-gradient-coral">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your journey toward emotional clarity? Book a session or send
              me a message.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Calendly Embed Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">Book a Session</h3>
                    <p className="text-sm text-muted-foreground">Choose a time that works for you</p>
                  </div>
                </div>

                {/* Calendly placeholder - replace with actual embed */}
                <div className="aspect-[4/3] rounded-xl bg-secondary/50 flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center p-8">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Calendly booking widget will be embedded here
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary/30"
                      onClick={() => window.open("https://calendly.com", "_blank")}
                    >
                      Open Calendly
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Info */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:yoursaarthi.sakshi@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full gradient-coral flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">yoursaarthi.sakshi@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/Your__Saarthii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full gradient-lavender flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <p className="font-medium">@Your__Saarthii</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/sakshi-george"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">Sakshi George</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Message Form */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="text-xl font-display font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-secondary/50 border-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-coral text-white hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 Your__Saarthii. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for your
              healing journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin, Calendar, Heart, Youtube, Send, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "918504048972";
    const messageText = `New Contact Form Submission:\n\n*Name:* ${formData.name}\n*Contact Number:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Message ready!",
      description: "Complete sending your message via WhatsApp.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      href: "mailto:yoursaarthi.sakshi@gmail.com",
      icon: Mail,
      label: "Email",
      value: "yoursaarthi.sakshi@gmail.com",
      gradient: "from-coral to-peach",
    },
    {
      href: "https://www.instagram.com/your_saarthii?igsh=MmM2eGozenljbWJl&utm_source=qr",
      icon: Instagram,
      label: "Instagram",
      value: "@your_saarthii",
      gradient: "from-pink to-lavender",
    },
    {
      href: "https://www.linkedin.com/in/sakshi-george-731992283",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sakshi George",
      gradient: "from-lavender to-pink",
    },
    {
      href: "https://youtube.com/@your_saarthii?si=N5eFs8QqnxHSrSn7",
      icon: Youtube,
      label: "YouTube",
      value: "@your_saarthii",
      gradient: "from-coral to-peach",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-lavender/15 to-transparent blur-3xl" />

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
              Let's <span className="text-gradient-coral">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Ready to start your journey toward emotional clarity? Book a session or send
              me a message.
            </p>
          </motion.div>

          {/* Book a Session — Full Width Card */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden">
              {/* Card header bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 sm:px-10 py-6 border-b border-border/40 bg-secondary/30">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-2xl gradient-coral flex items-center justify-center shadow-lg shadow-coral/20 shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Calendar className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold">Book a Session</h3>
                    <p className="text-sm text-muted-foreground">Fill the form below to get started</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all gap-2 shrink-0"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSftC-WR0TExX_3bgkNKNEmJRjlR7qH3P-eegwuVzftwoeeQaQ/viewform", "_blank")}
                >
                  Open in new tab
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Iframe — tall fixed height, scrollable */}
              <div className="w-full" style={{ height: "720px" }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSftC-WR0TExX_3bgkNKNEmJRjlR7qH3P-eegwuVzftwoeeQaQ/viewform?embedded=true"
                  className="w-full h-full border-0"
                  title="Book a Session Form"
                  style={{ minWidth: "100%" }}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>

          {/* Get in Touch + Send a Message — side by side */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 h-full">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-7">Get in Touch</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <link.icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground font-medium">{link.label}</p>
                        <p className="font-semibold text-sm md:text-base truncate">{link.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 h-full">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-7">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border rounded-xl py-6 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Contact Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border rounded-xl py-6 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border rounded-xl py-6 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Textarea
                    name="message"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-secondary/50 border-border resize-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Button
                    type="submit"
                    className="w-full gradient-coral text-white hover:opacity-90 transition-all py-6 rounded-xl shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 group text-base"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-0.5 transition-transform" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <motion.div 
        className="mt-24 pt-10 border-t border-border/50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-medium">© 2024 Your__Saarthii. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> for your
              healing journey
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

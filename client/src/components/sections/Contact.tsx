import { motion } from "framer-motion";
import { Mail, Twitter, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed max-w-md">
              Whether you have a project in mind, want to collaborate, or just want to say hello, we're always open to new opportunities.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@lonelymountain.labs" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 bg-card border border-border rounded-full group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">hello@lonelymountain.labs</span>
              </a>
              
              <div className="flex gap-4 mt-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-foreground/80">First Name</label>
                      <Input id="first-name" placeholder="John" className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-foreground/80">Last Name</label>
                      <Input id="last-name" placeholder="Doe" className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px] bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

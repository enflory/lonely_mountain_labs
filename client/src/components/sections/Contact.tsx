import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Have a question or idea? Feel free to reach out.
            </p>
            
            <div className="flex justify-center">
              <a href="mailto:hello@lonelymtnlabs.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 bg-card border border-border rounded-full group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">hello@lonelymtnlabs.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

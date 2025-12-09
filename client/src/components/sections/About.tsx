import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Lonely Mountain Labs
            </h2>
            
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Lonely Mountain Labs builds purposeful tools that help people hold onto what matters, whether that’s preserving a life story or simply keeping track of the details that tend to slip away.
              </p>
              <p>
                It’s an outpost for exploring what becomes possible when AI does the heavy lifting, leaving people with more space for what brings meaning and joy. Some projects are experiments, others may grow into something larger, but they’re all driven by the same principle: make the important things easier to keep.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

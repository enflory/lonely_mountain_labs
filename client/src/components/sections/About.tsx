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
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Lonely Mountain Labs serves as the central hub for our diverse portfolio of digital ventures. We believe that great software stands the test of time. Our mission is to design and develop applications that are not only functional but also intuitive, robust, and beautiful. Whether it's internal tooling, open-source contributions, or commercial products, we bring the same level of craft to everything we touch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

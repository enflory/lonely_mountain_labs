import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
            Lonely Mountain Labs
          </h1>
          
          <h2 className="text-lg md:text-xl font-medium tracking-tight text-foreground mb-6 leading-tight">
            <span className="text-foreground">
              Tools that make the important things
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-300% animate-gradient">
              easier to keep.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Lonely Mountain Labs is an outpost experimenting with ways technology can give people more space for what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[160px] text-base" onClick={scrollToAbout}>
              Explore Our Vision
            </Button>
            <Button variant="outline" size="lg" className="min-w-[160px] text-base bg-background/50 backdrop-blur-sm hover:bg-background/80" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button 
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary transition-colors p-2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </motion.div>
    </section>
  );
}

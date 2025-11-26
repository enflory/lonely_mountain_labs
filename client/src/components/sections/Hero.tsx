import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/minimalist_geometric_mountain_wireframe_background.png";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Abstract Mountain Landscape" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-6 border border-secondary/20">
            Innovation from the Summit
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
            Building the future, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
              one peak at a time.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Lonely Mountain Labs is a digital foundry dedicated to crafting robust software solutions and exploring new frontiers in technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[160px] text-base" onClick={scrollToAbout}>
              Explore Our Vision
            </Button>
            <Button variant="outline" size="lg" className="min-w-[160px] text-base bg-white/50 backdrop-blur-sm" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
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

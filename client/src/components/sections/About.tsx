import { motion } from "framer-motion";
import { Mountain, Code2, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: <Mountain className="w-6 h-6 text-secondary" />,
      title: "Foundational Strength",
      description: "We build software with the durability of bedrock, ensuring scalability and reliability for the long haul."
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Crafted Code",
      description: "Every line is considered. We prioritize clean architecture and maintainable patterns over quick fixes."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "Future Focused",
      description: "Always looking toward the horizon, we experiment with emerging technologies to stay ahead of the curve."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Lonely Mountain Labs
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-body">
              Founded on the principles of durability and exploration, Lonely Mountain Labs serves as the central hub for our diverse portfolio of digital ventures. 
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-body">
              We believe that great software, like a mountain, stands the test of time. Our mission is to design and develop applications that are not only functional but also intuitive, robust, and beautiful. Whether it's internal tooling, open-source contributions, or commercial products, we bring the same level of craft to everything we touch.
            </p>
            
            <div className="h-1 w-20 bg-accent rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-xl bg-muted shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground font-body">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

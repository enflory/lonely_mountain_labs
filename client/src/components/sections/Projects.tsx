import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Database, Layout } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Project Aether",
      description: "Next-generation cloud infrastructure optimization tool helping teams reduce compute costs by up to 30% through intelligent resource scheduling.",
      tags: ["Cloud", "AI", "Infrastructure"],
      icon: <Database className="w-10 h-10 text-primary" />,
      status: "Live"
    },
    {
      title: "Streamline API",
      description: "High-throughput data telemetry service providing real-time analytics and processing for high-volume applications.",
      tags: ["API", "Big Data", "Real-time"],
      icon: <Layers className="w-10 h-10 text-accent" />,
      status: "In Development"
    },
    {
      title: "Foundation UI",
      description: "A robust, accessible component library designed for building data-heavy interfaces in challenging network environments.",
      tags: ["React", "UI Kit", "Accessibility"],
      icon: <Layout className="w-10 h-10 text-primary" />,
      status: "Open Source"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Selected Works</h2>
          <p className="text-lg text-muted-foreground font-body">
            A showcase of our current ventures, open-source contributions, and experimental prototypes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group bg-card/50 backdrop-blur-md">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"} className="font-normal">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-body text-base mt-2 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="w-full justify-between group-hover:text-primary hover:bg-primary/5">
                    View Details <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

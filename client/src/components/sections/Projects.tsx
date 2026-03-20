import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Database, Layout, Volume2, Mic } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Hush",
      description: "A lightweight macOS menu bar app that automatically reduces your system volume during Spotify ads and restores it when music resumes. No muting tricks — just a smooth fade that keeps the ads out of your head.",
      icon: <Volume2 className="w-10 h-10 text-primary" />,
      status: "Live",
      link: "https://github.com/enflory/hush"
    },
    {
      title: "Project Legacy",
      description: "AI-powered tools that help everyday writers craft memoirs with professional-grade editorial guidance. A new publishing stack built around authors, not gatekeepers.",
      icon: <Layout className="w-10 h-10 text-accent" />,
      status: "In Development",
      link: null
    },
    {
      title: "Career Interviewer",
      description: "A voice-powered AI interviewer that walks you through a structured career reflection, capturing your experience across six key areas and producing polished written summaries you can use for resumes, bios, or self-reflection.",
      icon: <Mic className="w-10 h-10 text-primary" />,
      status: "In Development",
      link: null
    },
    {
      title: "Giftwise",
      description: "Giftwise helps you stop scrambling for last-minute gift ideas by tracking what you've given and keeping upcoming events organized. It's a simple tool that makes gift-giving thoughtful, stress-free, and impossible to repeat yourself.",
      icon: <Database className="w-10 h-10 text-primary" />,
      status: "Coming Soon",
      link: null
    },
    {
      title: "Particle Life",
      description: "Just a fun one. An interactive artificial life simulation with all the mesmerizing essence of a lava lamp screensaver. Colored particles attract and repel each other, creating beautiful emergent patterns you can watch forever.",
      icon: <Layers className="w-10 h-10 text-primary" />,
      status: "Live",
      link: "https://lonelymtnlabs.com/particle-life"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">In the Lab</h2>
          <p className="text-lg text-muted-foreground font-body">
            A look at what we’re building.
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
                </CardContent>
                {project.link && (
                  <CardFooter className="pt-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group-hover:text-primary hover:bg-primary/5 p-0 h-auto"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center w-full px-4 py-2">
                        Explore <ArrowUpRight className="w-4 h-4 ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

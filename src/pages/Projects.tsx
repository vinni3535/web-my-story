import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a different 
              challenge and learning experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group shadow-card border-0 overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
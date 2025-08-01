import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my work with smooth animations, dark mode support, and optimal performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
      liveUrl: "#home",
      githubUrl: "https://github.com/VedSap/Portfolio-Website",
    },
    {
      title: "Rent Manager",
      description:
        "A modern rental management platform to track tenants, rent payments, and property details. Built with a responsive UI and smooth interactions for property managers and landlords.",
      image:
        "https://imgs.search.brave.com/pZT34HLNBa9jrA9QkswQMGsPMKapVfaMOnQdA4Olze0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aG91c2Utc2VhcmNo/aW5nLWxhbmRpbmct/cGFnZS1jb25jZXB0/XzIzLTIxNDgyOTg3/NDYuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA",
      tech: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS","Vercel","Supabase"],
      liveUrl: "https://rent-app-blush.vercel.app/",
      githubUrl: "https://github.com/VedSap/rent-app",
    },
    {
      title: "Stock Predictor Expert System",
      description:
        "An AI-powered stock prediction expert system built with Python and Flask. It uses machine learning models and rule-based logic to forecast stock movements and guide user decisions with a simple web interface.",
      image:
        "https://imgs.search.brave.com/6xHO7frg2lr97xH43UHcMRCtoLwdQroYFs0h1BwhHno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NTY3YWIxNDYxMDM5/ODY3YTg3NDg2ZDgv/NjZhMmM3N2M1MGVk/N2I5ZmIzNjNhNDQ3/XzY1YjljZmJiNWMy/MjI0ZmNlY2Y2MzIz/MV9wcmVkaWN0LXN0/b2Nrcy13aXRoLWFp/LnBuZw",
      tech: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "Expert System",
        "Machine Learning",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/VedSap/expertsys",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

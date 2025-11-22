import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with payment integration and inventory management",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking creative projects and client engagement",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js"],
    link: "#",
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging and content sharing features",
    tech: ["React", "Firebase", "Redux", "Material-UI"],
    link: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts and alerts",
    tech: ["Vue.js", "OpenWeather API", "Vuex"],
    link: "#",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management platform with team features",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support and SEO optimization",
    tech: ["Gatsby", "GraphQL", "Netlify CMS"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  {project.title}
                  <ExternalLink
                    size={20}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

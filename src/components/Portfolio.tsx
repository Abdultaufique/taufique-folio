import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "IPL Player Performance Prediction System",
      description: "Advanced machine learning model that predicts IPL player performance using historical data, comprehensive data cleaning, feature engineering, and model evaluation techniques.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Data Analysis"],
      image: "bg-gradient-to-br from-accent/20 to-accent/5",
      features: ["Data preprocessing", "Feature engineering", "ML algorithms", "Performance metrics"]
    },
    {
      title: "Sustainable Fertilizer Usage Website",
      description: "Web application providing AI-driven fertilizer recommendations to promote sustainable farming practices with data-driven insights for optimal crop growth.",
      technologies: ["HTML", "CSS", "JavaScript", "AI Integration", "Database"],
      image: "bg-gradient-to-br from-[hsl(var(--accent-secondary))]/20 to-[hsl(var(--accent-secondary))]/5",
      features: ["AI recommendations", "User-friendly interface", "Data analytics", "Sustainability focus"]
    },
    {
      title: "Digital Lock System",
      description: "Python-based secure access control system with authentication mechanisms, providing robust security features for digital access management.",
      technologies: ["Python", "Security", "Authentication", "System Design"],
      image: "bg-gradient-to-br from-accent/20 to-primary/10",
      features: ["Secure authentication", "Access control", "User management", "Logging system"]
    },
    {
      title: "Smart Home Wireless Network Simulation",
      description: "Network simulation using Cisco Packet Tracer demonstrating device connectivity, security protocols, and smart home automation in a wireless environment.",
      technologies: ["Cisco Packet Tracer", "Network Design", "IoT", "Security Protocols"],
      image: "bg-gradient-to-br from-[hsl(var(--accent-secondary))]/20 to-primary/10",
      features: ["Network topology", "Device integration", "Security implementation", "IoT protocols"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">My Work</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] group"
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80"></div>
                <h3 className="font-poppins text-2xl font-bold text-center px-4 relative z-10">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-foreground/80">{project.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm">
                      <span className="text-accent">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="accent" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm" className="border-accent/50 text-accent hover:bg-accent/10">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

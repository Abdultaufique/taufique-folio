import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "IPL Player Performance Prediction",
      description: "Advanced machine learning model that predicts IPL player performance using historical data, feature engineering, and model evaluation techniques.",
      technologies: ["Python", "ML", "Pandas", "Scikit-learn", "Data Analysis"],
      features: ["Data preprocessing", "Feature engineering", "ML algorithms", "Performance metrics"],
      gradient: "from-[hsl(197,71%,73%)]/20 to-[hsl(197,71%,85%)]/10"
    },
    {
      title: "Sustainable Agriculture Platform",
      description: "Web application providing AI-driven fertilizer recommendations for sustainable farming practices and optimal crop growth.",
      technologies: ["HTML", "CSS", "JavaScript", "AI", "Database"],
      features: ["AI recommendations", "User interface", "Data analytics", "Sustainability focus"],
      gradient: "from-[hsl(60,56%,91%)] to-[hsl(197,71%,85%)]/10"
    },
    {
      title: "Digital Security System",
      description: "Python-based access control system with robust authentication mechanisms for enhanced digital security.",
      technologies: ["Python", "Security", "Authentication", "System Design"],
      features: ["Secure authentication", "Access control", "User management", "Logging system"],
      gradient: "from-[hsl(197,71%,73%)]/20 to-[hsl(197,71%,85%)]/10"
    },
    {
      title: "Smart Home Network Simulation",
      description: "Network simulation using Cisco tools demonstrating IoT device connectivity, security protocols, and smart home automation.",
      technologies: ["Cisco", "IoT", "Networking", "Security"],
      features: ["Network design", "IoT integration", "Security protocols", "Automation"],
      gradient: "from-[hsl(60,56%,91%)] to-[hsl(197,71%,85%)]/10"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-fade-in">
          <p className="text-[hsl(197,71%,73%)] font-semibold text-lg mb-2">My Work</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden bg-white border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all hover:shadow-lg group scroll-fade-in">
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-white/50"></div>
                <h3 className="font-poppins text-xl font-bold text-black text-center px-4 relative z-10">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm">
                      <span className="text-[hsl(197,71%,73%)] font-bold">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium bg-[hsl(197,71%,73%)]/10 text-[hsl(197,71%,73%)] border border-[hsl(197,71%,73%)]/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-[hsl(197,71%,73%)] text-black hover:bg-[hsl(197,71%,68%)] font-semibold shadow-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" className="border-2 border-[hsl(197,71%,73%)] text-black hover:bg-[hsl(197,71%,73%)]/10">
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

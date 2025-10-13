import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "IPL Player Performance Prediction",
      description: "Predicts expected runs, generates statistics, and uses ML models trained on IPL data.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "ML"],
      features: [
        "ML models (RF, SVR, XGBoost)",
        "Career stats",
        "Venue/bowling/batting input",
        "Performance prediction",
      ],
      github: "https://github.com/Abdultaufique/IPL-Player-s-Perfromance-Prediction",
      gradient: "from-blue-200/20 to-blue-100/10",
    },
    {
      title: "Sustainable Agriculture Platform",
      description: "AI-powered fertilizer recommendations for sustainable crop growth and user-friendly analytics.",
      technologies: ["HTML", "CSS", "JavaScript", "AI", "Data Analysis"],
      features: [
        "AI fertilizer recs",
        "User dashboard",
        "Data analytics",
        "Sustainability focus",
      ],
      github: "https://github.com/Abdultaufique",
      gradient: "from-yellow-100 to-blue-100/10",
    },
    {
      title: "Digital Security System",
      description: "Python-based access control system with robust authentication for security.",
      technologies: ["Python", "Authentication", "Security", "System Design"],
      features: [
        "Access control",
        "User management",
        "Logging",
        "Secure authentication",
      ],
      github: "https://github.com/Abdultaufique",
      gradient: "from-blue-200/20 to-blue-100/10",
    },
    {
      title: "Smart Home Network Simulation",
      description: "Cisco network simulation demonstrating IoT connectivity, smart home automation, and security.",
      technologies: ["Cisco", "Networking", "IoT", "Security"],
      features: [
        "Network design",
        "IoT integration",
        "Security protocols",
        "Automation",
      ],
      github: "https://github.com/Abdultaufique",
      gradient: "from-yellow-100 to-blue-100/10",
    },
  ];
  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-fade-in">
          <p className="text-blue-600 font-semibold text-lg mb-2">My Work</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">
            Featured Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="overflow-hidden bg-white border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-lg group scroll-fade-in"
            >
              {/* Project Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 bg-white/50"></div>
                <h3 className="font-poppins text-xl font-bold text-black text-center px-4 relative z-10">
                  {project.title}
                </h3>
              </div>
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-500 border border-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-blue-200 text-black hover:bg-blue-300 font-semibold shadow-sm"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
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

import { Card } from "@/components/ui/card";
import { Globe, Brain, Database, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive and dynamic web applications with modern technologies and best practices.",
      features: [
        "Responsive website design",
        "Full-stack web applications",
        "Interactive dashboards",
        "Frontend & backend solutions"
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leveraging artificial intelligence and machine learning to solve complex real-world problems.",
      features: [
        "Predictive modeling",
        "Classification algorithms",
        "Natural language processing",
        "Computer vision applications"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights through advanced analytics and visualization.",
      features: [
        "Data analysis & insights",
        "Database design & optimization",
        "Data visualization",
        "Business intelligence"
      ]
    },
    {
      icon: Lightbulb,
      title: "Technical Consulting",
      description: "Expert guidance on AI integration, project development, and technical solutions.",
      features: [
        "Project consultation",
        "AI integration strategy",
        "Technical guidance",
        "Workflow optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[hsl(60,56%,91%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[hsl(197,71%,73%)] font-semibold text-lg mb-2">What I Offer</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black">My Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={idx}
                className="p-8 bg-white border-2 border-gray-200 hover:border-[hsl(197,71%,73%)] transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group"
              >
                <div className="w-16 h-16 bg-[hsl(197,71%,73%)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-[hsl(197,71%,73%)]" />
                </div>

                <h3 className="font-poppins text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[hsl(197,71%,73%)] mt-1 font-bold">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

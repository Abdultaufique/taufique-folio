import { Card } from "@/components/ui/card";
import { Globe, Brain, Database, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications with modern technologies.",
      features: [
        "Responsive website design",
        "Dynamic web applications",
        "Interactive dashboards",
        "Frontend & Backend development"
      ]
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Leveraging machine learning and AI to solve complex problems.",
      features: [
        "Predictive modeling",
        "Classification algorithms",
        "Natural Language Processing",
        "Computer vision applications"
      ]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient database design and management for optimal data handling.",
      features: [
        "MySQL database design",
        "Data analysis & reporting",
        "Query optimization",
        "Database administration"
      ]
    },
    {
      icon: Lightbulb,
      title: "Project Development & Consultancy",
      description: "End-to-end project development and technical consultation services.",
      features: [
        "Academic & personal projects",
        "Workflow optimization",
        "AI integration guidance",
        "Technical consultation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">What I Offer</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold">My Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isEven = idx % 2 === 0;
            
            return (
              <Card 
                key={idx}
                className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] group hover:-translate-y-2 duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${isEven ? 'bg-accent/10' : 'bg-[hsl(var(--accent-secondary))]/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-8 h-8 ${isEven ? 'text-accent' : 'text-[hsl(var(--accent-secondary))]'}`} />
                </div>

                <h3 className="font-poppins text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-foreground/80">
                      <span className={`${isEven ? 'text-accent' : 'text-[hsl(var(--accent-secondary))]'} mt-1`}>▹</span>
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

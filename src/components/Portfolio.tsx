import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, Workflow, ShoppingCart } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Catalog Management",
      description: "Managed comprehensive product catalog with 500+ SKUs, ensuring data accuracy and optimal product presentation across multiple platforms.",
      icon: ShoppingCart,
      tags: ["Data Entry", "Product Management", "Quality Control"],
      achievements: ["97%+ Accuracy", "500+ SKUs", "Multi-platform"]
    },
    {
      title: "CRM Dashboards & Reports",
      description: "Developed interactive Salesforce CRM dashboards and MIS reports providing actionable insights for business decision-making.",
      icon: BarChart3,
      tags: ["Salesforce", "Analytics", "Reporting"],
      achievements: ["Real-time Insights", "Stakeholder Reports", "Data Visualization"]
    },
    {
      title: "UiPath Automation Workflows",
      description: "Implemented RPA solutions using UiPath to automate repetitive tasks, resulting in significant time and cost savings.",
      icon: Workflow,
      tags: ["Automation", "UiPath", "Process Optimization"],
      achievements: ["9+ hrs/week saved", "Error Reduction", "Scalable Solutions"]
    },
    {
      title: "Data Validation Systems",
      description: "Established robust data validation frameworks ensuring high-quality data across all operational processes.",
      icon: Database,
      tags: ["Quality Assurance", "Data Integrity", "Process Design"],
      achievements: ["97%+ Accuracy", "Error Prevention", "Standard Operating Procedures"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio & Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcase of key projects demonstrating expertise in data operations and process improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <span key={idx} className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-4">Looking for More Details?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent a snapshot of my work. I'd be happy to discuss specific implementations, 
              challenges overcome, and results achieved in greater detail.
            </p>
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full font-medium">
              Available for detailed project discussions
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

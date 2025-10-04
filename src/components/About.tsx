import { Card } from "@/components/ui/card";
import { Award, Target, TrendingUp, Package } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Target,
      value: "97%+",
      label: "Data Accuracy",
      description: "Consistently maintaining high precision in data processing"
    },
    {
      icon: TrendingUp,
      value: "85-90%",
      label: "CSAT Score",
      description: "Customer satisfaction maintained across projects"
    },
    {
      icon: Package,
      value: "500+",
      label: "SKUs Managed",
      description: "E-commerce catalog management experience"
    },
    {
      icon: Award,
      value: "9+ hrs/week",
      label: "Time Saved",
      description: "Through UiPath automation implementation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A results-driven professional specializing in data operations, CRM management, 
              and process optimization. I combine technical expertise with business acumen 
              to deliver measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="font-semibold mb-2">{achievement.label}</div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-2">
            <h3 className="text-2xl font-semibold mb-6 text-center">Professional Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">Core Competencies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Advanced Excel & Google Sheets (Dashboards, Pivot Tables, VLookup)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Salesforce CRM administration and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Process automation using UiPath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Data validation and quality assurance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">Key Strengths</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Exceptional attention to detail and accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Strong analytical and problem-solving skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Effective communication and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Continuous process improvement mindset</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

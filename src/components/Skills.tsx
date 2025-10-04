import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Database, BarChart3, Shield, Workflow, FileText, MessageSquare } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Salesforce CRM", level: 90, icon: Database },
    { name: "Microsoft Excel", level: 95, icon: BarChart3 },
    { name: "Google Sheets", level: 90, icon: FileText },
    { name: "UiPath Automation", level: 85, icon: Workflow },
  ];

  const domainSkills = [
    "Non-Voice Chat Support",
    "Data Validation & Quality Control",
    "Content Moderation",
    "E-commerce Cataloging",
    "MIS Reporting",
    "Process Documentation",
    "Quality Audits",
    "CRM Management"
  ];

  const otherSkills = [
    { name: "Typing Speed", value: "30 WPM @ 90% Accuracy" },
    { name: "Data Entry", value: "High Volume Processing" },
    { name: "Attention to Detail", value: "97%+ Accuracy Rate" },
    { name: "Customer Communication", value: "85-90% CSAT" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit combining technical proficiency with domain expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Technical Tools</h3>
              </div>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Domain Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {domainSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Additional Capabilities</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start justify-between p-4 rounded-lg bg-card border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary font-semibold">{skill.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SunTec India",
      role: "Process Associate",
      period: "Sep 2023 – Present",
      location: "New Delhi, India",
      responsibilities: [
        "Managing CRM operations with 97%+ data accuracy across customer interactions",
        "Creating comprehensive MIS reports and dashboards for stakeholder decision-making",
        "Implementing UiPath automation workflows that save 9+ hours weekly",
        "Conducting quality audits and maintaining 85-90% CSAT ratings",
        "Training team members on best practices and process documentation"
      ]
    },
    {
      company: "eDataIndia",
      role: "E-commerce Executive",
      period: "Aug 2022 – Aug 2023",
      location: "New Delhi, India",
      responsibilities: [
        "Managed catalog for 500+ SKUs with detailed product specifications",
        "Performed data validation and content moderation for e-commerce platforms",
        "Maintained 97%+ accuracy in product data entry and categorization",
        "Collaborated with cross-functional teams to optimize product listings",
        "Developed quality control processes for catalog management"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional journey delivering excellence in operations and data management
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-3 text-foreground/80">Key Responsibilities & Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

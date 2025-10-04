import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.A. Programme",
      institution: "University of Delhi",
      year: "2025",
      description: "Comprehensive undergraduate program with focus on analytical and communication skills"
    }
  ];

  const certifications = [
    {
      title: "National Apprenticeship Certificate",
      issuer: "Data Associate V2, NSQF Level 5",
      year: "2023",
      description: "Government-recognized certification in data operations and management"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic foundation and professional certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/20">
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Expected {edu.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all border-2 hover:border-accent/20">
                  <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                  <p className="text-lg text-accent font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-4 text-center">Continuous Learning</h3>
            <p className="text-center text-muted-foreground">
              Committed to staying updated with the latest tools and technologies in data operations, 
              CRM management, and process automation. Actively pursuing opportunities for professional 
              development and skill enhancement.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aakashverma852787@outlook.com",
      link: "mailto:aakashverma852787@outlook.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aakashverma",
      link: "https://www.linkedin.com/in/aakashverma"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss how I can contribute to your team's success
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-background border-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="font-medium hover:text-primary transition-colors"
                        target={info.label === "LinkedIn" ? "_blank" : undefined}
                        rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always interested in hearing about new opportunities and collaborations
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="gap-2"
                  onClick={() => window.location.href = 'mailto:aakashverma852787@outlook.com'}
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="inline-block p-6 bg-primary/5 border-2 border-primary/20">
              <p className="text-lg font-medium mb-2">Open to Opportunities</p>
              <p className="text-muted-foreground">
                Available for full-time positions and freelance projects
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

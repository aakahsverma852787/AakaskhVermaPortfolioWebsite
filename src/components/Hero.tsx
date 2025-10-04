import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aakash Verma
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            MIS Analyst | CRM Specialist | Data Associate
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Driving accuracy, efficiency, and insight through data.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Detail-oriented professional with 3+ years of experience in non-voice operations, 
            CRM management, MIS reporting, and e-commerce cataloging. Committed to delivering 
            97%+ data accuracy and maintaining 85-90% CSAT ratings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gap-2 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5" />
              Contact Me
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

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
            aria-label="Scroll to content"
          >
            <ArrowDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

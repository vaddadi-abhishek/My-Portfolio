import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-accent/30 rounded-full blur-2xl transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      <div className="text-center space-y-8 animate-fade-in relative z-10 section-container">
        <h1 className="hero-title text-foreground">
          Abhishek V
          <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
            Software Developer
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto">
          Crafting best experiences with code, design, and creativity.
        </p>
        
        <Button 
          onClick={scrollToProjects}
          className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-[var(--radius)] font-medium transition-all duration-300 shadow-subtle hover:shadow-card group"
        >
          Explore My Work
          <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
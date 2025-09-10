import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section-spacing section-container">
      <div className="text-center animate-slide-up">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative">
            <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
            
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              "Master A's blend of technical skill and visual creativity exemplifies 
              next-gen developers. Their work consistently demonstrates innovation, 
              attention to detail, and a deep understanding of both code and design."
            </blockquote>
            
            <div className="mt-8 space-y-2">
              <div className="font-semibold text-foreground">Dr. Sarah Johnson</div>
              <div className="text-muted-foreground">Senior Software Architect & Mentor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
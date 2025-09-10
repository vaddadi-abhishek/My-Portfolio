import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Samsung Prism, Intern",
      organization: "Samsung Prism",
      period: "2022",
      description: "Implemented the spectral clustering algorithm to analyze and group complex data points."
    },
    {
      type: "work",
      title: "AICTE, Intern",
      organization: "AICTE",
      period: "2021",
      description: "Designed and deployed 3 scalable cloud applications using AWS services like EC2, S3, RDS, and VPCs, ensuring high availability and performance."
    },
  ];

  return (
    <section className="section-spacing section-container">
      <div className="space-y-12 animate-slide-up">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  {item.type === "work" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="text-sm text-muted-foreground bg-accent px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>

                <p className="font-medium text-primary">{item.organization}</p>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
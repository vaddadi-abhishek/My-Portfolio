import { Code, ChevronsLeftRightEllipsis, Frame, Database, Settings, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Programming",
      skills: ["C", "Java", "Python", "JavaScript", "Typescript"]
    },
    {
      icon: ChevronsLeftRightEllipsis,
      title: "Web Development",
      skills: ["Html", "CSS", "Bootstrap"]
    },
    {
      icon: Frame,
      title: "Frameworks",
      skills: ["Django", "Hibernate", "Spring Boot", "React JS"]
    },
     {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "PostgresSQL", "Oracle DB"]
    },
    {
      icon: Settings,
      title: "Tools",
      skills: ["Git", "Github"]
    },
    {
      icon: Layers,
      title: "UX/UI",
      skills: ["Figma"]
    }
  ];

  return (
    <section className="section-spacing section-container">
      <div className="space-y-12 animate-slide-up">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit combining technical proficiency with creative vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="card-hover p-6 bg-card border-border text-center space-y-4 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{skill.title}</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  {skill.skills.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
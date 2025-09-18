import portraitImage from "@/assets/photo.jpg";

const About = () => {
  return (
    <section className="section-spacing section-container">
      <div className="grid-asymmetric animate-slide-up">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a recent Computer Science graduate, passionate about software development and problem-solving.
            I specialize in building efficient, scalable, and user-friendly applications by combining strong analytical skills with modern development practices.
            My focus is on creating robust digital solutions that deliver real-world impact through clean code, performance optimization, and reliable system design.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-accent px-4 py-2 rounded-full">
              <span className="text-accent-foreground font-medium">Problem Solver</span>
            </div>
            <div className="bg-accent px-4 py-2 rounded-full">
              <span className="text-accent-foreground font-medium">Creative Thinker</span>
            </div>
            <div className="bg-accent px-4 py-2 rounded-full">
              <span className="text-accent-foreground font-medium">Team Adaptability</span>
            </div>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <div className="relative">
            <img
              src={portraitImage}
              alt="Portrait of Master A"
              className="w-full max-w-sm mx-auto rounded-[var(--radius)] shadow-card object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[var(--radius)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
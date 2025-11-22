const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a passionate creative developer with over 5 years of experience building 
            exceptional digital products. I specialize in creating intuitive, accessible, 
            and visually stunning web applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new design trends, contributing 
            to open-source projects, or capturing moments through photography. I believe 
            in the power of good design to solve real problems and create meaningful 
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

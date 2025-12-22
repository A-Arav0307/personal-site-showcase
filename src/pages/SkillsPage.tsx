import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Webpack", "VS Code"] },
  { category: "Design", items: ["UI/UX", "Responsive Design", "Prototyping", "Accessibility"] },
];

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Skills & Expertise
                </h1>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-card border border-border hover:shadow-[0_0_25px_hsl(var(--accent)/0.1)] hover:border-accent/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-accent">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-muted-foreground flex items-center"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default SkillsPage;

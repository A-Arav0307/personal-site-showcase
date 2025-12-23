import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";

const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", icon: "https://cdn.simpleicons.org/oracle/F80000" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
      { name: "React Router", icon: "https://cdn.simpleicons.org/reactrouter/CA4245" },
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "YOLO", icon: "https://cdn.simpleicons.org/yolo/00FFFF" },
      { name: "Computer Vision", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Machine Learning", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    ]
  },
  {
    category: "Robotics",
    items: [
      { name: "FTC", icon: "https://cdn.simpleicons.org/first/0066B3" },
      { name: "Android Robotics", icon: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "Motion Planning", icon: "https://cdn.simpleicons.org/ros/22314E" },
      { name: "Autonomous Systems", icon: "https://cdn.simpleicons.org/robot/00FFAA" },
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
      { name: "Gradle", icon: "https://cdn.simpleicons.org/gradle/02303A" },
      { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Google OAuth", icon: "https://cdn.simpleicons.org/google/4285F4" },
    ]
  },
];

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <CursorSpotlight />
        <AnimatedBackground variant="grid" />
        <div className="relative z-10">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                  {skills.map((skillGroup, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-card border border-border hover:shadow-[0_0_25px_hsl(var(--accent)/0.1)] hover:border-accent/30 transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-accent">
                        {skillGroup.category}
                      </h3>
                      <ul className="space-y-3">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="text-muted-foreground flex items-center gap-3 group hover:text-foreground transition-colors"
                          >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-secondary/50 group-hover:bg-accent/20 transition-all duration-300">
                              <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="font-medium">{skill.name}</span>
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
      </div>
    </PageTransition>
  );
};

export default SkillsPage;

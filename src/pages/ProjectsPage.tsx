import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import FlipCard from "@/components/FlipCard";

const projects = [
  {
    title: "OwlDash (Hackathon Project)",
    description: "Multi-role ordering and delivery web app with customer ordering, dasher workflows, and admin portal. Features real-time tracking, Google OAuth, and role-based routing for a complete food delivery ecosystem.",
    tech: ["React", "TypeScript", "Tailwind CSS", "React Query", "Vite"],
    link: "#",
  },
  {
    title: "FTC Robot 2025",
    description: `Took initiative and engineered an odometry-based localization system with triple tracking wheel pods, motor shaft encoders, and PID control, increasing consistent pathing from previous years by 88%+, and enabling consistent navigation within ±1–2 cm precision.

Placed top 80 worldwide out of 8000 teams and No. 1 in Mexico out of ~200 teams.

Selected as 1 of 40 teams (out of 8,000+) worldwide (top 0.5%) to compete at the Maryland Technological Invitational Competition, one of the most prestigious robotics competitions in the world.`,
    tech: ["Java", "Android", "Robotics", "Motion Planning"],
    link: "https://github.com/A-Arav0307/roadrunner_quickstart",
  },
  {
    title: "FTC Robot 2024",
    description: "Competition robot control system for FIRST Tech Challenge CENTERSTAGE season with autonomous and teleop modes. Built comprehensive robot control software with sensor integration and real-time decision making.",
    tech: ["Java", "Android Studio", "Gradle", "Robotics"],
    link: "https://github.com/A-Arav0307/ftc_robot_2024",
  },
  {
    title: "Data Science Intern",
    description: `Worked with Professor Enrique Cortés Rello on a research project modeling housing price prediction using the California Housing dataset as a proxy for Guadalajara. Presented findings at multiple conferences with 200+ attendees, laying groundwork for future regional price-estimation research.

Built preprocessing pipelines in Python (Pandas, NumPy) with null-value handling, categorical encoding, and feature engineering.

Evaluated models using MSE, percent error (6.7%), and comparative benchmarks against actual 1990 housing data.

Applied bootstrapping (bagging) and hyperparameter tuning to improve model generalization and reduce overfitting.`,
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Analysis"],
    link: "#",
  },
  {
    title: "CV Model for Lunar Rover",
    description: "YOLO-based object detection system for distinguishing between mallets and hammers with real-time inference. Trained custom YOLO models (v8 & v11) for tool classification with high accuracy.",
    tech: ["Python", "YOLO", "Computer Vision", "PyTorch"],
    link: "https://github.com/A-Arav0307/ML_Rover",
  },
  {
    title: "ASL Detection",
    description: "Computer vision system for recognizing American Sign Language gestures using machine learning classification. Implemented hand tracking and gesture recognition pipeline for real-time ASL translation.",
    tech: ["Python", "OpenCV", "Machine Learning", "Jupyter"],
    link: "https://github.com/A-Arav0307/ASL-project",
  },
];

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <CursorSpotlight />
        <AnimatedBackground variant="aurora" />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <section className="py-24 bg-section-bg-alt">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Featured Projects
                  </h1>
                  <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <FlipCard
                      key={index}
                      title={project.title}
                      tech={project.tech}
                      description={project.description}
                      link={project.link}
                    />
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

export default ProjectsPage;

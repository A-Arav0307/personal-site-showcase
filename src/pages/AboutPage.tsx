import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <CursorSpotlight />
        <AnimatedBackground variant="particles" />
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            <section className="py-24 bg-background">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  {/* Profile Image & Intro */}
                  <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                    {/* Profile Image */}
                    <div className="relative group flex-shrink-0">
                      <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-all duration-300">
                        {/* Placeholder - Replace with your image */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
                          AG
                        </div>
                        {/* Uncomment and use this when you add your image:
                        <img 
                          src="/images/profile/profile.jpg" 
                          alt="Aarav Gupta" 
                          className="w-full h-full object-cover"
                        />
                        */}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        About Me
                      </h1>
                      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 md:mx-0 mx-auto mb-8"></div>
                      <p className="text-lg text-white mb-6 leading-relaxed">
                        CS+OR Freshman at Rice University, interested in the design and optimization
                        of computer systems, such as GPUs, NPUs, and CPUs. I am also interested in
                        machine learning and robotics, with multiple projects on computer vision and
                        autonomous tracking with proven success in competitions.

                      </p>
                      <p className="text-lg text-white leading-relaxed mb-12">
                        Originally from India but brought up in Mexico, I've been surrounded by
                        various cultures my entire life. When I'm not coding, I enjoy hanging out
                        with friends, going on random side quests, working out, and listening to music.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="p-6 rounded-lg bg-card border-2 border-transparent hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">3+</h3>
                      <p className="text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="p-6 rounded-lg bg-card border-2 border-transparent hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">Mentored</h3>
                      <p className="text-muted-foreground">50+ students</p>
                    </div>
                    <div className="p-6 rounded-lg bg-card border-2 border-transparent hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">Research in</h3>
                      <p className="text-muted-foreground">AI/ML, Robotics, and Computer Systems</p>
                    </div>
                  </div>
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

export default AboutPage;

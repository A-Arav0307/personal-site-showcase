import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  About Me
                </h1>
                <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate creative developer with over 5 years of experience building 
                  exceptional digital products. I specialize in creating intuitive, accessible, 
                  and visually stunning web applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  When I'm not coding, you'll find me exploring new design trends, contributing 
                  to open-source projects, or capturing moments through photography. I believe 
                  in the power of good design to solve real problems and create meaningful 
                  experiences.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  <div className="p-6 rounded-lg bg-card border border-border">
                    <h3 className="text-3xl font-bold text-accent mb-2">5+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="p-6 rounded-lg bg-card border border-border">
                    <h3 className="text-3xl font-bold text-accent mb-2">50+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="p-6 rounded-lg bg-card border border-border">
                    <h3 className="text-3xl font-bold text-accent mb-2">30+</h3>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;

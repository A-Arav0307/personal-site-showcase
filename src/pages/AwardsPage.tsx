import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";

const awards = [
    {
        title: "Top 50 FTC Robotics Team Worldwide",
        subtitle: "Placed top 50 out of 8000 teams worldwide in 2025, qualifying for the World Championships.",
        icon: "🏆",
    },
    {
        title: "No. 1 Ranked Team in Mexico",
        subtitle: "Two Years in a Row ('24 and '25)",
        icon: "🥇",
    },
    {
        title: "National Control Award",
        subtitle: "Given to teams that have the best autonomous and teleop control software.",
        icon: "💻",
    },
    {
        title: "Inspire Award",
        subtitle: "Served as a mentor for 3 years (2023-2025) and helped teams improve their skills in competition and qualify for National Championships.",
        icon: "⭐",
    },
];

const AwardsPage = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background relative">
                <CursorSpotlight />
                <AnimatedBackground variant="gradient-orbs" />
                <div className="relative z-10">
                    <Header />
                    <main className="pt-24">
                        <section className="py-24 bg-background">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-16">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        Awards & Achievements
                                    </h1>
                                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    {awards.map((award, index) => (
                                        <div
                                            key={index}
                                            className="group relative p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-2"
                                        >
                                            {/* Award icon */}
                                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {award.icon}
                                            </div>

                                            {/* Award title */}
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                                {award.title}
                                            </h3>

                                            {/* Award subtitle */}
                                            <p className="text-lg text-purple-300">
                                                {award.subtitle}
                                            </p>

                                            {/* Decorative gradient corner */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-lg pointer-events-none"></div>
                                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-lg pointer-events-none"></div>
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

export default AwardsPage;

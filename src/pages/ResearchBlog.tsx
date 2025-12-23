import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";

type ViewLevel = 'categories' | 'entries' | 'detail';

const ResearchBlog = () => {
    const [currentView, setCurrentView] = useState<ViewLevel>('categories');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setCurrentView('entries');
    };

    const handleEntryClick = (entry: string) => {
        setSelectedEntry(entry);
        setCurrentView('detail');
    };

    const handleBack = () => {
        if (currentView === 'detail') {
            setCurrentView('entries');
            setSelectedEntry(null);
        } else if (currentView === 'entries') {
            setCurrentView('categories');
            setSelectedCategory(null);
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-background relative">
                <CursorSpotlight />
                <AnimatedBackground variant="waves" />
                <div className="relative z-10">
                    <Header />
                    <main className="pt-24">
                        <section className="py-24 bg-background">
                            <div className="container mx-auto px-6 max-w-4xl">
                                <div className="text-center mb-16">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        Research Blog
                                    </h1>
                                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
                                    <p className="text-white mt-6">
                                        Documenting my journey in AI/ML research and experimentation
                                    </p>
                                </div>

                                {/* Categories View */}
                                {currentView === 'categories' && (
                                    <div className="grid grid-cols-1 gap-8">
                                        <div
                                            onClick={() => handleCategoryClick('computer-systems')}
                                            className="group cursor-pointer p-12 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-2"
                                        >
                                            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                                                Computer Systems Research
                                            </h2>
                                            <p className="text-center text-white text-lg">
                                                Deep dives into transformers, GPU kernels, and model architecture
                                            </p>
                                            <p className="text-center text-purple-300 mt-4 text-sm">
                                                Click to explore entries →
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Entries View */}
                                {currentView === 'entries' && selectedCategory === 'computer-systems' && (
                                    <div>
                                        <button
                                            onClick={handleBack}
                                            className="mb-8 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                                        >
                                            ← Back to Categories
                                        </button>
                                        <div className="grid grid-cols-1 gap-8">
                                            <div
                                                onClick={() => handleEntryClick('dec-20')}
                                                className="group cursor-pointer p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-2"
                                            >
                                                <p className="text-sm text-purple-400 mb-2">December 20, 2024</p>
                                                <h3 className="text-2xl font-bold text-white mb-3">
                                                    Hugging Face Transformers Deep Dive
                                                </h3>
                                                <p className="text-white">
                                                    Practical exploration of decoder-only transformers using GPT-2 on an RTX 3090 via RunPod
                                                </p>
                                                <p className="text-purple-300 mt-4 text-sm">
                                                    Click to read full entry →
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Detail View */}
                                {currentView === 'detail' && selectedEntry === 'dec-20' && (
                                    <div>
                                        <button
                                            onClick={handleBack}
                                            className="mb-8 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                                        >
                                            ← Back to Entries
                                        </button>
                                        <article className="p-8 rounded-lg bg-card border-2 border-purple-500/30">
                                            <div className="mb-6">
                                                <p className="text-sm text-purple-400 mb-2">December 20, 2024</p>
                                                <h2 className="text-3xl font-bold text-white mb-4">
                                                    Hugging Face Transformers Deep Dive
                                                </h2>
                                                <p className="text-lg text-white leading-relaxed">
                                                    Practical exploration of decoder-only transformers using GPT-2 on an RTX 3090 via RunPod. Focused on understanding model internals through code instrumentation and hands-on experimentation.
                                                </p>
                                            </div>

                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                                        Tools & Setup
                                                    </h3>
                                                    <p className="text-white leading-relaxed">
                                                        Worked on an RTX 3090 via RunPod, used the HuggingFace Transformers repo in developer/edit mode, and executed everything in Python from the terminal (no IDE). Practiced terminal editing workflow with nano, pytest, and vim.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                                        Repo Instrumentation
                                                    </h3>
                                                    <p className="text-white leading-relaxed mb-4">
                                                        Modified existing HuggingFace code to print and inspect shapes and counts of model activations. Added debugging visibility into tensors during forward passes to understand model behavior.
                                                    </p>
                                                    <div className="rounded-lg overflow-hidden border border-purple-500/30">
                                                        <img
                                                            src="/images/research/huggingface-code.png"
                                                            alt="HuggingFace code instrumentation"
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                                        Decoder-Only Model Experiment
                                                    </h3>
                                                    <p className="text-white leading-relaxed mb-4">
                                                        Built and modified a decoder-only transformer workflow for next-token prediction using GPT2LMHeadModel. Configured vocab size/token limits and ran complete tokenization → inference → logits pipeline.
                                                    </p>
                                                    <div className="rounded-lg overflow-hidden border border-purple-500/30">
                                                        <img
                                                            src="/images/research/gpt2-inference.png"
                                                            alt="GPT-2 inference pipeline"
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                                        GPU Kernels
                                                    </h3>
                                                    <p className="text-white leading-relaxed mb-4">
                                                        Utilized GPU kernels indirectly by relying on CUDA-backed operations for token embedding and model execution. Observed performance improvements compared to CPU execution.
                                                    </p>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="rounded-lg overflow-hidden border border-purple-500/30">
                                                            <img
                                                                src="/images/research/logits-output.png"
                                                                alt="Logits output"
                                                                className="w-full h-auto"
                                                            />
                                                        </div>
                                                        <div className="rounded-lg overflow-hidden border border-purple-500/30">
                                                            <img
                                                                src="/images/research/final-output.png"
                                                                alt="Final output"
                                                                className="w-full h-auto"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                                        Key Learnings
                                                    </h3>
                                                    <p className="text-white leading-relaxed whitespace-pre-line">
                                                        • Better understanding of decoder-only transformer architecture
                                                        • Validated models using HuggingFace's pre-trained weights
                                                        • Mastered working with tensor shapes, tokenization, and logits dimensions
                                                        • Created Python virtual environments from scratch
                                                        • Improved terminal tooling proficiency (nano/pytest/vim/pip)
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                                        Next Steps
                                                    </h3>
                                                    <p className="text-white leading-relaxed whitespace-pre-line">
                                                        • Push toward fuller text generation implementations
                                                        • Experiment with larger decoder models (LLaMA, Qwen)
                                                        • Compare GPU vs CPU performance systematically
                                                        • Attempt writing custom GPU kernels for specific operations
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>
            </div>
        </PageTransition>
    );
};

export default ResearchBlog;

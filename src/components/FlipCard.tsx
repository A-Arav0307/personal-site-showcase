import { useState } from 'react';

interface FlipCardProps {
    title: string;
    tech: string[];
    description: string;
    link: string;
}

const FlipCard = ({ title, tech, description, link }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flip-card-container h-[400px] perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front of card */}
                <div className="flip-card-face flip-card-front absolute w-full h-full backface-hidden">
                    <div className="h-full p-8 rounded-lg bg-card border-2 border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col justify-center items-center cursor-pointer">
                        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {title}
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-6 text-center italic">
                            Click to see details
                        </p>
                    </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-face flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="h-full p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] flex flex-col cursor-pointer overflow-y-auto">
                        <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
                        <p className="text-sm text-white leading-relaxed flex-grow whitespace-pre-line">
                            {description}
                        </p>
                        {link !== '#' && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-4 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                            >
                                View on GitHub →
                            </a>
                        )}
                        <p className="text-xs text-muted-foreground mt-4 text-center italic">
                            Click to flip back
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;

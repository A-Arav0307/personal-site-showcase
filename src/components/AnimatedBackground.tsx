import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
    variant: 'gradient-orbs' | 'particles' | 'waves' | 'grid' | 'aurora' | 'bubbles';
}

const AnimatedBackground = ({ variant }: AnimatedBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to full document height
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            // Get the full scrollable height
            const fullHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            canvas.height = fullHeight;
        };

        setCanvasSize();

        // Recalculate after component mount to capture full rendered height
        setTimeout(setCanvasSize, 100);

        // Update canvas size on window resize and scroll
        window.addEventListener('resize', setCanvasSize);
        window.addEventListener('scroll', setCanvasSize);

        // Also update when content changes (for dynamic content)
        const resizeObserver = new ResizeObserver(setCanvasSize);
        resizeObserver.observe(document.body);

        let animationFrameId: number;

        // Gradient Orbs Animation
        if (variant === 'gradient-orbs') {
            const orbs: { x: number; y: number; radius: number; dx: number; dy: number; hue: number }[] = [];
            for (let i = 0; i < 5; i++) {
                orbs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 150 + 100,
                    dx: (Math.random() - 0.5) * 0.5,
                    dy: (Math.random() - 0.5) * 0.5,
                    hue: Math.random() * 360,
                });
            }

            const animate = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                orbs.forEach((orb) => {
                    orb.x += orb.dx;
                    orb.y += orb.dy;

                    if (orb.x < 0 || orb.x > canvas.width) orb.dx *= -1;
                    if (orb.y < 0 || orb.y > canvas.height) orb.dy *= -1;

                    const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
                    gradient.addColorStop(0, `hsla(${orb.hue}, 70%, 60%, 0.3)`);
                    gradient.addColorStop(1, `hsla(${orb.hue}, 70%, 60%, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    orb.hue = (orb.hue + 0.2) % 360;
                });

                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        }

        // Particles Animation
        if (variant === 'particles') {
            const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                });
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle) => {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
                    ctx.fill();
                });

                // Draw lines between nearby particles
                particles.forEach((p1, i) => {
                    particles.slice(i + 1).forEach((p2) => {
                        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    });
                });

                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        }

        // Waves Animation
        if (variant === 'waves') {
            let time = 0;
            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < 3; i++) {
                    ctx.beginPath();
                    ctx.moveTo(0, canvas.height / 2);

                    for (let x = 0; x < canvas.width; x++) {
                        const y =
                            canvas.height / 2 +
                            Math.sin((x + time * 2 + i * 100) * 0.01) * 50 * (i + 1);
                        ctx.lineTo(x, y);
                    }

                    ctx.strokeStyle = `hsla(${220 + i * 20}, 70%, 60%, ${0.3 - i * 0.1})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }

                time++;
                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        }

        // Grid Animation
        if (variant === 'grid') {
            let time = 0;
            const gridSize = 50;
            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (let x = 0; x < canvas.width; x += gridSize) {
                    for (let y = 0; y < canvas.height; y += gridSize) {
                        const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
                        const wave = Math.sin(distance * 0.02 - time * 0.05) * 10;

                        ctx.strokeStyle = `hsla(280, 70%, 60%, ${0.3 + wave * 0.02})`;
                        ctx.lineWidth = 1;
                        ctx.strokeRect(x, y + wave, gridSize, gridSize);
                    }
                }

                time++;
                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        }

        // Aurora Animation
        if (variant === 'aurora') {
            let time = 0;
            const animate = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    for (let x = 0; x < canvas.width; x += 10) {
                        const y =
                            canvas.height / 3 +
                            Math.sin((x + time * 3 + i * 200) * 0.005) * 100 +
                            i * 40;
                        if (x === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }
                    ctx.strokeStyle = `hsla(${160 + i * 30}, 70%, 60%, 0.2)`;
                    ctx.lineWidth = 40;
                    ctx.stroke();
                }

                time++;
                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        }

        // Bubbles Animation
        if (variant === 'bubbles') {
            const bubbles: { x: number; y: number; radius: number; speed: number; hue: number }[] = [];
            for (let i = 0; i < 20; i++) {
                bubbles.push({
                    x: Math.random() * canvas.width,
                    y: canvas.height + Math.random() * 100,
                    radius: Math.random() * 40 + 20,
                    speed: Math.random() * 1 + 0.5,
                    hue: Math.random() * 60 + 180,
                });
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                bubbles.forEach((bubble) => {
                    bubble.y -= bubble.speed;

                    if (bubble.y + bubble.radius < 0) {
                        bubble.y = canvas.height + bubble.radius;
                        bubble.x = Math.random() * canvas.width;
                    }

                    const gradient = ctx.createRadialGradient(
                        bubble.x - bubble.radius * 0.3,
                        bubble.y - bubble.radius * 0.3,
                        0,
                        bubble.x,
                        bubble.y,
                        bubble.radius
                    );
                    gradient.addColorStop(0, `hsla(${bubble.hue}, 70%, 80%, 0.3)`);
                    gradient.addColorStop(0.5, `hsla(${bubble.hue}, 70%, 60%, 0.2)`);
                    gradient.addColorStop(1, `hsla(${bubble.hue}, 70%, 40%, 0.1)`);

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
                    ctx.fill();

                    // Add bubble shine
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                    ctx.beginPath();
                    ctx.arc(bubble.x - bubble.radius * 0.3, bubble.y - bubble.radius * 0.3, bubble.radius * 0.2, 0, Math.PI * 2);
                    ctx.fill();
                });

                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        }

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            window.removeEventListener('scroll', setCanvasSize);
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [variant]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full pointer-events-none opacity-40"
            style={{ zIndex: 0, height: '100%' }}
        />
    );
};

export default AnimatedBackground;

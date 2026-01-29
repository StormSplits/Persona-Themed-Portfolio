"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, textReveal } from "@/lib/animations";
import Button from "./Button";

interface HeroProps {
    name?: string;
    title?: string;
    tagline?: string;
}

export default function Hero({
    name = "EZAZ SHAIKH",
    title = "Full Stack Game Designer",
    tagline = "Driven by imagination, and powered by iteration.",
}: HeroProps) {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-diagonal">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large diagonal line */}
                <div
                    className="absolute top-0 right-0 w-[200%] h-[300px] bg-crimson/10"
                    style={{ transform: "rotate(-12deg) translateY(-50%)" }}
                />

                {/* Vertical accent */}
                <div className="absolute left-16 top-0 bottom-0 w-1 bg-crimson/50" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #E73A3A 1px, transparent 1px),
              linear-gradient(to bottom, #E73A3A 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {/* Name - Massive Display */}
                <motion.div className="overflow-hidden mb-4" variants={fadeUp}>
                    <motion.h1
                        className="font-display text-[12vw] md:text-[10vw] leading-none text-cream"
                        style={{ textShadow: "8px 8px 0px #E73A3A" }}
                    >
                        {name}
                    </motion.h1>
                </motion.div>

                {/* Title Panel */}
                <motion.div
                    className="inline-block mb-8"
                    variants={fadeUp}
                >
                    <div
                        className="bg-crimson px-8 py-4 border-4 border-ink"
                        style={{ transform: "skewX(-6deg)" }}
                    >
                        <span
                            className="font-display text-2xl md:text-4xl text-cream block"
                            style={{ transform: "skewX(6deg)" }}
                        >
                            {title}
                        </span>
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="text-xl md:text-2xl text-cream/80 max-w-2xl mb-12"
                    variants={fadeUp}
                >
                    {tagline}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-wrap gap-4"
                    variants={fadeUp}
                >
                    <Button href="#about" variant="primary" size="lg">
                        Learn More
                    </Button>
                    <Button href="/games" variant="outline" size="lg">
                        View Work
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="font-display text-sm text-cream/50 tracking-widest">
                        SCROLL
                    </span>
                    <div className="w-0.5 h-12 bg-crimson" />
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

// Sample breakdowns data - Replace with your actual content
const breakdowns = [
    {
        id: 1,
        title: "Hollow Knight's Metroidvania Flow",
        game: "Hollow Knight",
        type: "Analysis",
        excerpt:
            "Examining how Team Cherry uses ability gating, environmental storytelling, and subtle guidance to create a cohesive exploration experience.",
        sections: [
            "Map Design Philosophy",
            "Ability Gates & Progression",
            "Environmental Storytelling",
            "Combat Pacing",
        ],
    },
    {
        id: 2,
        title: "Hades' Roguelike Progression",
        game: "Hades",
        type: "Deep Dive",
        excerpt:
            "Breaking down Supergiant's masterful blend of narrative advancement with roguelike mechanics and permanent progression.",
        sections: [
            "Run Structure",
            "Meta Progression",
            "Narrative Integration",
            "Mirror of Night Analysis",
        ],
    },
    {
        id: 3,
        title: "Celeste's Difficulty Curve",
        game: "Celeste",
        type: "UX Critique",
        excerpt:
            "How Matt Makes Games nailed accessibility without compromising challenge, and what we can learn about difficulty design.",
        sections: [
            "Teaching Through Levels",
            "Assist Mode Philosophy",
            "Challenge Rooms",
            "Emotional Pacing",
        ],
    },
];

export default function BreakdownsPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="font-display text-crimson text-xl tracking-widest">
                        ANALYSIS
                    </span>
                    <h1 className="font-display text-7xl md:text-9xl text-cream mt-2">
                        GAME BREAKDOWNS
                    </h1>
                    <div className="w-32 h-1 bg-crimson mt-6" />
                    <p className="text-cream/70 text-xl mt-6 max-w-2xl">
                        Deep dives into game design decisions, mechanics analysis,
                        and UX critiques of notable titles.
                    </p>
                </motion.div>

                {/* Breakdowns List */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-12"
                >
                    {breakdowns.map((breakdown, index) => (
                        <motion.article
                            key={breakdown.id}
                            variants={fadeUp}
                            className="group relative"
                        >
                            {/* Number */}
                            <div className="absolute -left-4 md:-left-16 top-0 font-display text-8xl text-crimson/20">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Content */}
                            <div className="relative bg-ink-light border-l-4 border-crimson p-8 md:p-12 ml-8 md:ml-0">
                                {/* Meta */}
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <span
                                        className="bg-crimson px-4 py-1 font-display text-sm text-cream"
                                        style={{ transform: "skewX(-6deg)" }}
                                    >
                                        <span style={{ transform: "skewX(6deg)", display: "inline-block" }}>
                                            {breakdown.type}
                                        </span>
                                    </span>
                                    <span className="text-cream/50 font-display">
                                        {breakdown.game}
                                    </span>
                                </div>

                                {/* Title */}
                                <a href="#">
                                    <h2 className="font-display text-4xl md:text-5xl text-cream mb-4 group-hover:text-crimson transition-colors cursor-pointer">
                                        {breakdown.title}
                                    </h2>
                                </a>

                                {/* Excerpt */}
                                <p className="text-cream/70 text-lg mb-6 max-w-3xl">
                                    {breakdown.excerpt}
                                </p>

                                {/* Sections Preview */}
                                <div className="mb-6">
                                    <h4 className="font-display text-crimson text-lg mb-3">
                                        SECTIONS
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {breakdown.sections.map((section) => (
                                            <span
                                                key={section}
                                                className="px-4 py-2 bg-ink border border-cream/20 text-cream/70 text-sm"
                                            >
                                                {section}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Read Link */}
                                <motion.a
                                    href="#"
                                    className="inline-flex items-center gap-3 font-display text-xl text-crimson group/link"
                                    whileHover={{ x: 10 }}
                                >
                                    <span>READ ANALYSIS</span>
                                    <span className="text-2xl group-hover/link:translate-x-2 transition-transform">
                                        →
                                    </span>
                                </motion.a>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-crimson" />
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div
                        className="inline-block bg-crimson p-8 md:p-12 border-4 border-ink"
                        style={{ transform: "skewX(-3deg)" }}
                    >
                        <div style={{ transform: "skewX(3deg)" }}>
                            <h3 className="font-display text-3xl md:text-4xl text-cream mb-4">
                                WANT MORE ANALYSIS?
                            </h3>
                            <p className="text-cream/80 mb-6 max-w-lg mx-auto">
                                I regularly share design thoughts and breakdowns.
                                Follow along for more insights.
                            </p>
                            <motion.a
                                href="https://www.linkedin.com/in/ezazxshaikh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-cream text-ink px-8 py-4 font-display text-xl border-4 border-ink hover:bg-ink hover:text-cream transition-colors"
                                initial={{ skewX: -6 }}
                                whileHover={{
                                    skewX: 0,
                                    x: -4,
                                    y: -4,
                                    boxShadow: "8px 8px 0px #E73A3A"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
                            >
                                <span style={{ display: "inline-block", transform: "skewX(6deg)" }}>
                                    CONNECT ON LINKEDIN
                                </span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

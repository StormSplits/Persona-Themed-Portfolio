"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameCard from "@/components/GameCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

// Sample games data - Replace with your actual games
const games = [
    {
        id: 1,
        title: "Project Alpha",
        platform: "PC / Console",
        role: "Lead Game Designer",
        studio: "Sample Studio",
        year: "2024",
        description:
            "A narrative-driven action RPG with deep progression systems and meaningful player choices.",
        tags: ["Systems Design", "Narrative", "UX"],
        trailer: null,
        tools: ["Unity", "Figma", "Notion"],
    },
    {
        id: 2,
        title: "Velocity Rush",
        platform: "Mobile",
        role: "Game Designer",
        studio: "Indie Project",
        year: "2023",
        description:
            "Fast-paced endless runner with innovative swipe mechanics and procedural level generation.",
        tags: ["Mobile UX", "Monetization", "Level Design"],
        trailer: null,
        tools: ["Unity", "Analytics", "A/B Testing"],
    },
    {
        id: 3,
        title: "Tactical Minds",
        platform: "PC",
        role: "Systems Designer",
        studio: "Strategy Games Inc",
        year: "2023",
        description:
            "Turn-based strategy game with complex unit interactions and emergent gameplay.",
        tags: ["Systems", "Balance", "AI"],
        trailer: null,
        tools: ["Unreal", "Excel", "Custom Tools"],
    },
    {
        id: 4,
        title: "Echoes",
        platform: "PC / Console",
        role: "UX Designer",
        studio: "Narrative Studio",
        year: "2022",
        description:
            "Atmospheric puzzle game exploring themes of memory and loss through environmental storytelling.",
        tags: ["UX", "Puzzle Design", "Narrative"],
        trailer: null,
        tools: ["Unity", "Figma", "Miro"],
    },
];

export default function GamesPage() {
    const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);

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
                        PORTFOLIO
                    </span>
                    <h1 className="font-display text-7xl md:text-9xl text-cream mt-2">
                        RELEASED GAMES
                    </h1>
                    <div className="w-32 h-1 bg-crimson mt-6" />
                    <p className="text-cream/70 text-xl mt-6 max-w-2xl">
                        A selection of shipped projects showcasing systems design,
                        UX thinking, and collaborative development.
                    </p>
                </motion.div>

                {/* Games Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid md:grid-cols-2 gap-8"
                >
                    {games.map((game) => (
                        <motion.div key={game.id} variants={fadeUp}>
                            <GameCard
                                title={game.title}
                                platform={game.platform}
                                role={game.role}
                                tags={game.tags}
                                onClick={() => setSelectedGame(game)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Game Detail Modal */}
            <AnimatePresence>
                {selectedGame && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-ink/90 z-40"
                            onClick={() => setSelectedGame(null)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, skewX: -6 }}
                            animate={{ opacity: 1, x: 0, skewX: 0 }}
                            exit={{ opacity: 0, x: 100, skewX: 6 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-ink-light border-l-4 border-crimson z-50 overflow-y-auto"
                        >
                            <div className="p-8 md:p-12">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedGame(null)}
                                    className="absolute top-6 right-6 w-12 h-12 bg-crimson flex items-center justify-center font-display text-2xl text-cream border-2 border-ink hover:bg-crimson-dark transition-colors"
                                    style={{ transform: "skewX(-6deg)" }}
                                >
                                    <span style={{ transform: "skewX(6deg)" }}>✕</span>
                                </button>

                                {/* Game Info */}
                                <div className="mb-8">
                                    <span className="font-display text-crimson text-lg">
                                        {selectedGame.studio} — {selectedGame.year}
                                    </span>
                                    <h2 className="font-display text-5xl md:text-6xl text-cream mt-2">
                                        {selectedGame.title}
                                    </h2>
                                </div>

                                {/* Platform & Role */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div
                                        className="bg-crimson px-4 py-2 border-2 border-ink"
                                        style={{ transform: "skewX(-6deg)" }}
                                    >
                                        <span
                                            className="font-display text-cream"
                                            style={{ transform: "skewX(6deg)", display: "inline-block" }}
                                        >
                                            {selectedGame.platform}
                                        </span>
                                    </div>
                                    <div
                                        className="bg-cream px-4 py-2 border-2 border-ink"
                                        style={{ transform: "skewX(-6deg)" }}
                                    >
                                        <span
                                            className="font-display text-ink"
                                            style={{ transform: "skewX(6deg)", display: "inline-block" }}
                                        >
                                            {selectedGame.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="font-display text-2xl text-crimson mb-4">
                                        OVERVIEW
                                    </h3>
                                    <p className="text-cream/80 text-lg leading-relaxed">
                                        {selectedGame.description}
                                    </p>
                                </div>

                                {/* Contributions */}
                                <div className="mb-8">
                                    <h3 className="font-display text-2xl text-crimson mb-4">
                                        CONTRIBUTIONS
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedGame.tags.map((tag) => (
                                            <span key={tag} className="tag">
                                                <span className="tag-text">{tag}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div className="mb-8">
                                    <h3 className="font-display text-2xl text-crimson mb-4">
                                        TOOLS USED
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {selectedGame.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="text-cream/60 font-display text-lg"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Trailer Placeholder */}
                                <div className="bg-ink border-2 border-cream/20 aspect-video flex items-center justify-center">
                                    <span className="font-display text-2xl text-cream/30">
                                        TRAILER / GAMEPLAY
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameCard from "@/components/GameCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

// Type definitions
interface KeyDecision {
    decision: string;
    tradeoff: string;
}

interface Screenshot {
    image: string;
    caption: string;
}

interface Game {
    id: number;
    title: string;
    platform: string;
    role: string;
    studio: string;
    year: string;
    description: string;
    tags: string[];
    youtubeId: string | null;
    tools: string[];
    keyDecisions: KeyDecision[];
    screenshots: Screenshot[];
}

// Sample games data - Replace with your actual games
const games: Game[] = [
    {
        id: 1,
        title: "Core Trials",
        platform: "PC",
        role: "Lead Game Designer",
        studio: "Ohilo Games",
        year: "2025",
        description:
            "Core Trials is a motion-based, pixel-art bullet hell roguelike you play with just your webcam. Move your body to control the core, dodge deadly patterns, strike back at the masters, and survive intense trials. Immerse yourself in high-octane action and unleash the true power of your core!",
        tags: ["Systems Design", "Combat Design", "Level Design", "Marketing", "UI/UX", "Sound Design", "Technical Setup"],
        youtubeId: "N1biXvbHSZM",
        tools: ["Unity", "Figma", "VS Code", "DOTween", "Premiere Pro", "Photoshop", "Xcode", "Steamworks"],
        keyDecisions: [
            {
                decision: "Roguelike over Linear Progression",
                tradeoff: "Linear progression felt repetitive and restrictive. A roguelike structure introduced randomness, making every attempt feel meaningful and different."
            },
            {
                decision: "Environment as the Enemy",
                tradeoff: "To break combat monotony, a new level type was introduced where challenge came from navigating hazardous environments rather than fighting enemies."
            },
            {
                decision: "Healing as a Choice",
                tradeoff: "Healing was limited to a single optional level per run, giving players control over when to recover while introducing a new motion-based collection challenge."
            },
            {
                decision: "Optional Tutorial",
                tradeoff: "Even though the control scheme is new, the tutorial was made optional to respect player agency. Players can jump straight into the experience and learn by doing at their own pace."
            },
        ],
        screenshots: [
            {
                image: "/Screenshots/Core Trials/CT1.webp",
                caption: "Leveraged player psychology on Reddit, generating 11k+ upvotes, converting 25% into wishlists with 70% conversion, and gaining features on 80LV; streamed by top creators like Sodapoppin."
            },
            {
                image: "/Screenshots/Core Trials/CT2.webp",
                caption: "Designed the UI flow before creating wireframes to ensure intuitive navigation."
            },
            {
                image: "/Screenshots/Core Trials/CT3.webp",
                caption: "Developed the first draft wireframes for the game's UI."
            },
            {
                image: "/Screenshots/Core Trials/CT4.webp",
                caption: "Prototyped and iterated on a core combat system variant to test mechanics."
            },
            {
                image: "/Screenshots/Core Trials/CT5.webp",
                caption: "Prototyped and iterated on a core combat system variant to test mechanics."
            },
            {
                image: "/Screenshots/Core Trials/CT6.webp",
                caption: "Rapid prototyping and iteration on a core ability idea, generating data that directly informed one of the shipped abilities."
            },
            {
                image: "/Screenshots/Core Trials/CT7.webp",
                caption: "Created an environmental traversal level prototype to evaluate feel and engagement."
            },
            {
                image: "/Screenshots/Core Trials/CT8.webp",
                caption: "Built dialogue sheets that bridge narrative design and gameplay."
            },
            {
                image: "/Screenshots/Core Trials/CT9.webp",
                caption: "Built a localization tree directly exportable to Unity for seamless multilingual support."
            },
        ],
    },
    {
        id: 2,
        title: "Drift Up",
        platform: "Android",
        role: "Game Designer",
        studio: "Ohilo Games",
        year: "2024",
        description:
            "Motion-controlled puzzle game where players must safeguard a delicate balloon from numerous obstacles using a protector shield.",
        tags: ["Puzzle Design", "UX", "Balance"],
        youtubeId: "4DlSo3C8KzA",
        tools: ["Unity", "Figma", "UI/UX Toolkit", "VS Code", "DOTween", "Photoshop"],
        keyDecisions: [
            {
                decision: "Chose and Evolved a Motion-Friendly Core",
                tradeoff: "Rise Up provided an intuitive foundation for motion controls, which was intentionally expanded with power-ups and events to address depth and retention."
            },
            {
                decision: "Expanding Playstyles with Power-Ups",
                tradeoff: "Power-ups were introduced as optional tools to let players approach obstacles in different ways. They add variety and make high-intensity moments more fun."
            },
            {
                decision: "Gameplay Over Interface",
                tradeoff: "UI was intentionally kept minimal to reduce visual noise and keep focus on gameplay and puzzle-solving rather than on-screen elements."
            },
        ],
        screenshots: [
            {
                image: "/Screenshots/Drift Up/DU1.webp",
                caption: "Iterated with the UI designer to finalize and implement the game scene UI."
            },
            {
                image: "/Screenshots/Drift Up/DU2.webp",
                caption: "Designed a level difficulty benchmarking system to generate balanced level sets up to level 100."
            },
        ],
    },
    {
        id: 3,
        title: "Move Match 3D",
        platform: "Android / iOS / WebGL",
        role: "Game Designer",
        studio: "Ohilo Games",
        year: "2024",
        description:
            "First of its kind motion-based match-3D game that has you swaying and swerving to collect falling items before the timer ends.",
        tags: ["Puzzle Design", "Level Design", "Sound Design", "LiveOps", "Technical Setup", "UI"],
        youtubeId: "35pZw8WeeFE",
        tools: ["Unity", "Figma", "UI/UX", "UI Toolkit", "VS Code", "DOTween"],
        keyDecisions: [
            {
                decision: "Core Loop Around Motion",
                tradeoff: "Tap-based interactions were replaced after prototyping proved them incompatible with motion. The final loop used falling items and physical collection to fully commit gameplay to player movement."
            },
            {
                decision: "Skill Over Randomness",
                tradeoff: "Spawn and difficulty logic were tuned so three-star completion was always achievable through skill, preventing frustration caused by time-based randomness."
            },
            {
                decision: "UI Toolkit for Scalability",
                tradeoff: "We chose Unity UI Toolkit over UGUI to support scalable UI and animation systems that reduced UI development time by 30%."
            },
        ],
        screenshots: [
            {
                image: "/Screenshots/Move Match 3D/MM3D1.webp",
                caption: "Collaborated with the UI designer to define the game’s UI and color theme."
            },
            {
                image: "/Screenshots/Move Match 3D/MM3D2.webp",
                caption: "Created and implemented juicy UI effects for power-ups that are optimized for clarity and long-range visibility."
            },
            {
                image: "/Screenshots/Move Match 3D/MM3D3.webp",
                caption: "Authored LiveOps documentation outlining flows and examples for fluid implementation."
            },
            {
                image: "/Screenshots/Move Match 3D/MM3D4.webp",
                caption: "Collaborated with the UI designer to define the game’s UI and color theme, ensuring clarity, simplicity, and visual appeal."
            },
            {
                image: "/Screenshots/Move Match 3D/MM3D5.webp",
                caption: "Rapidly prototyped and contributed 20+ obstacle sets, collaborating alongside the design team to expand gameplay variety."
            },
        ],
    },
    // {
    //     id: 4,
    //     title: "Echoes",
    //     platform: "PC / Console",
    //     role: "UX Designer",
    //     studio: "Narrative Studio",
    //     year: "2022",
    //     description:
    //         "Atmospheric puzzle game exploring themes of memory and loss through environmental storytelling.",
    //     tags: ["UX", "Puzzle Design", "Narrative"],
    //     trailer: null,
    //     tools: ["Unity", "Figma", "Miro"],
    //     keyDecisions: [
    //         {
    //             decision: "Zero tutorial text - all learning through environmental cues",
    //             tradeoff: "10% of players struggled initially but 95% reported higher immersion"
    //         },
    //         {
    //             decision: "Puzzles tied to narrative themes rather than abstract logic",
    //             tradeoff: "Harder to design but emotional resonance increased completion rate by 35%"
    //         },
    //         {
    //             decision: "Implemented subtle hint system triggered by player stillness",
    //             tradeoff: "Maintains immersion while preventing frustration - average stuck time reduced 50%"
    //         },
    //         {
    //             decision: "No fail states - only forward progress",
    //             tradeoff: "Accessible to non-gamers; some hardcore players wanted more challenge"
    //         },
    //     ],
    //     screenshots: [
    //         {
    //             image: "/screenshots/echoes-puzzle.jpg",
    //             caption: "Memory fragment puzzle - visual language teaches mechanics without words"
    //         },
    //         {
    //             image: "/screenshots/echoes-environment.jpg",
    //             caption: "Environmental storytelling: room details reveal character backstory organically"
    //         },
    //     ],
    // },
];

export default function GamesPage() {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

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
                        SHIPPED TITLES
                    </h1>
                    <div className="w-32 h-1 bg-crimson mt-6" />
                    <p className="text-cream/70 text-xl mt-6 max-w-2xl">
                        Games in the wild, shaped by design decisions, iteration, and player behavior.
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
                                youtubeId={game.youtubeId || undefined}
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

                                {/* Trailer */}
                                {selectedGame.youtubeId && (
                                    <div className="mb-8">
                                        <h3 className="font-display text-2xl text-crimson mb-4">
                                            TRAILER
                                        </h3>
                                        <div className="aspect-video border-2 border-cream/20 overflow-hidden">
                                            <iframe
                                                src={`https://www.youtube-nocookie.com/embed/${selectedGame.youtubeId}?modestbranding=1&rel=0&iv_load_policy=3&disablekb=0&fs=1`}
                                                title={`${selectedGame.title} Trailer`}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                )}

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

                                {/* Key Design Decisions */}
                                {selectedGame.keyDecisions && selectedGame.keyDecisions.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="font-display text-2xl text-crimson mb-4">
                                            KEY DESIGN DECISIONS
                                        </h3>
                                        <div className="space-y-4">
                                            {selectedGame.keyDecisions.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="relative bg-ink border-l-4 border-crimson p-4"
                                                    style={{ transform: "skewX(-2deg)" }}
                                                >
                                                    <div style={{ transform: "skewX(2deg)" }}>
                                                        <div className="flex items-start gap-3 mb-2">
                                                            <span className="font-display text-crimson text-xl flex-shrink-0">
                                                                {String(index + 1).padStart(2, '0')}
                                                            </span>
                                                            <p className="text-cream font-medium leading-tight">
                                                                {item.decision}
                                                            </p>
                                                        </div>
                                                        <div className="ml-9 flex items-start gap-2">
                                                            <span className="text-crimson/80 text-sm">↳</span>
                                                            <p className="text-cream/60 text-sm italic">
                                                                {item.tradeoff}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Screenshots with Commentary */}
                                {selectedGame.screenshots && selectedGame.screenshots.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="font-display text-2xl text-crimson mb-4">
                                            SCREENSHOTS
                                        </h3>
                                        <div className="space-y-6">
                                            {selectedGame.screenshots.map((screenshot, index) => (
                                                <div key={index} className="group">
                                                    {/* Image Container */}
                                                    <div
                                                        className="relative aspect-video bg-ink-lighter border-2 border-cream/20 overflow-hidden mb-3"
                                                        style={{ transform: "skewX(-3deg)" }}
                                                    >
                                                        <img
                                                            src={screenshot.image}
                                                            alt={screenshot.caption}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                            style={{ transform: "skewX(3deg) scale(1.1)" }}
                                                        />
                                                        {/* Hover accent */}
                                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-crimson group-hover:w-full transition-all duration-300" />
                                                    </div>
                                                    {/* Caption */}
                                                    <div className="flex items-start gap-3 pl-2">
                                                        <span className="text-crimson font-display text-lg flex-shrink-0">▸</span>
                                                        <p className="text-cream/70 text-sm leading-relaxed">
                                                            {screenshot.caption}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

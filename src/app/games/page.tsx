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
    trailer: string | null;
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
        trailer: null,
        tools: ["Unity", "Figma", "VS Code", "DOTween", "Premiere Pro", "Photoshop", "Xcode", "Steamworks"],
        keyDecisions: [
            {
                decision: "Implemented a branching dialogue system with 3-tier consequence tracking",
                tradeoff: "Increased dev time by 40% but resulted in 85% higher player engagement with story content"
            },
            {
                decision: "Chose real-time combat over turn-based despite RPG genre",
                tradeoff: "Lost some tactical depth but gained mass-market accessibility and faster pacing"
            },
            {
                decision: "Limited skill tree to 30 nodes instead of 100+",
                tradeoff: "Each choice feels more impactful; reduced analysis paralysis in playtests by 60%"
            },
        ],
        screenshots: [
            {
                image: "/screenshots/alpha-combat.jpg",
                caption: "Combat UI iteration #7 - Reduced HUD clutter by 40% while maintaining all critical info"
            },
            {
                image: "/screenshots/alpha-dialogue.jpg",
                caption: "Dialogue wheel showing consequence indicators - subtle but effective player guidance"
            },
        ],
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
        keyDecisions: [
            {
                decision: "One-finger controls only - no multi-touch gestures",
                tradeoff: "Simplified onboarding; 25% higher D1 retention vs. competitors with complex controls"
            },
            {
                decision: "Procedural generation with hand-crafted 'anchor' segments",
                tradeoff: "Best of both worlds - infinite replayability with guaranteed quality moments"
            },
            {
                decision: "Rewarded ads over forced interruption ads",
                tradeoff: "30% less ad revenue but 4.5★ rating vs industry avg 3.2★ for runners"
            },
            {
                decision: "Session length capped at 3 minutes max",
                tradeoff: "Optimized for commute gaming; increased sessions per day by 2.5x"
            },
        ],
        screenshots: [
            {
                image: "/screenshots/velocity-ui.jpg",
                caption: "Minimalist HUD - only score and power-up indicator visible during gameplay"
            },
            {
                image: "/screenshots/velocity-shop.jpg",
                caption: "Shop UI designed for thumb-reach zones - all purchases within one-hand reach"
            },
        ],
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
        keyDecisions: [
            {
                decision: "Rock-paper-scissors-lizard-Spock unit counter system",
                tradeoff: "5-way counters create more emergent strategies than simple 3-way, worth the learning curve"
            },
            {
                decision: "Simultaneous turn resolution instead of I-go-you-go",
                tradeoff: "Faster matches and mind-game depth; required extensive edge-case handling"
            },
            {
                decision: "No RNG in combat damage - only in map generation",
                tradeoff: "Pure skill expression; alienated some players who enjoy gambling elements"
            },
        ],
        screenshots: [
            {
                image: "/screenshots/tactical-grid.jpg",
                caption: "Grid system showing threat ranges - transparency was key to reducing cognitive load"
            },
            {
                image: "/screenshots/tactical-units.jpg",
                caption: "Unit cards display counter relationships at a glance using color-coded icons"
            },
        ],
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
        keyDecisions: [
            {
                decision: "Zero tutorial text - all learning through environmental cues",
                tradeoff: "10% of players struggled initially but 95% reported higher immersion"
            },
            {
                decision: "Puzzles tied to narrative themes rather than abstract logic",
                tradeoff: "Harder to design but emotional resonance increased completion rate by 35%"
            },
            {
                decision: "Implemented subtle hint system triggered by player stillness",
                tradeoff: "Maintains immersion while preventing frustration - average stuck time reduced 50%"
            },
            {
                decision: "No fail states - only forward progress",
                tradeoff: "Accessible to non-gamers; some hardcore players wanted more challenge"
            },
        ],
        screenshots: [
            {
                image: "/screenshots/echoes-puzzle.jpg",
                caption: "Memory fragment puzzle - visual language teaches mechanics without words"
            },
            {
                image: "/screenshots/echoes-environment.jpg",
                caption: "Environmental storytelling: room details reveal character backstory organically"
            },
        ],
    },
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

                                {/* Trailer Placeholder */}
                                <div className="mb-8 bg-ink border-2 border-cream/20 aspect-video flex items-center justify-center">
                                    <span className="font-display text-2xl text-cream/30">
                                        TRAILER / GAMEPLAY
                                    </span>
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
                                                        <div
                                                            className="absolute inset-0 flex items-center justify-center"
                                                            style={{ transform: "skewX(3deg)" }}
                                                        >
                                                            {/* Placeholder - replace with actual images */}
                                                            <div className="text-center">
                                                                <span className="font-display text-3xl text-crimson/30 block">
                                                                    {String(index + 1).padStart(2, '0')}
                                                                </span>
                                                                <span className="text-cream/30 text-sm">
                                                                    Screenshot
                                                                </span>
                                                            </div>
                                                        </div>
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

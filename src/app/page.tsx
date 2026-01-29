"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SlantedPanel from "@/components/SlantedPanel";
import Button from "@/components/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                name="EZAZ SHAIKH"
                title="Full Stack Game Designer"
                tagline="Driven by imagination, and powered by iteration."
            />

            {/* About Section */}
            <section id="about" className="py-24 relative">
                <div className="container mx-auto px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Section Header */}
                        <motion.div variants={fadeUp}>
                            <div className="mb-6">
                                <span className="font-display text-crimson text-xl tracking-widest">
                                    01 — ABOUT
                                </span>
                            </div>
                            <h2 className="font-display text-6xl md:text-7xl text-cream mb-6">
                                WHO I AM
                            </h2>
                            <div className="w-24 h-1 bg-crimson mb-8" />
                            <p className="text-cream/80 text-lg leading-relaxed mb-6">
                                A <strong className="text-crimson">Full Stack Game Designer </strong>
                                who gives life to ideas, shaping worlds and systems that invite players to explore, feel, and engage. My work has been recognized as an India GDC Game of the Year nominee for PC/Console and a Tokyo Game Show Selected Indie 80 nominee. Every project reflects care, creativity, and a commitment to making experiences that matter.
                            </p>
                            <p className="text-cream/80 text-lg leading-relaxed mb-6">
                                And sometimes, the most meaningful experiences come from the choices no one expects. I mean, just ask that little monster in the underground.
                            </p>
                        </motion.div>

                        {/* Philosophy Panel */}
                        <motion.div variants={fadeUp}>
                            <SlantedPanel variant="red" className="mb-6">
                                <span className="font-display text-2xl block mb-2">
                                    DESIGN PHILOSOPHY
                                </span>
                                <p className="text-cream/90 text-lg">
                                    &quot;Deliver what players think they want, and definitely what they don&apos;t yet know they want.&quot;
                                </p>
                            </SlantedPanel>

                            <SlantedPanel variant="default">
                                <span className="font-display text-xl text-crimson block mb-4">
                                    WHAT I BRING
                                </span>
                                <ul className="space-y-2 text-ink/80">
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> Documentation That Developers Love
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> UI/UX & Player Psychology
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> Rapid Prototyping To Polish
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> Systems Design & Balance
                                    </li>
                                </ul>
                            </SlantedPanel>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-24 bg-ink-light relative overflow-hidden">
                <div className="container mx-auto px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="font-display text-crimson text-xl tracking-widest">
                                02 — SKILLS
                            </span>
                            <h2 className="font-display text-6xl md:text-7xl text-cream mt-4">
                                TOOLKIT
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {[
                                { name: "Unity", category: "Game Engine" },
                                { name: "VS Code", category: "IDE" },
                                { name: "Figma", category: "Design" },
                                { name: "Photoshop", category: "Design" },
                                { name: "Premiere Pro", category: "Video Editing" },
                                { name: "DOTween", category: "Animation" },
                                { name: "Play Console", category: "Publishing" },
                                { name: "Xcode", category: "Publishing" },
                                { name: "Git", category: "Version Control" },
                                { name: "Spreadsheet", category: "Management" },
                                { name: "Discord", category: "Communication" },
                                { name: "Slack", category: "Communication" },
                            ].map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="group relative p-6 bg-ink border-2 border-cream/20 hover:border-crimson transition-colors duration-300"
                                    initial={{ skewX: -6 }}
                                    whileHover={{
                                        skewX: 0,
                                        x: -4,
                                        y: -4,
                                        boxShadow: "8px 8px 0px #E73A3A"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div style={{ transform: "skewX(6deg)" }}>
                                        <span className="font-display text-2xl text-cream group-hover:text-crimson transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="block text-cream/50 text-sm mt-1">
                                            {skill.category}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 relative">
                <div className="container mx-auto px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.div variants={fadeUp}>
                            <span className="font-display text-crimson text-xl tracking-widest">
                                03 — CONTACT
                            </span>
                            <h2 className="font-display text-6xl md:text-8xl text-cream mt-4 mb-8">
                                LET&apos;S TALK
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="text-cream/80 text-xl mb-12"
                        >
                            Insert coin to begin… or just drop me a message.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                            <Button href="mailto:ezazxshaikh@gmail.com" variant="primary" size="lg">
                                Email Me
                            </Button>
                            <Button href="/resume.pdf" variant="outline" size="lg" download>
                                Download Resume
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={fadeUp}
                            className="flex justify-center gap-8 mt-12"
                        >
                            {[
                                { name: "LinkedIn", href: "https://www.linkedin.com/in/ezazxshaikh/" },
                                { name: "Whatsapp", href: "https://api.whatsapp.com/send?phone=918327761371" },
                                // { name: "Itch.io", href: "#" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-display text-xl text-cream/50 hover:text-crimson transition-colors"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

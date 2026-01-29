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
                name="EZAZ"
                title="Full Stack Game Designer"
                tagline="Designing systems that players feel, not just see."
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
                                I&apos;m a <strong className="text-crimson">Full Stack Game Designer</strong> —
                                someone who understands the entire pipeline from concept to controller.
                                I don&apos;t just design mechanics; I craft experiences that resonate.
                            </p>
                            <p className="text-cream/80 text-lg leading-relaxed">
                                My approach is analytical yet creative, systematic yet playful.
                                I believe great games aren&apos;t made by accident — they&apos;re engineered to feel magical.
                            </p>
                        </motion.div>

                        {/* Philosophy Panel */}
                        <motion.div variants={fadeUp}>
                            <SlantedPanel variant="red" className="mb-6">
                                <span className="font-display text-2xl block mb-2">
                                    DESIGN PHILOSOPHY
                                </span>
                                <p className="text-cream/90 text-lg">
                                    &quot;95% of game design is invisible. The 5% that players notice
                                    should feel like magic — but it&apos;s actually precision.&quot;
                                </p>
                            </SlantedPanel>

                            <SlantedPanel variant="default">
                                <span className="font-display text-xl text-crimson block mb-4">
                                    WHAT I BRING
                                </span>
                                <ul className="space-y-2 text-ink/80">
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> Systems Design & Balance
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> UI/UX & Player Psychology
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> Level & Narrative Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-crimson">▸</span> Documentation & Communication
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
                                { name: "Unity", category: "Engine" },
                                { name: "Unreal", category: "Engine" },
                                { name: "Figma", category: "Design" },
                                { name: "Photoshop", category: "Design" },
                                { name: "Miro", category: "Planning" },
                                { name: "Notion", category: "Docs" },
                                { name: "Git", category: "Version Control" },
                                { name: "Jira", category: "Management" },
                            ].map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="group relative p-6 bg-ink border-2 border-cream/20 hover:border-crimson transition-all duration-300"
                                    style={{ transform: "skewX(-6deg)" }}
                                    whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #E73A3A" }}
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
                            Looking for a designer who thinks in systems?
                            Let&apos;s create something memorable together.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                            <Button href="mailto:ezaz@example.com" variant="primary" size="lg">
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
                                { name: "LinkedIn", href: "#" },
                                { name: "Twitter", href: "#" },
                                { name: "Itch.io", href: "#" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="font-display text-xl text-cream/50 hover:text-crimson transition-colors"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t-4 border-crimson">
                <div className="container mx-auto px-8 text-center">
                    <p className="text-cream/50 font-display tracking-widest">
                        DESIGNED & BUILT BY EZAZ — 2024
                    </p>
                </div>
            </footer>
        </>
    );
}

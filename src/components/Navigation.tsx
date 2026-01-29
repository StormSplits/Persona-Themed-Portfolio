"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuVariants, menuItemVariants, staggerContainer } from "@/lib/animations";

const navItems = [
    { label: "About", href: "/" },
    { label: "Games", href: "/games" },
    { label: "GDDs", href: "/gdd" },
    { label: "Breakdowns", href: "/breakdowns" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Menu Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-50 w-14 h-14 flex flex-col items-center justify-center gap-1.5 bg-crimson border-4 border-ink shadow-brutal-sm transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal"
                style={{ transform: "skewX(-6deg)" }}
                aria-label="Toggle menu"
            >
                <motion.span
                    className="w-6 h-0.5 bg-cream block"
                    style={{ transform: "skewX(6deg)" }}
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                    className="w-6 h-0.5 bg-cream block"
                    style={{ transform: "skewX(6deg)" }}
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                    className="w-6 h-0.5 bg-cream block"
                    style={{ transform: "skewX(6deg)" }}
                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
            </button>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-ink/80 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed left-0 top-0 h-full w-80 bg-ink border-r-4 border-crimson z-40 flex flex-col justify-center px-8"
                    >
                        {/* Decorative Lines */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-crimson" />
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-crimson" />

                        {/* Logo/Name */}
                        <div className="absolute top-8 left-8">
                            <span className="font-display text-4xl text-crimson">EZAZ SHAIKH</span>
                        </div>

                        {/* Nav Items */}
                        <motion.ul
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="space-y-6"
                        >
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    variants={menuItemVariants}
                                    custom={index}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="text-crimson font-display text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                            ▶
                                        </span>
                                        <span className="font-display text-5xl text-cream group-hover:text-crimson transition-colors duration-200">
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Contact CTA */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <a
                                href="mailto:ezazxshaikh@gmail.com"
                                className="btn-persona w-full text-center block"
                            >
                                <span className="btn-persona-text">Get in Touch</span>
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

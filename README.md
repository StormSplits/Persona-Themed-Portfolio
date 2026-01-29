# Persona 5–Inspired Portfolio

## 📌 Project Overview

A bold, interactive portfolio website for **Ezaz** — Full Stack Game Designer. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Landing page (About + Contact)
│   ├── games/page.tsx      # Released Games showcase
│   ├── gdd/page.tsx        # Design Documents
│   └── breakdowns/page.tsx # Game Breakdowns analysis
├── components/             # Reusable UI components
│   ├── Navigation.tsx      # Animated menu
│   ├── Hero.tsx            # Landing hero section
│   ├── SlantedPanel.tsx    # Persona-style panels
│   ├── GameCard.tsx        # Game showcase cards
│   ├── Button.tsx          # CTA buttons
│   └── PageTransition.tsx  # Page animations
├── lib/
│   └── animations.ts       # Framer Motion variants
└── styles/
    └── globals.css         # Design system + utilities
```

## 🎨 Design System

**Colors:**
- Crimson Red: `#E73A3A` (primary accent)
- Ink Black: `#0D0D0D` (backgrounds)
- Cream: `#FAF7F0` (text panels)
- Electric Blue: `#00D4FF` (highlights)

**Typography:**
- Display: Bebas Neue (headers)
- Body: Inter (content)

## ✏️ Customization

### Update Content

1. **Personal Info**: Edit `src/app/page.tsx`
2. **Games**: Edit the `games` array in `src/app/games/page.tsx`
3. **GDDs**: Edit the `documents` array in `src/app/gdd/page.tsx`
4. **Breakdowns**: Edit the `breakdowns` array in `src/app/breakdowns/page.tsx`

### Add Your Assets

- **Resume**: Add `resume.pdf` to `public/`
- **Game Images**: Add to `public/images/games/`
- **Videos**: Add to `public/videos/`

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts

## 📝 License

Personal portfolio — feel free to use as inspiration!

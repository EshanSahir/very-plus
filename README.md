<div align="center">

# ⚡ VERY + // VOCABULARY AMPLIFIER

**Transform lazy *"very + [word]"* phrasing into precise, elevated prose.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-veryplus--app.surge.sh-FFE600?style=for-the-badge&logo=google-chrome&logoColor=000&labelColor=000)](https://veryplus-app.surge.sh)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=000&labelColor=000)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&labelColor=000)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=fff&labelColor=000)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-A3E635?style=for-the-badge&logoColor=000&labelColor=000)](./LICENSE)

[🌐 View Live Deployment](https://veryplus-app.surge.sh) • [⚡ Report Bug / Request Feature](https://github.com/issues)

</div>

---

## 📖 Overview

**VERY +** is an open-source, offline-first vocabulary enhancement web application built with a strict **Neobrutalism Minimalism** aesthetic. It targets the common writing weakness of relying on *"very + [adjective]"* by offering immediate, nuanced, high-impact replacements with definitions, contextual comparisons, audio pronunciation, and interactive drills.

```
┌────────────────────────────────────────────────────────┐
│                        V E R Y                         │
└────────────────────────────────────────────────────────┘
                           [ + ]
┌────────────────────────────────────────────────────────┐
│  INPUT: BIG                                            │
└────────────────────────────────────────────────────────┘
                           [ = ]
┌────────────────────────────────────────────────────────┐
│  COLOSSAL (/kəˈlɒs.əl/ • ADJECTIVE)                    │
│  "Extremely large, gigantic, or monumental in scale."  │
│  ❌ "The team built a very big skyscraper."            │
│  ✅ "The team built a colossal skyscraper."            │
└────────────────────────────────────────────────────────┘
```

---

## 🎨 Neobrutalism Minimalism Design System

- **Strict Zero Radius**: Every container, badge, input, and button enforces `border-radius: 0px`.
- **Solid Black Borders**: Crisp `3px` and `4px` pitch-black (`#000000`) borders for strong visual bounding boxes.
- **Flat Color Blocking**: High-contrast, unblurred flat planes without gradients:
  - Canary Yellow (`#FFE600`)
  - Neo Lime (`#A3E635`)
  - Punchy Coral (`#FF5A36`)
  - Stark White (`#FFFFFF`)
  - Pitch Black (`#000000`)
  - Warm Newsprint (`#F4F0EA`) with subtle geometric dot grid
- **Tactile Physics**: Offset drop shadows (`5px 5px 0px #000`) that translate smoothly on hover and active states.
- **Typography**: Display headlines set in `Space Grotesk`, paired with technical tags and phonetics in `JetBrains Mono`.

---

## 🚀 Key Features

1. **The Formula View**: Dynamic instant search with 1-click popular example chips (`big`, `tired`, `cold`, `smart`, `fast`, `scared`).
2. **Audio Pronunciation**: Native Web Speech API integration for 1-click auditory pronunciation of primary power words and nuance variants.
3. **Nuance Spectrum**: Contextual breakdown between subtle alternatives (e.g. *Colossal* vs *Mammoth* vs *Gigantic*).
4. **160+ Curated Directory**: Fully searchable, filterable catalog across categories (*Scale*, *Emotion*, *Intellect*, *Physical*, *Speed*, *Quality*, *Character*, *Atmosphere*).
5. **Drill & Quiz Mode**: Rapid-fire flashcard gamification with streak counters, score multipliers, and celebratory confetti.
6. **Paragraph Upgrader**: Paste multi-sentence paragraphs to auto-detect and highlight vocabulary upgrades in context.
7. **Saved Word Bank**: Local-first bookmarking system persisted in `localStorage` with a single-click export.
8. **Dynamic Online Enhancer**: Automatic fallback querying Datamuse & Free Dictionary APIs for infinite vocabulary coverage.
9. **🛡️ Sue-Proof Legal Architecture**:
   - ADA Title III & WCAG 2.1 AA/AAA compliance with keyboard skip links and high-contrast accessibility.
   - Formal Terms of Service, UCC "AS IS" warranty disclaimers, and limitation of liability clauses.
   - GDPR/CCPA zero-surveillance architecture (zero tracking cookies, zero telemetry).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Build Tool** | [Vite 8](https://vitejs.dev) |
| **Styling** | Custom Pure Neobrutalism CSS Design System |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Audio** | Web Speech API (`SpeechSynthesis`) |
| **Confetti** | Canvas Confetti |
| **Hosting** | Surge Global Edge CDN / PWA Ready |

---

## 💻 Local Development

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/very-plus.git
cd very-plus

# Install dependencies
npm install

# Start development server
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for full details.

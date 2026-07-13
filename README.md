<div align="center">

# Project Rosen: Ultimate Team

**A sleek, cross-platform chess achievement tracker that generates dynamic FIFA-style stat cards.**

[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## ♟️ Overview

Project Rosen is a specialized statistics tracker that scans your chess games for rare, creative achievements (inspired by IM Eric Rosen). We've taken the core accomplishment-tracking engine and wrapped it in a **premium, sleek, dark-mode interface**. 

The highlight? We calculate your unique stats and generate a **downloadable, FIFA Ultimate Team (FUT) style stat card** that evolves based on your chess career!

**Acknowledgements:** This repository is a custom fork of the excellent [rosen-score](https://github.com/fitztrev/rosen-score) by **[fitztrev](https://github.com/fitztrev)**. Fitztrev engineered the core logic and achievement detection framework. This fork builds upon his brilliant work by introducing cross-platform capabilities, a new UI, and advanced stat-card generation algorithms.

---

## ✨ Key Features

* **Dual Platform Fetching:** Seamlessly aggregates match data from both **Lichess** and **Chess.com**.
* **Dynamic FUT Cards:** Generates a stunning, downloadable player card featuring your avatar, country, rating, and core attributes (PAC, SHO, PAS, DRI, DEF, PHY).
* **Tiered Card System:** Your card visually upgrades (Bronze → Silver → Gold) complete with glowing visual effects as your Overall Rating (OVR) increases.
* **Realistic Stat Curves:** Advanced math curves ensure that while beginners can track their progress, maxing out your card (99 OVR) requires true dedication and tens of thousands of analyzed games.
* **Premium Aesthetics:** A complete UI overhaul featuring sleek dark themes, glassmorphism, glowing micro-animations, and dynamic data visualization.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed along with a package manager like `pnpm` or `npm`.

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AyushSinha2603/project-rosen.git
   cd project-rosen
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Building for Production
```bash
pnpm run build
```

---

## 🛠️ Tech Stack
* **Vue 3** (Composition API)
* **Vite**
* **Tailwind CSS**
* **TypeScript**
* **html-to-image** (For flawless card rendering and SVG mask support)

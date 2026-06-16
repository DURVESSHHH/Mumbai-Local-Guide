# 🚆 Mumbai Local Survival Guide

A fully responsive React web application that helps students, professionals, and tourists navigate Mumbai's iconic local train network.

> **Foundation Project** — Frontend Development + Responsive Design + React Fundamentals

---

## 🌐 Live Preview

Run locally with:
```bash
npm install
npm run dev
```
Then open (https://mumbai-local-guide.vercel.app/)

---

## 📁 Project Structure

```
mumbai-local-guide/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with animated hamburger drawer
│   │   ├── Navbar.css
│   │   ├── Footer.jsx       # Multi-column footer with links
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx         # Hero, stats strip, features, CTA
│   │   ├── Home.css
│   │   ├── Routes.jsx       # Accordion route cards for all 4 lines
│   │   ├── Routes.css
│   │   ├── Tips.jsx         # Filterable tips grid + FAQ accordion
│   │   ├── Tips.css
│   │   ├── About.jsx        # Team, values, disclaimer
│   │   ├── About.css
│   │   ├── Contact.jsx      # Validated contact form with success state
│   │   └── Contact.css
│   ├── data/
│   │   └── index.js         # All static data: routes, tips, stats, FAQs
│   ├── App.jsx              # React Router setup
│   ├── main.jsx             # Entry point
│   └── index.css            # Global tokens, reset, utilities
├── index.html
├── package.json
└── vite.config.js
```

---

## ✨ Pages & Features

### 🏠 Home
- Full-bleed hero with animated railway track background
- Statistics strip (7.5M+ daily riders, 465 km network)
- Feature highlights grid
- CTA banner

### 🗺️ Routes
- All 4 lines: Western, Central, Harbour, Trans-Harbour
- Expandable accordion cards with key stations, frequency, pro tips
- Coach guide legend

### 💡 Tips
- 8 survival tips with **live category filter** (useState)
- Priority-coded cards (high / medium / low)
- FAQ accordion with smooth toggle

### 👥 About
- Mission & values grid
- Team cards
- Official disclaimer

### 📬 Contact
- Two-column layout (info + form)
- **Client-side validation** with inline error messages
- Success confirmation state
- Responsive single-column on mobile

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 18 | UI components, hooks (useState, useEffect) |
| React Router v6 | Client-side routing, NavLink active states |
| Lucide React | Icon library |
| Vite | Build tool & dev server |
| CSS Custom Properties | Design tokens (colors, spacing, typography) |
| CSS Grid + Flexbox | Fluid responsive layouts |
| Media Queries | 4 breakpoints: 480 / 600 / 768 / 900px |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout change |
|---|---|
| `> 900px` | Full desktop — 2-col contact, side-by-side cards |
| `≤ 900px` | Tablet — stacked contact layout |
| `≤ 768px` | Mobile nav — hamburger + full-screen drawer |
| `≤ 600px` | Compact — hidden route stats, tighter spacing |
| `≤ 480px` | Small — single-column stats, form fields |

---

## 🎨 Design System

**Colors**
- `--rail-d: #0F2440` — Navy (primary brand)
- `--saffron: #F5A623` — Saffron (accent / CTA)
- `--concrete: #E8E4DC` — Warm concrete (backgrounds)

**Typography**
- **Syne** — Display headings (800 weight)
- **Space Grotesk** — Body & UI text

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/mumbai-local-guide.git

# Install dependencies
cd mumbai-local-guide
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📋 Evaluation Criteria Coverage

| Criterion | Implementation |
|---|---|
| UI/UX Design Quality | Consistent design system, clear hierarchy, micro-interactions |
| Responsiveness | Mobile-first CSS, 5 breakpoints, fluid grids |
| Code Structure | Component-based, separated CSS, centralized data layer |
| React Implementation | useState, useEffect, props, conditional rendering, lists |
| Navigation & UX | React Router, active links, mobile drawer, scroll lock |
| Documentation | This README + inline comments |

---

*Built with ❤️ for Mumbai's 7.5 million daily commuters.*

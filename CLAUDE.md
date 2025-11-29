# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm start

# Run tests
npm test

# Run a single test file
npm test -- --testPathPattern="App.test.js"

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

Single-page React portfolio with ultra-minimalist markdown-style design, deployed to tommyyan.com via GitHub Pages.

### Key Structure

```
src/
├── contexts/ThemeContext.js     # Dark/light mode state + localStorage
├── hooks/
│   ├── useTheme.js              # Theme toggle hook
│   └── useSmoothScroll.js       # Smooth scroll to sections
├── data/
│   ├── user.js                  # All portfolio content (INFO object)
│   ├── articles.js              # Blog articles with JSX bodies
│   └── seo.js                   # SEO metadata
├── styles/
│   ├── global.css               # Base styles + .section class
│   ├── theme.css                # CSS variables for light/dark themes
│   └── animations.css           # Animation utilities
├── sections/                    # Portfolio sections
│   ├── HeroSection.jsx          # Name, title, description, social icons
│   ├── ExperienceSection.jsx    # Expandable list with hover highlights
│   └── EducationSection.jsx     # Simple list with hover highlights
├── pages/
│   ├── Portfolio.jsx            # Main single-page (Hero, Experience, Education)
│   ├── articles.jsx             # Blog listing (/blog)
│   ├── readArticle.jsx          # Blog post (/blog/:slug)
│   └── 404.jsx
└── components/
    ├── common/                  # NavBar (theme toggle only), Footer, ThemeToggle
    └── chatbot/                 # Placeholder for future AI chatbot
```

### Routing

React Router v6 with simplified routes:
- `/` - Single-page portfolio (Hero, Experience, Education)
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog posts

### Theme System

- Light/dark mode toggle (sun/moon icons) with localStorage persistence
- CSS variables defined in `src/styles/theme.css`
- Theme context in `src/contexts/ThemeContext.js`
- Access via `useTheme()` hook

Key CSS variables: `--bg-primary`, `--bg-hover`, `--text-primary`, `--text-secondary`, `--text-muted`, `--accent`, `--border`

### Design Philosophy

- Ultra-minimalist, markdown-style aesthetic
- Max width 680px container
- System fonts (-apple-system, etc.)
- Generous whitespace between sections
- Small caps uppercase section headers
- Hover highlights on experience/education blocks
- FontAwesome icons for social links and UI elements

### Icons (FontAwesome)

- Theme toggle: `faSun` / `faMoon`
- Experience expand/collapse: `faChevronDown` (rotates when open)
- Hero links: `faGithub`, `faLinkedin`, `faEnvelope`, `faMedal` (veteran)

### Adding Content

- **Articles**: Create `article_N()` function in `articles.js`, add to `myArticles` array
- **Experience/Education**: Edit arrays in `user.js`

### Future: AI Chatbot

Scaffolding in `src/components/chatbot/`. To enable:
1. Set `CHATBOT_ENABLED = true` in `ChatbotWidget.jsx`
2. Implement API connection for AI responses
3. Pass portfolio context from `user.js` for personalized answers

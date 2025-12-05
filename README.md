# 🎬 Moodflix

A mood-based movie discovery web app built with React, Tailwind CSS, Redux, and TMDB API.

Moodflix isn’t another Netflix clone—it’s an emotion-first cinematic experience. Pick a mood, explore curated movies, save your favorites, and feel seen by the algorithm.

## 🌙 Core Idea

- Select a mood → discover movies → explore → save → repeat
- Core moods: Happy, Sad, Romantic, Thriller, Chill, Motivational
- Each mood maps to genres + filters, creating an emotion-first recommendation engine
- Impresses recruiters with clean UX, API integration, state management, and responsiveness

## 🛠️ Tech Stack

- Framework -> React 18 + Vite
- Routing -> React Router v6
- Styling -> Tailwind CSS 3 + DaisyUI (optional)
- State -> Redux Toolkit + Redux Persist
- Data -> TMDB API + Axios
- Build -> Vite (Dev server at localhost:5173)

Minimal stack, maximum impact. No bulky UI libraries. Just Tailwind + custom components.

## 📄 Pages

- Landing Page
- Mood Selection Page
- Movie Results Page
- Movie Detail Page
- Favorites Page
- Profile Page

## 🎯 Key Features

1. Mood-Based Discovery

   - 6 moods → mapped to TMDB genres
   - Dynamic API queries per mood
   - Error handling & loading states

2. Movie Data Integration

   - TMDB API: popular, trending, top-rated, search
   - Movie details: trailers, credits, ratings
   - Poster & backdrop images from TMDB CDN

3. Save Favorites

   - Redux Toolkit + Redux Persist
   - Favorites stored in local storage (no backend)
   - Add/remove favorites
   - Favorites count displayed in navbar & profile

4. Mobile-First Responsive Design

   - 320px → 4K screens
   - Responsive grid layouts
   - Touch-friendly buttons & spacing
   - Hamburger menu on mobile

5. Dark Cinematic UI
   - Brand color system: #0B0B0F, #14141C, #7C7CFF, #F472B6, #FBBF24, #EDEDED, #A1A1AA
   - Soft gradients, minimal text
   - Hover states & smooth transitions
   - Emotional, immersive vibe

## 🧠 Mood → Genre Mapping

- Happy → Comedy, Family
- Sad → Drama
- Romantic → Romance
- Thriller → Thriller, Crime
- Chill → Animation, Feel-Good
- Motivational → Biography, Sport

## 🚀 Quick Start Guide

1. Get API Key

   - TMDB: Get Key

2. Add Key to .env
   ```text
   VITE_TMDB_API_KEY=your_tmdb_key
   ```
3. Install & Run
   ```
   npm install --legacy-peer-deps
   npm run dev
   ```
   Open : http://localhost:5173

## 🔗 Live Link
   ```
   https://aarya25dh.github.io/Moodflix-React/
   ```

## 🐛 Troubleshooting
- Movies not loading → Check TMDB key + restart server

- Favorites not saving → Check browser localStorage

- Build errors → rm -rf node_modules && npm install --legacy-peer-deps

## 🎯 Future Enhancements
- Optional Firebase auth for login

- User reviews & ratings

- Watchlist sharing

- Advanced filtering (year, runtime, language)

- Streaming provider info

- Social features (follow friends, see favorites)

## 📝 License
MIT License — free for personal/portfolio projects.

## 🙏 Credits
TMDB API — The Movie Database

Tailwind CSS — Styling framework

### Built with ❤️ | Ready to impress 🎬

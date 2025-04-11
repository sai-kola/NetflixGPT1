# 🎬 NetflixGPT

NetflixGPT is a modern, AI-powered movie browsing app built with React, TailwindCSS, Firebase, and OpenAI GPT. It offers a seamless user experience with personalized movie recommendations, trailers, and smart GPT-based search functionality.

---

## 🔥 Features

### ✅ Authentication
- User Login / Sign Up with Firebase Auth
- Protected Routes: `/browse` accessible only after login
- Sign Out functionality
- Profile update with displayName & profile picture

### 🎥 Movie Browsing (Browse Page)
- Main Movie Trailer (Auto-play, muted)
- Now Playing & Popular Movies (via TMDB API)
- Beautiful UI built with TailwindCSS
- Responsive design for all devices

### 🤖 NetflixGPT
- Smart Search Bar using OpenAI's GPT
- Movie Suggestions powered by GPT + TMDB
- Multi-language support (BONUS)

---

## 🚀 Tech Stack

- **React** (with Hooks)
- **Redux Toolkit**
- **TailwindCSS**
- **Firebase** (Authentication)
- **TMDB API** (Movie data & trailers)
- **OpenAI GPT API** (Movie recommendations)
- **YouTube Embed** (Trailer Playback)

---

## 🧠 Key Concepts & Tools Used

- `useRef` Hook
- Custom Hooks: `useNowPlayingMovies`, `usePopularMovies`
- Redux Slices: `userSlice`, `movieSlice`, `gptSlice`
- Form Validation with `useRef`
- Firebase Auth State Management
- TMDB Image CDN & Trailer Embed
- Memoization for Performance
- Protected Routes and Redirects
- Deployment to Production (e.g., Vercel/Netlify)

---

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sai-kola/netflix-gpt.git
cd netflix-gpt

# 🎬 NetflixGPT
NetflixGPT is a modern, AI-powered movie browsing app built with React, TailwindCSS, Firebase, and OpenAI GPT. It offers a seamless user experience with personalized movie recommendations, trailers, and smart GPT-based search functionality.

🔥 Features
✅ Authentication
User Login/Sign Up with Firebase Auth

Sign In/Sign Up Form

Redirect to Browse Page after successful login

Sign Out functionality

Profile update with displayName & profile picture

🎥 Movie Browsing (Browse Page)
Main Movie Trailer (Auto-play, muted)

Now Playing Movies (via TMDB API)

Popular Movies (via TMDB API)

Beautiful UI built with TailwindCSS

Responsive Design for all devices

Tailwind Classes to make the main container look awesome

Secondary Component for additional movie details

Movie Card with title, description, and poster image

Fetching Trailer Data for movie previews

Display Movie Suggestions dynamically

UsePopularMovies Custom Hook for fetching popular movies

🤖 NetflixGPT
Search Bar powered by OpenAI's GPT

Movie Suggestions powered by GPT + TMDB

Multi-language support (BONUS)

GPT Search API call for smart movie suggestions

🚀 Tech Stack
React (with Hooks)

Redux Toolkit

TailwindCSS

Firebase (Authentication)

TMDB API (Movie data & trailers)

OpenAI GPT API (Movie recommendations)

YouTube Embed (Trailer Playback)

🧠 Key Concepts & Tools Used
useRef Hook

Custom Hooks: useNowPlayingMovies, usePopularMovies

Redux Slices: userSlice, movieSlice, gptSlice

Form Validation with useRef

Firebase Auth State Management

TMDB Image CDN & Trailer Embed

Memoization for Performance Optimization

Protected Routes and Redirects

Deployment to Production (e.g., Vercel/Netlify)

🔧 Project Setup
Clone the repository to your local machine.

Add a .env file in the root directory.

Add your TMDB API Key and OpenAI API Key to the .env file as follows:

REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
Run npm install to install all dependencies.

Run the app with npm start.


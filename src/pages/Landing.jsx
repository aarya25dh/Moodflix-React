import React from 'react'
import { Link } from 'react-router-dom'
import MoodflixLogo from '../components/MoodflixLogo'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bg via-brand-light to-brand-bg">
      {/* Hero Section */}
      <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden flex flex-col justify-center">
        {/* Soft pastel gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-radial from-brand-accentBright/15 via-transparent to-transparent pointer-events-none" />
        
        {/* Gentle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(237, 231, 226, 0.5) 100%)'
        }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-fadeIn">
            <MoodflixLogo size="lg" />
          </div>

          {/* Main tagline hero */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-inter font-semibold mb-8 leading-[1.1] tracking-tight">
            <span className="text-brand-text block">Cinema</span>
              <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-accentBright via-brand-purpleBright to-brand-blueBright bg-clip-text text-transparent">
                that vibes
              </span>
              {/* Radial glow behind "vibes" */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-gradient-to-r from-brand-accentBright/15 to-brand-pinkBright/15 blur-3xl rounded-full -z-10" />
            </span>
            <span className="text-brand-text block">with you.</span>
          </h1>

          {/* Subtext with better spacing */}
          <p className="text-lg sm:text-xl text-brand-muted/80 max-w-2xl mx-auto leading-relaxed mb-12 font-inter font-light tracking-wide">
            Every feeling carries a story. Pick a mood—we'll find the cinema that matches your moment.
          </p>

          {/* CTA Button */}
          <div className="mb-20">
            <Link
              to="/moods"
              className="inline-block px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-brand-accentBright to-brand-pinkBright text-white font-inter font-semibold rounded-lg hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-300 transform hover:scale-105 active:scale-100 text-lg tracking-wide group relative overflow-hidden"
            >
              <span className="relative z-10">Find my vibe</span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-15 transition-opacity duration-300 -skew-x-12" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce text-brand-muted/40 text-sm mt-16 hidden sm:block">
            <p>Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Feature Preview Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-transparent via-brand-surface/5 to-transparent relative">
        <div className="max-w-5xl mx-auto">
          {/* Section divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/15 to-transparent mb-20" />

          {/* Feature highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl sm:text-5xl font-inter font-semibold text-brand-text mb-4 leading-tight">
                How it <span className="text-brand-accent">works</span>
              </h2>
              <p className="text-lg text-brand-muted/75 leading-relaxed mb-6 font-inter">
                Skip the endless scrolling. No algorithms. No "because you watched." Just your feelings and the films that match them.
              </p>
              <ul className="space-y-4 text-brand-muted/75 font-inter">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl mt-1">→</span>
                  <span>Pick how you feel in a single click</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl mt-1">→</span>
                  <span>Discover curated films that resonate emotionally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl mt-1">→</span>
                  <span>Save your comfort cinema for later</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-surface/40 to-brand-surface/10 border border-brand-accent/10 p-8 text-center">
              <div className="text-7xl mb-4">🎬</div>
              <p className="text-brand-muted/70">Your emotional cinema awaits</p>
            </div>
          </div>

          {/* Mood preview grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-inter font-black text-brand-text mb-10 text-center">Six moods. Infinite possibilities.</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="rounded-xl bg-gradient-to-br from-yellow-200/50 to-orange-200/40 border border-yellow-300/40 p-6 text-center hover:border-yellow-300/70 transition-colors">
                <div className="text-4xl mb-2">🎉</div>
                <p className="text-sm font-inter font-semibold text-brand-text">Happy</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-200/50 to-purple-200/40 border border-blue-300/40 p-6 text-center hover:border-blue-300/70 transition-colors">
                <div className="text-4xl mb-2">🌧️</div>
                <p className="text-sm font-inter font-semibold text-brand-text">Sad</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-pink-200/50 to-rose-200/40 border border-pink-300/40 p-6 text-center hover:border-pink-300/70 transition-colors">
                <div className="text-4xl mb-2">💑</div>
                <p className="text-sm font-inter font-semibold text-brand-text">Romantic</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-purple-200/50 to-blue-200/40 border border-purple-300/40 p-6 text-center hover:border-purple-300/70 transition-colors">
                <div className="text-4xl mb-2">🔪</div>
                <p className="text-sm font-inter font-semibold text-brand-text">Thriller</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-green-200/50 to-teal-200/40 border border-green-300/40 p-6 text-center hover:border-green-300/70 transition-colors">
                <div className="text-4xl mb-2">🍿</div>
                <p className="text-sm font-inter font-semibold text-brand-text">Chill</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-emerald-200/50 to-green-200/40 border border-emerald-300/40 p-6 text-center hover:border-emerald-300/70 transition-colors">
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-sm font-inter font-semibold text-brand-text">Motivational</p>
              </div>
            </div>
          </div>

          {/* Brand promise */}
          <div className="rounded-2xl bg-gradient-to-r from-brand-accentBright/10 via-brand-pinkBright/10 to-brand-blueBright/10 border border-brand-accent/20 p-12 text-center">
            <p className="text-2xl font-inter font-bold text-brand-text mb-3">Where every feeling finds a film.</p>
            <p className="text-brand-muted/80 max-w-xl mx-auto font-inter">
              MoodFlix translates your emotions into cinema. Because sometimes you don't want "popular"—you want personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


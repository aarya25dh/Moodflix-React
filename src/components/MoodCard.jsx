import React from 'react'
import { Link } from 'react-router-dom'

const MOOD_EMOJIS = {
  happy: '🎉',
  sad: '🌧️',
  romantic: '💑',
  thriller: '🔪',
  chill: '🍿',
  motivational: '🚀',
}

const MOOD_COLORS = {
  happy: 'from-yellow-200/60 to-orange-200/50 border-yellow-300/50',
  sad: 'from-blue-200/60 to-purple-200/50 border-blue-300/50',
  romantic: 'from-pink-200/60 to-rose-200/50 border-pink-300/50',
  thriller: 'from-purple-200/60 to-blue-200/50 border-purple-300/50',
  chill: 'from-green-200/60 to-teal-200/50 border-green-300/50',
  motivational: 'from-emerald-200/60 to-green-200/50 border-emerald-300/50',
}

const MOOD_GLOW = {
  happy: 'hover:shadow-[0_0_40px_rgba(253,224,71,0.3)]',
  sad: 'hover:shadow-[0_0_40px_rgba(147,197,253,0.3)]',
  romantic: 'hover:shadow-[0_0_40px_rgba(244,194,213,0.3)]',
  thriller: 'hover:shadow-[0_0_40px_rgba(221,214,254,0.3)]',
  chill: 'hover:shadow-[0_0_40px_rgba(187,247,208,0.3)]',
  motivational: 'hover:shadow-[0_0_40px_rgba(167,243,208,0.3)]',
}

export default function MoodCard({ mood, label, description }) {
  const colorClass = MOOD_COLORS[mood] || 'from-brand-accentBright/20 to-brand-pinkBright/20 border-brand-accent/30'
  const glowClass = MOOD_GLOW[mood] || 'hover:shadow-[0_0_40px_rgba(229,9,20,0.4)]'

  return (
    <Link
      to={`/results?mood=${mood}`}
      className={`group relative p-10 sm:p-12 rounded-2xl cursor-pointer transition-all duration-300 border bg-gradient-to-br ${colorClass} overflow-hidden will-change-transform hover:-translate-y-1.5 active:scale-97 ${glowClass}`}
    >
      {/* Subtle background texture effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-white to-transparent pointer-events-none rounded-2xl" />

      <div className="text-center relative z-10">
        {/* Emoji with enhanced bounce animation */}
        <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-200 ease-out group-active:scale-95">
          {MOOD_EMOJIS[mood] || '🎬'}
        </div>

        {/* Title with gradient text effect on hover */}
        <h3 className="text-3xl sm:text-4xl font-inter font-semibold text-brand-text group-hover:text-brand-accent transition duration-300 mb-2 tracking-tight">
          {label}
        </h3>

        {/* Description with smooth reveal */}
        <p className="text-sm sm:text-base text-brand-muted/60 font-inter font-light tracking-wide opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>

      {/* Keyboard focus state */}
      <div className="absolute inset-0 rounded-2xl opacity-0 focus-visible:opacity-20 transition-opacity ring-2 ring-offset-2 ring-offset-brand-bg ring-brand-accent pointer-events-none" />
    </Link>
  )
}

import React from 'react'
import MoodCard from '../components/MoodCard'

const MOODS = [
  { key: 'happy', label: 'Happy', genres: [35, 10751], description: 'Sunshine energy.' },
  { key: 'sad', label: 'Sad', genres: [18], description: 'Soft chaos.' },
  { key: 'romantic', label: 'Romantic', genres: [10749], description: 'Heart in 4K.' },
  { key: 'thriller', label: 'Thriller', genres: [53, 80], description: 'Adrenaline, please.' },
  { key: 'chill', label: 'Chill', genres: [16, 10751], description: 'Low battery, high comfort.' },
  { key: 'motivational', label: 'Motivational', genres: [18, 10752], description: 'Main character energy.' },
]

export default function Moods() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bg via-brand-light to-brand-bg pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Soft pastel background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-accentBright/15 via-transparent to-transparent pointer-events-none" />
      
      {/* Gentle vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(237, 231, 226, 0.5) 100%)'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section - larger and more dramatic */}
        <div className="mb-20 sm:mb-28 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-inter font-semibold text-brand-text mb-4 leading-[1.1] tracking-tight">
            How are we<br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-accentBright via-brand-purpleBright to-brand-blueBright bg-clip-text text-transparent">
                feeling
              </span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-gradient-to-r from-brand-accentBright/15 to-brand-pinkBright/15 blur-3xl rounded-full -z-10" />
            </span>
            <span className="block">today?</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-muted/75 max-w-2xl mx-auto leading-relaxed font-inter font-light tracking-wide mt-8">
            Pick a mood. We'll handle the cinema.
          </p>
        </div>

        {/* Mood grid with enhanced card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-20">
          {MOODS.map(mood => (
            <MoodCard 
              key={mood.key} 
              mood={mood.key} 
              label={mood.label}
              description={mood.description}
            />
          ))}
        </div>

        {/* Bottom accent section */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent mb-12" />
        
        <div className="text-center">
          <p className="text-brand-muted/60 text-sm font-light tracking-wide font-inter">
            Each feeling carries a story. Pick yours.
          </p>
        </div>
      </div>
    </div>
  )
}

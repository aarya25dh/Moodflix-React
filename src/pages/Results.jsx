import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { discoverByGenres, fetchPopular } from '../services/tmdb'
import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'
import EmptyState from '../components/EmptyState'

const MOOD_MAPPING = {
  happy: [35, 10751],
  sad: [18],
  romantic: [10749],
  thriller: [53, 80],
  chill: [16, 10751],
  motivational: [18, 10752],
}

const MOOD_CONFIG = {
  happy: { emoji: '🎉', label: 'Happy', tagline: 'Sunshine energy.', color: 'from-orange-500/15 to-yellow-500/10' },
  sad: { emoji: '🌧️', label: 'Sad', tagline: 'Soft chaos.', color: 'from-blue-600/15 to-indigo-600/10' },
  romantic: { emoji: '💑', label: 'Romantic', tagline: 'Heart in 4K.', color: 'from-rose-500/15 to-pink-500/10' },
  thriller: { emoji: '🔪', label: 'Thriller', tagline: 'Adrenaline, please.', color: 'from-red-600/15 to-black/10' },
  chill: { emoji: '🍿', label: 'Chill', tagline: 'Low battery, high comfort.', color: 'from-teal-500/15 to-cyan-500/10' },
  motivational: { emoji: '🚀', label: 'Motivational', tagline: 'Main character energy.', color: 'from-green-500/15 to-emerald-500/10' },
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Results() {
  const q = useQuery()
  const mood = q.get('mood')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        
        if (!mood) {
          const data = await fetchPopular()
          setMovies(data.results || [])
          return
        }

        const genres = MOOD_MAPPING[mood] || []
        const data = await discoverByGenres(genres)
        setMovies(data.results || [])
      } catch (err) {
        console.error('Failed to load movies:', err)
        setError('The cinema is sleeping right now. Try again in a moment.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [mood])

  const moodConfig = mood && MOOD_CONFIG[mood] 
    ? MOOD_CONFIG[mood] 
    : { emoji: '🎬', label: 'Popular', tagline: 'Trending now.', color: 'from-brand-accentBright/15 to-brand-pinkBright/10' }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-brand-bg via-[#1a1a2e] to-brand-bg pt-32 pb-20 px-4 relative overflow-hidden`}>
      {/* Netflix-inspired background */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-accentBright/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mood header with emoji and tagline */}
        <div className={`mb-16 sm:mb-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-br ${moodConfig.color} border border-brand-accent/20 backdrop-blur-sm`}>
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="text-7xl sm:text-8xl flex-shrink-0 animate-fadeIn">
              {moodConfig.emoji}
            </div>
            <div className="flex-1">
              <h1 className="text-5xl sm:text-6xl font-inter font-black text-brand-text mb-2 leading-tight">
                {moodConfig.label}
              </h1>
              <p className="text-xl sm:text-2xl text-brand-muted/80 font-light mb-4 font-inter">
                {moodConfig.tagline}
              </p>
              <p className="text-sm sm:text-base text-brand-muted/70 font-inter">
                Discover films that match this feeling.
              </p>
            </div>
          </div>
        </div>

        {/* Loading state */}
        {loading && <Loader />}

        {/* Error state */}
        {error && (
          <EmptyState
            icon="🌙"
            title="Cinema is resting"
            message={error}
          />
        )}

        {/* No results state */}
        {!loading && !error && movies.length === 0 && (
          <EmptyState
            icon="🎬"
            title="No movies matched this mood"
            message="Your vibe is rare today. Try another mood?"
          />
        )}

        {/* Movie grid */}
        {!loading && !error && movies.length > 0 && (
          <>
            <p className="text-sm sm:text-base text-brand-muted/70 mb-8 font-light tracking-wide font-inter">
              Showing {movies.length} films • Scroll to explore
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {movies.map(m => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}


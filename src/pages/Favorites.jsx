import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import EmptyState from '../components/EmptyState'

export default function Favorites() {
  const favorites = useSelector(s => s.favorites.items)

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg via-[#16161f] to-brand-bg pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-br from-brand-accentBright/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-br from-brand-pink/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-inter font-black text-brand-text mb-3 leading-tight">
            Your comfort <span className="bg-gradient-to-r from-brand-accentBright via-brand-pinkBright to-brand-accentBright bg-clip-text text-transparent">cinema</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-6">
            <p className="text-lg text-brand-muted/80 font-inter font-light">
              {favorites.length} {favorites.length === 1 ? 'film saved' : 'films saved'}
            </p>
            {favorites.length > 0 && (
              <div className="h-px bg-gradient-to-r from-brand-accentBright/30 to-transparent sm:flex-1" />
            )}
          </div>
        </div>

        {/* Empty state */}
        {favorites.length === 0 ? (
          <EmptyState
            icon="💭"
            title="No saved movies yet"
            message="Your future comfort films are waiting. Browse moods to start building your personal cinema collection."
          />
        ) : (
          <>
            <p className="text-sm sm:text-base text-brand-muted/70 mb-8 font-inter font-light tracking-wide">
              {favorites.length} cherished {favorites.length === 1 ? 'film' : 'films'} • Save this feeling
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {favorites.map(m => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

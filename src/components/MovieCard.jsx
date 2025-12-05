import React from 'react'
import { Link } from 'react-router-dom'
import { imageUrl } from '../services/tmdb'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../redux/favoritesSlice'

export default function MovieCard({ movie }) {
  const dispatch = useDispatch()
  const favorites = useSelector(s => s.favorites.items)
  const isFav = favorites.some(m => m.id === movie.id)

  const rating = movie.vote_average ? (movie.vote_average / 2).toFixed(1) : 'N/A'
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'

  const handleToggle = (e) => {
    e.preventDefault()
    dispatch(toggleFavorite(movie))
  }

  return (
    <Link to={`/movie/${movie.id}`} className="group h-full overflow-hidden rounded-2xl transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-brand-accent/20 border border-brand-accent/5 hover:border-brand-accent/20">
      {/* Poster image container */}
      <div className="relative overflow-hidden h-80 sm:h-96 bg-gradient-to-br from-brand-accentBright/10 to-brand-pinkBright/10 flex items-center justify-center">
        {movie.poster_path ? (
          <>
            <img
              src={imageUrl(movie.poster_path, 'w500')}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Refined overlay gradient */}
            <div className="absolute inset-0 poster-dark-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-sm text-brand-text font-inter font-semibold line-clamp-2 drop-shadow-md">
                {movie.title}
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-muted">
            <div className="text-center">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-sm">No image</p>
            </div>
          </div>
        )}

        {/* Enhanced favorite button */}
        <button
          onClick={handleToggle}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur transition-all duration-200 z-10 ${
            isFav
              ? 'bg-brand-pink/20 border border-brand-pink/50'
              : 'bg-brand-surface/60 border border-brand-accent/20 hover:bg-brand-surface/80 hover:border-brand-accent/40'
          }`}
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <span className={`text-lg transition-transform duration-200 group-hover:scale-110 ${isFav ? 'text-brand-pink' : 'text-brand-text/70'}`}>
            {isFav ? '❤️' : '🤍'}
          </span>
        </button>
      </div>

      {/* Card content */}
      <div className="p-4 flex-1 flex flex-col bg-gradient-to-b from-brand-surface/30 to-brand-surface/10 border-t border-brand-accent/5 group-hover:border-brand-accent/10 transition-colors duration-300">
        <h3 className="font-inter font-bold text-brand-text mb-2 line-clamp-2 flex-1 text-sm sm:text-base leading-tight group-hover:text-brand-accent transition-colors duration-300">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-brand-muted/80 font-inter">
          <span className="flex items-center gap-1">
            <span>⭐</span>
            <span>{rating}</span>
          </span>
          <span className="text-brand-muted/60">{releaseYear}</span>
        </div>
      </div>
    </Link>
  )
}


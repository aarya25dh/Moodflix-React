import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails, imageUrl, getTrailerUrl } from '../services/tmdb'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../redux/favoritesSlice'
import Loader from '../components/Loader'

export default function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const favorites = useSelector(s => s.favorites.items)
  const isFav = movie && favorites.some(m => m.id === movie.id)

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchMovieDetails(id)
        setMovie(data)
      } catch (err) {
        console.error('Failed to load movie details:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <Loader />
  if (!movie) return <div className="text-center text-brand-muted py-12">Movie not found</div>

  const trailerUrl = getTrailerUrl(movie)

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Backdrop */}
        {movie.backdrop_path && (
          <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden mb-8 shadow-2xl">
            <img
              src={imageUrl(movie.backdrop_path, 'w1280')}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="sm:col-span-1 flex flex-col items-center sm:items-start">
            {movie.poster_path && (
              <div className="card-brand overflow-hidden shadow-2xl mb-4">
                <img
                  src={imageUrl(movie.poster_path, 'w342')}
                  alt={movie.title}
                  className="w-full"
                />
              </div>
            )}
            <button
              onClick={() => dispatch(toggleFavorite(movie))}
              className={`w-full py-2 rounded-lg font-inter font-semibold transition flex items-center justify-center gap-2 ${
                isFav
                  ? 'bg-brand-pink text-brand-bg'
                  : 'bg-brand-accent hover:bg-opacity-90 text-brand-bg'
              }`}
            >
              <span>{isFav ? '❤️' : '🤍'}</span>
              {isFav ? 'Saved' : 'Save'}
            </button>
          </div>

          {/* Details */}
          <div className="sm:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-inter font-bold text-brand-text mb-2">
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="text-brand-pink italic mb-4 font-inter">{movie.tagline}</p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-brand-muted mb-6 border-b border-brand-surface pb-6 font-inter">
              <div>
                <span className="text-brand-amber">Release:</span> {movie.release_date}
              </div>
              <div>
                <span className="text-brand-amber">Rating:</span> ⭐ {movie.vote_average?.toFixed(1)}
              </div>
              {movie.runtime && (
                <div>
                  <span className="text-brand-amber">Runtime:</span> {movie.runtime} min
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-xl font-inter font-bold text-brand-text mb-3">About</h2>
              <p className="text-brand-muted leading-relaxed font-inter">
                {movie.overview || 'No description available.'}
              </p>
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-inter font-bold text-brand-text mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map(g => (
                    <span key={g.id} className="px-4 py-2 bg-brand-surface rounded-full text-sm text-brand-accent font-inter">
                      {g.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trailer */}
            {trailerUrl && (
              <div>
                <h3 className="text-lg font-inter font-bold text-brand-text mb-3">Watch Trailer</h3>
                <a
                  href={trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary-brand"
                >
                  🎬 Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

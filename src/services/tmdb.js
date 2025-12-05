import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE = 'https://api.themoviedb.org/3'

const client = axios.create({
  baseURL: BASE,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
})

/* Genres */
export async function fetchGenres() {
  try {
    const res = await client.get('/genre/movie/list')
    return res.data.genres
  } catch (err) {
    console.error('Failed to fetch genres:', err)
    return []
  }
}

/* Discover by genre IDs with filters */
export async function discoverByGenres(genreIds = [], page = 1, sortBy = 'popularity.desc') {
  try {
    const params = {
      with_genres: genreIds.join(','),
      sort_by: sortBy,
      page,
      'vote_count.gte': 100, // Only movies with at least 100 votes
    }
    const res = await client.get('/discover/movie', { params })
    return res.data
  } catch (err) {
    console.error('Failed to discover movies:', err)
    return { results: [], total_pages: 0 }
  }
}

/* Popular movies */
export async function fetchPopular(page = 1) {
  try {
    const res = await client.get('/movie/popular', { params: { page } })
    return res.data
  } catch (err) {
    console.error('Failed to fetch popular movies:', err)
    return { results: [], total_pages: 0 }
  }
}

/* Top rated movies */
export async function fetchTopRated(page = 1) {
  try {
    const res = await client.get('/movie/top_rated', { params: { page } })
    return res.data
  } catch (err) {
    console.error('Failed to fetch top rated:', err)
    return { results: [], total_pages: 0 }
  }
}

/* Trending movies */
export async function fetchTrending(timeWindow = 'week') {
  try {
    const res = await client.get(`/trending/movie/${timeWindow}`)
    return res.data
  } catch (err) {
    console.error('Failed to fetch trending:', err)
    return { results: [], total_pages: 0 }
  }
}

/* Search movies */
export async function searchMovies(query, page = 1) {
  try {
    const res = await client.get('/search/movie', { params: { query, page } })
    return res.data
  } catch (err) {
    console.error('Failed to search movies:', err)
    return { results: [], total_pages: 0 }
  }
}

/* Movie details with videos, images, credits */
export async function fetchMovieDetails(id) {
  try {
    const res = await client.get(`/movie/${id}`, {
      params: { append_to_response: 'videos,credits,images' }
    })
    return res.data
  } catch (err) {
    console.error('Failed to fetch movie details:', err)
    return null
  }
}

/* Build image URL for TMDB assets */
export function imageUrl(path, size = 'w500') {
  if (!path) return null
  return `https://image.tmdb.org/t/p/${size}${path}`
}

/* Get movie trailer URL if available */
export function getTrailerUrl(movie) {
  if (!movie.videos || !movie.videos.results) return null
  const trailer = movie.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null
}

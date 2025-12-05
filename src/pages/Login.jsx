import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import MoodflixLogo from '../components/MoodflixLogo'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { logIn, signUp } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password)
      } else {
        await logIn(email, password)
      }
      navigate('/moods')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg via-[#16161f] to-brand-bg flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 -left-96 w-96 h-96 bg-gradient-to-br from-brand-accentBright/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-br from-brand-pink/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-brand-surface/30 to-brand-surface/10 border border-brand-accent/10 backdrop-blur-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-3 mb-10">
            <MoodflixLogo size="md" />
            <span className="text-lg font-inter font-black bg-gradient-to-r from-brand-accentBright to-brand-pinkBright bg-clip-text text-transparent">
              Moodflix
            </span>
          </Link>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-inter font-black text-brand-text mb-3 text-center">
            {isSignUp ? 'Join Moodflix' : 'Welcome back'}
          </h1>
          <p className="text-base text-brand-muted/80 text-center mb-10 font-inter font-light leading-relaxed">
            {isSignUp
              ? 'Your emotions deserve better movies.'
              : 'Your personal moodboard of cinema is waiting.'}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-inter font-semibold text-brand-text mb-2.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-brand-surface/40 border border-brand-accent/20 rounded-xl px-4 py-3.5 text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:bg-brand-surface/60 transition-all duration-300 font-inter"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-inter font-semibold text-brand-text mb-2.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-brand-surface/40 border border-brand-accent/20 rounded-xl px-4 py-3.5 text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:bg-brand-surface/60 transition-all duration-300 font-inter"
                placeholder="••••••••"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-900/20 border border-red-500/40 rounded-xl p-3.5 text-sm text-red-300/90 font-inter font-light">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-brand-accentBright to-brand-pinkBright text-brand-bg font-inter font-bold rounded-xl hover:shadow-2xl hover:shadow-brand-accent/40 transition-all duration-300 transform hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed mt-8 text-lg"
            >
              {loading ? 'Loading...' : isSignUp ? 'Create my moodboard' : 'Log in to your vibe'}
            </button>
          </form>

          {/* Toggle */}
          <div className="text-center mt-8 text-sm text-brand-muted/70 font-inter">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            {' '}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError('')
              }}
              className="text-brand-accent hover:text-brand-pink font-inter font-semibold transition-colors duration-300"
            >
              {isSignUp ? 'Log in' : 'Sign up'}
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent my-8" />

          {/* Footer message */}
          <p className="text-xs text-brand-muted/50 text-center font-inter font-light">
            {isSignUp 
              ? "You're in. Let's find your vibe."
              : "Welcome to your emotional cinema."}
          </p>
        </div>
      </div>
    </div>
  )
}

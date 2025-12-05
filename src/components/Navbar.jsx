import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import MoodflixLogo from './MoodflixLogo'

export default function Navbar() {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  async function handleLogout() {
    try {
      await logOut()
      navigate('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-bg/95 backdrop-blur-xl border-b border-brand-accent/10 shadow-lg shadow-brand-accent/5' 
        : 'bg-gradient-to-b from-brand-bg/80 via-brand-bg/60 to-transparent backdrop-blur-md border-b border-brand-accent/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
          <MoodflixLogo size="md" />
          <span className="text-lg font-inter font-semibold hidden sm:inline bg-gradient-to-r from-brand-accentBright to-brand-pinkBright bg-clip-text text-transparent group-hover:from-brand-pinkBright group-hover:to-brand-accentBright transition-all duration-300">
            Moodflix
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/moods" 
            className="text-brand-text/70 hover:text-brand-accent font-inter font-medium transition-all duration-300 relative group"
          >
            Discover
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accentBright to-brand-pinkBright group-hover:w-full transition-all duration-300" />
          </Link>
          <Link 
            to="/favorites" 
            className="text-brand-text/70 hover:text-brand-accent font-inter font-medium transition-all duration-300 relative group"
          >
            Favorites
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accentBright to-brand-pinkBright group-hover:w-full transition-all duration-300" />
          </Link>
          {user ? (
            <>
              <Link 
                to="/profile" 
                className="text-brand-text/70 hover:text-brand-accent font-inter font-medium transition-all duration-300 relative group"
              >
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accentBright to-brand-pinkBright group-hover:w-full transition-all duration-300" />
              </Link>
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 rounded-lg bg-brand-accent/15 hover:bg-brand-accent/25 text-brand-accent font-inter font-medium transition-all duration-300 text-sm border border-brand-accent/30 hover:border-brand-accent/60 hover:shadow-lg hover:shadow-brand-accent/5"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="group px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-accentBright to-brand-pinkBright hover:shadow-xl hover:shadow-brand-accent/20 text-white font-inter font-medium transition-all duration-300 text-sm overflow-hidden relative"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pinkBright to-brand-accentBright opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-15 transition-opacity duration-300 -skew-x-12 -z-10" />
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-accent text-2xl hover:opacity-70 transition-opacity active:scale-95"
        >
          ☰
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-brand-surface/95 via-brand-surface/90 to-brand-bg/80 backdrop-blur-xl border-b border-brand-accent/10 md:hidden shadow-xl animate-slideDown">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/moods" 
                onClick={() => setIsOpen(false)}
                className="block text-brand-text/70 hover:text-brand-accent font-inter font-medium transition-colors duration-300 py-2"
              >
                Discover
              </Link>
              <Link 
                to="/favorites" 
                onClick={() => setIsOpen(false)}
                className="block text-brand-text/70 hover:text-brand-accent font-inter font-medium transition-colors duration-300 py-2"
              >
                Favorites
              </Link>
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    onClick={() => setIsOpen(false)}
                    className="block text-brand-text/70 hover:text-brand-accent font-inter font-medium transition-colors duration-300 py-2"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="w-full px-4 py-2.5 rounded-lg bg-brand-accent/15 hover:bg-brand-accent/25 text-brand-accent font-inter font-medium transition-all duration-300 text-sm border border-brand-accent/30 hover:border-brand-accent/60"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-accentBright to-brand-pinkBright text-white font-inter font-medium transition-all duration-300 text-sm hover:shadow-lg hover:shadow-brand-accent/20"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

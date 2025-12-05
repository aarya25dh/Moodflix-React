import React from 'react'
import { Link } from 'react-router-dom'
import MoodflixLogo from './MoodflixLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-brand-bg/50 via-brand-bg to-brand-bg border-t border-brand-accent/10 mt-20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MoodflixLogo size="md" />
              <span className="text-lg font-inter font-black bg-gradient-to-r from-brand-accentBright to-brand-pinkBright bg-clip-text text-transparent">
                Moodflix
              </span>
            </div>
            <p className="text-sm text-brand-muted/70 leading-relaxed font-inter">
              Cinema that vibes with you. Discover films based on how you feel, not just what's trending.
            </p>
          </div>

          {/* Explore section */}
          <div>
            <h4 className="text-sm font-inter font-black text-brand-text mb-4 uppercase tracking-wider text-brand-accent">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/moods" className="text-sm text-brand-muted/70 hover:text-brand-accent transition-colors duration-300 font-inter">
                  Discover by mood
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-sm text-brand-muted/70 hover:text-brand-accent transition-colors duration-300 font-inter">
                  Your comfort cinema
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-brand-muted/70 hover:text-brand-accent transition-colors duration-300 font-inter">
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          {/* About section */}
          <div>
            <h4 className="text-sm font-inter font-black text-brand-text mb-4 uppercase tracking-wider text-brand-accent">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-brand-muted/70 hover:text-brand-accent transition-colors duration-300 font-inter">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-muted/70 hover:text-brand-accent transition-colors duration-300 font-inter">
                  Our philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-muted/70 hover:text-brand-accent transition-colors duration-300 font-inter">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Taglines section */}
          <div>
            <h4 className="text-sm font-inter font-black text-brand-text mb-4 uppercase tracking-wider text-brand-accent">
              Our Vibe
            </h4>
            <ul className="space-y-2 text-xs text-brand-muted/60 leading-relaxed font-inter">
              <li>• Because feelings deserve a playlist</li>
              <li>• Little moods, big movies</li>
              <li>• Find films that feel like you</li>
              <li>• Where every feeling finds a film</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-muted/50 font-light font-inter">
            © {currentYear} MoodFlix. Powered by{' '}
            <a 
              href="https://www.themoviedb.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-accent/70 hover:text-brand-accent transition-colors"
            >
              The Movie Database
            </a>
            . Feelings matter. So do movies.
          </p>
          <p className="text-xs text-brand-muted/50 font-light font-inter">
            Made with passion, served with cinema.
          </p>
        </div>
      </div>
    </footer>
  )
}

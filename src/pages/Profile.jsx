import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { user, logOut } = useAuth()
  const favorites = useSelector(s => s.favorites.items)
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logOut()
      navigate('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg via-[#16161f] to-brand-bg pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-br from-brand-accentBright/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-br from-brand-pink/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl font-inter font-black text-brand-text mb-3 leading-tight">
            Your mood <span className="bg-gradient-to-r from-brand-accentBright to-brand-pinkBright bg-clip-text text-transparent">history</span>
          </h1>
          <p className="text-lg text-brand-muted/80 font-inter font-light">
            Manage your personal cinema account
          </p>
        </div>

        {/* Main profile card */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-brand-surface/30 to-brand-surface/10 border border-brand-accent/10 backdrop-blur-sm mb-8">
          {/* User email section */}
          <div className="mb-10 pb-10 border-b border-brand-accent/10">
            <p className="text-sm font-inter font-semibold text-brand-accent uppercase tracking-wider mb-2">
              Logged in as
            </p>
            <p className="text-2xl sm:text-3xl font-inter font-bold text-brand-text break-all">{user?.email || 'Loading...'}</p>
          </div>

          {/* Stats grid */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-accentBright/10 to-brand-accentBright/5 border border-brand-accent/20">
              <p className="text-xs font-inter font-bold text-brand-accent uppercase tracking-wider mb-3">
                Comfort Cinema
              </p>
              <p className="text-4xl font-inter font-black text-brand-text mb-2">{favorites.length}</p>
              <p className="text-sm text-brand-muted/70 font-inter">{favorites.length === 1 ? 'film saved' : 'films saved'}</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-pinkBright/10 to-brand-pinkBright/5 border border-brand-pink/20">
              <p className="text-xs font-inter font-bold text-brand-pink uppercase tracking-wider mb-3">
                Account Status
              </p>
              <p className="text-4xl font-inter font-black text-brand-text mb-2">Active</p>
              <p className="text-sm text-brand-muted/70 font-inter">Synced across devices</p>
            </div>
          </div>

          {/* Info section */}
          <div className="mb-10 p-6 rounded-2xl bg-brand-surface/40 border border-brand-accent/10">
            <p className="text-sm text-brand-muted/80 leading-relaxed font-inter">
              🎬 Your saved movies are stored securely in your Moodflix account. Every favorite syncs instantly, so your personal cinema travels with you.
            </p>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="w-full px-6 py-3.5 bg-gradient-to-r from-red-900/30 via-red-900/20 to-red-900/30 hover:from-red-900/50 hover:via-red-900/40 hover:to-red-900/50 border border-red-500/40 hover:border-red-500/60 rounded-xl text-red-300/90 font-inter font-bold transition-all duration-300 text-lg"
          >
            Log out of the vibe
          </button>
        </div>

        {/* Additional info */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-brand-accentBright/5 via-brand-pinkBright/5 to-brand-accentBright/5 border border-brand-accent/10 text-center">
          <p className="text-sm text-brand-muted/70 font-inter font-light">
            Questions? Your data is safe with us. Stored securely in localStorage.
          </p>
        </div>
      </div>
    </div>
  )
}

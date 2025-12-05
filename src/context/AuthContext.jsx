import React, { useEffect, useState } from 'react'
import { AuthContext } from './authContextFactory'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check if user is logged in from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('moodflix_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.error('Failed to parse stored user:', err)
        localStorage.removeItem('moodflix_user')
      }
    }
    setLoading(false)
  }, [])

  async function signUp(email, password) {
    try {
      setError(null)

      // Validate input
      if (!email || !password) {
        throw new Error('Email and password are required')
      }
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }

      // Check if user already exists
      const existingUser = localStorage.getItem(`moodflix_user_${email}`)
      if (existingUser) {
        throw new Error('Email already in use')
      }

      // Create new user
      const newUser = { email, id: Date.now() }
      localStorage.setItem(`moodflix_user_${email}`, JSON.stringify({ email, password, id: newUser.id }))
      localStorage.setItem('moodflix_user', JSON.stringify(newUser))
      setUser(newUser)
      return newUser
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  async function logIn(email, password) {
    try {
      setError(null)

      // Validate input
      if (!email || !password) {
        throw new Error('Email and password are required')
      }

      // Check credentials
      const storedCreds = localStorage.getItem(`moodflix_user_${email}`)
      if (!storedCreds) {
        throw new Error('Invalid email or password')
      }

      const creds = JSON.parse(storedCreds)
      if (creds.password !== password) {
        throw new Error('Invalid email or password')
      }

      const userData = { email, id: creds.id }
      localStorage.setItem('moodflix_user', JSON.stringify(userData))
      setUser(userData)
      return userData
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  async function logOut() {
    try {
      setError(null)
      localStorage.removeItem('moodflix_user')
      setUser(null)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}


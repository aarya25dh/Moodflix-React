import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

let app = null
let auth = null

// Initialize Firebase if env vars are present
const hasFirebaseConfig = 
  import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_AUTH_DOMAIN &&
  import.meta.env.VITE_FIREBASE_PROJECT_ID &&
  import.meta.env.VITE_FIREBASE_APP_ID

if (hasFirebaseConfig) {
  try {
    const config = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    }
    app = initializeApp(config)
    auth = getAuth(app)
    console.log('✅ Firebase initialized successfully')
  } catch (err) {
    console.error('❌ Firebase initialization failed:', err.message)
  }
} else {
  console.warn('⚠️ Firebase config not found in .env. Auth features disabled.')
  // Create mock auth object to prevent runtime errors
  auth = {
    signInWithEmailAndPassword: () => Promise.reject(new Error('Firebase not configured')),
    createUserWithEmailAndPassword: () => Promise.reject(new Error('Firebase not configured')),
    signOut: () => Promise.reject(new Error('Firebase not configured')),
    onAuthStateChanged: (callback) => {
      callback(null)
      return () => {}
    },
  }
}

export { auth, app }

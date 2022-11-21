import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import {
  getAuth,
  Auth,
  setPersistence,
  browserLocalPersistence,
  connectAuthEmulator,
} from 'firebase/auth'

export default () => {
  const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
  }

  const app: FirebaseApp = initializeApp(firebaseConfig)

  const auth: Auth = getAuth()
  setPersistence(auth, browserLocalPersistence)

  //@ts-ignore
  if (window.Cypress) {
    //@ts-ignore
    async function setupEmulators(auth) {
      const authUrl = 'http://localhost:9099'
      await fetch(authUrl)
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
      // why? to make sure that emulator are loaded
    }
    

    setupEmulators(auth)
  }

  return {
    app,
    auth,
  }
}
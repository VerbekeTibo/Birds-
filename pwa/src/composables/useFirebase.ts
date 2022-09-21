import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import {
  getAuth,
  Auth,
  setPersistence,
  browserLocalPersistence,
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

  return {
    app,
    auth,
  }
}
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import { Ref, ref } from 'vue'

export default () => {
  const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.apiKey,
    authDomain: import.meta.env.authDomain,
    projectId: import.meta.env.projectId,
    storageBucket: import.meta.env.storageBucket,
    messagingSenderId: import.meta.env.messagingSenderId,
    appId: import.meta.env.appId,
  }

  const app: FirebaseApp = initializeApp(firebaseConfig)

  return {
    app,
  }
}

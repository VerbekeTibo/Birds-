import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env:{
    APP_URL: 'http://localhost:5173',

    FIREBASE_EMULATION_URL:'http://127.0.0.1:9099',

    USER:'Tibo Verbeke',
    EMAIL:'tibo.verbeke@gmail.com',
    PASSWORD:'I♥Birds'
  },
})
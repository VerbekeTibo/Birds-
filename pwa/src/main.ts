import { App as VueApp, createApp } from 'vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'


import App from './App.vue'

import router from './bootstrap/router'
import useAuthentication from './composables/useAuthentication'
import usei18n from './composables/usei18n'

//COMPOSABLES
const { restoreUser } = useAuthentication()
const { i18n, loadLocale } = usei18n()

//APP INSTANCE
const app: VueApp = createApp(App)

//I18N
loadLocale()
app.use(i18n)

  ; (async function () {
    await restoreUser()

    app.use(router)
    app.mount('#app')
  })()

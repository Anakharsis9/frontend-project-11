import './scss/styles.scss'
import i18next from 'i18next'
import resources from './locales/index.js'
import initApp from './app.js'

document.addEventListener('DOMContentLoaded', () => {
  i18next
    .init({
      lng: 'ru',
      debug: false,
      resources,
    })
    .then(initApp)
})

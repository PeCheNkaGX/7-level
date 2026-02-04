import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

// Импорт переводов
import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'

// Настройка i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en', // язык по умолчанию
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    es
  }
})

// Определите язык из localStorage или браузера
const savedLocale = localStorage.getItem('locale')
if (savedLocale && ['en', 'ru', 'es'].includes(savedLocale)) {
  i18n.global.locale.value = savedLocale
} else {
  // Определение языка браузера
  const browserLang = navigator.language.split('-')[0]
  if (['en', 'ru', 'es'].includes(browserLang)) {
    i18n.global.locale.value = browserLang
  }
}

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
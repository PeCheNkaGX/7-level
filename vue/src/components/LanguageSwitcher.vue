<template>
  <div class="language-switcher">
    <label for="language-select">{{ $t('select_language') }}:</label>
    <select 
      id="language-select" 
      v-model="selectedLocale" 
      @change="changeLanguage"
      class="language-select"
    >
      <option value="en">🇺🇸 English</option>
      <option value="ru">🇷🇺 Русский</option>
      <option value="es">🇪🇸 Español</option>
    </select>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()
    
    const changeLanguage = (event) => {
      const newLocale = event.target.value
      locale.value = newLocale
      localStorage.setItem('locale', newLocale)
    }
    
    return {
      selectedLocale: locale,
      changeLanguage
    }
  }
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: white;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.language-select {
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.language-select:focus {
  outline: none;
  border-color: #42b883;
}
</style>
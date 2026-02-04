<template>
  <div class="home">
    <LanguageSwitcher />
    
    <header class="hero">
      <h1>{{ $t('welcome') }}</h1>
      <p class="subtitle">{{ $t('description') }}</p>
    </header>

    <main class="main-content">
      <section class="features-section">
        <h2>{{ $t('features') }}</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">
              <span>{{ getFeatureIcon(index) }}</span>
            </div>
            <h3>{{ $t(`feature${index + 1}`) }}</h3>
            <p>{{ $t(`feature${index + 1}_desc`) }}</p>
          </div>
        </div>
      </section>

      <section class="destinations-section">
        <h2>{{ $t('popular_destinations') }}</h2>
        <div class="destinations-grid">
          <div 
            class="destination-card" 
            v-for="destination in destinations" 
            :key="destination.id"
            :style="{ backgroundImage: `url(${destination.image})` }"
          >
            <div class="destination-overlay">
              <h3>{{ $t(destination.nameKey) }}</h3>
              <p>{{ $t(destination.descKey) }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>Travel Explorer © {{ currentYear }}</p>
      <p>{{ $t('language') }}: {{ currentLanguage }}</p>
    </footer>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'HomeView',
  components: {
    LanguageSwitcher
  },
  setup() {
    const { locale } = useI18n()
    
    const features = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ]
    
    const destinations = [
      {
        id: 1,
        nameKey: 'paris',
        descKey: 'paris_desc',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        nameKey: 'tokyo',
        descKey: 'tokyo_desc',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        nameKey: 'newyork',
        descKey: 'newyork_desc',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        nameKey: 'bali',
        descKey: 'bali_desc',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
    
    const getFeatureIcon = (index) => {
      const icons = ['🗺️', '👨‍🏫', '💡', '🎭']
      return icons[index]
    }
    
    const currentYear = new Date().getFullYear()
    
    const currentLanguage = {
      'en': 'English',
      'ru': 'Русский',
      'es': 'Español'
    }[locale.value]
    
    return {
      features,
      destinations,
      getFeatureIcon,
      currentYear,
      currentLanguage
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero {
  text-align: center;
  padding: 100px 20px 60px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.features-section,
.destinations-section {
  margin-bottom: 60px;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: #35495e;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #42b883;
  margin-bottom: 15px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.destination-card {
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.destination-card:hover .destination-overlay {
  transform: translateY(0);
}

.destination-card h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.footer {
  text-align: center;
  padding: 30px;
  background: #35495e;
  color: white;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .features-grid,
  .destinations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
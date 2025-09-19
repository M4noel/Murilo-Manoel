import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Importando bibliotecas de animação
import AOS from 'aos'
import 'aos/dist/aos.css'

// Importando Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

// Importando Vercel Analytics e Speed Insights
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

// Inicializando AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

// Inicializando Vercel Analytics e Speed Insights
inject()
injectSpeedInsights()

const app = createApp(App)
app.use(router)
app.mount('#app')

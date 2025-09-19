import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Importando bibliotecas de animação
import AOS from 'aos'
import 'aos/dist/aos.css'

// Importando Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

// Inicializando AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

const app = createApp(App)
app.use(router)
app.mount('#app')

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Footer from './components/Footer.vue';
import ChatWidget from './components/ChatWidget.vue';
import { useTheme } from './composables/useTheme';

const router = useRouter();
const isMenuOpen = ref(false);
const { isDark, toggleTheme, initTheme } = useTheme();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="app-container">
    <header class="header" :class="{ 'menu-open': isMenuOpen }">
      <div class="logo" @click="router.push('/')">
        <span class="logo-text"><span class="highlight">Murilo</span></span>
      </div>
      
      <div class="menu-toggle" @click="toggleMenu">
        <div class="hamburger" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav class="nav-menu" :class="{ 'active': isMenuOpen }">
        <ul>
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu">Sobre</router-link></li>
          <!-- <li><router-link to="/portfolio" @click="closeMenu">Portfólio</router-link></li> -->
          <li><router-link to="/contact" @click="closeMenu">Contato</router-link></li>
        </ul>
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </nav>
    </header>
    
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- Chat Widget -->
    <ChatWidget />
  </div>
   <Footer />
</template>

<style lang="scss">
:root {
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
  --dark-color: #1f2937;
  --light-color: #f9fafb;
  --text-color: #000000;
  --accent-color: #8b5cf6;
  --bg-color: #ffffff;
  --card-bg: #ffffff;
  --header-bg: rgba(255, 255, 255, 0.95);
  --border-color: rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-heavy: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.dark-mode {
  --primary-color: #6366f1;
  --secondary-color: #10b981;
  --dark-color: #f9fafb;
  --light-color: #0a0a0a;
  --text-color: #ffffff;
  --accent-color: #a78bfa;
  --bg-color: #0a0a0a;
  --card-bg: #1a1a1a;
  --header-bg: rgba(10, 10, 10, 0.95);
  --border-color: rgba(255, 255, 255, 0.1);
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
  --shadow-heavy: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  line-height: 1.6;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

// Scrollbar personalizada
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--light-color);
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: 10px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gradient-secondary);
}

.dark-mode {
  ::-webkit-scrollbar-track {
    background: var(--bg-color);
  }
}

// Seleção de texto personalizada
::selection {
  background: rgba(79, 70, 229, 0.2);
  color: var(--dark-color);
}

::-moz-selection {
  background: rgba(79, 70, 229, 0.2);
  color: var(--dark-color);
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--header-bg);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: var(--shadow-light);
  transition: all var(--transition-speed) ease, transform 0.3s ease;
  border-bottom: 1px solid var(--border-color);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-medium);
  }
}

.logo {
  cursor: pointer;
  z-index: 101;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}

.highlight {
  color: var(--primary-color);
}

.menu-toggle {
  display: none;
  z-index: 101;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--text-color);
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: all 0.25s ease-in-out;
    
    &:nth-child(1) {
      top: 0px;
    }
    
    &:nth-child(2) {
      top: 9px;
    }
    
    &:nth-child(3) {
      top: 18px;
    }
  }
  
  &.active {
    span {
      &:nth-child(1) {
        top: 9px;
        transform: rotate(135deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      
      &:nth-child(3) {
        top: 9px;
        transform: rotate(-135deg);
      }
    }
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  ul {
    display: flex;
    list-style: none;
    
    li {
      margin-left: 2rem;
      
      a {
        color: var(--text-color);
        text-decoration: none;
        font-weight: 500;
        position: relative;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: all var(--transition-speed) ease;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 8px;
          opacity: 0;
          transform: scale(0.8);
          transition: all var(--transition-speed) ease;
          z-index: -1;
        }
        
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width var(--transition-speed) ease;
        }
        
        &:hover {
          color: white;
          transform: translateY(-2px);
          
          &::before {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        &.router-link-active {
          color: var(--primary-color);
          
          &::after {
            width: 80%;
          }
        }
      }
    }
  }
}

main {
  flex: 1;
  margin-top: 70px;
}

// Botão de Tema
.theme-toggle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }
  
  i {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: var(--shadow-medium);
    border-color: var(--primary-color);
    
    &::before {
      opacity: 0.1;
    }
    
    i {
      transform: rotate(20deg);
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
}

// Animações de página
.page-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

// Responsividade
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--card-bg);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    padding-top: 80px;
    transition: right var(--transition-speed) ease;
    
    &.active {
      right: 0;
    }
    
    ul {
      flex-direction: column;
      
      li {
        margin: 1rem 2rem;
        
        a {
          display: block;
          font-size: 1.2rem;
        }
      }
    }
    
    .theme-toggle {
      margin: 2rem;
    }
  }
}
</style>

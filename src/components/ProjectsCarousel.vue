<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentSlide = ref(0);
const isAutoPlaying = ref(true);
const autoPlayInterval = ref(null);

// Lista de projetos em destaque
const projects = ref([
  {
    id: 1,
    title: 'Casas Búzios',
    description: 'Portal de casas de veraneio em Búzios com foco em investimento e locação por temporada.',
    url: 'https://casas-buzios.vercel.app/',
    gradient: 'linear-gradient(90deg, #0ea5e9, #06b6d4, #0284c7)',
    color: '#0ea5e9'
  },
  {
    id: 2,
    title: 'VIVA Búzios Geribá',
    description: 'Casas duplex de alto padrão em Geribá com lazer completo, fitness e portaria 24h.',
    url: 'https://viva-b-zios-2-residence.vercel.app/',
    gradient: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9)',
    color: '#8b5cf6'
  },
  {
    id: 3,
    title: 'MBLoft Icaraí',
    description: 'Studios funcionais em Icaraí, tecnologia, segurança e área de lazer completa.',
    url: 'https://mbloft-icarai-site.vercel.app/',
    gradient: 'linear-gradient(90deg, #10b981, #059669, #047857)',
    color: '#10b981'
  },
  {
    id: 4,
    title: 'CONVIVA Life Ingá',
    description: 'Studios, 1 e 2 quartos no Ingá com lazer no rooftop e conveniências.',
    url: 'https://conviva-life-inga.vercel.app/',
    gradient: 'linear-gradient(90deg, #f59e0b, #ea580c, #d97706)',
    color: '#f59e0b'
  },
  {
    id: 5,
    title: 'Da Vince Icaraí',
    description: 'Studios e apartamentos de alto padrão com design inteligente e rooftop.',
    url: 'https://da-vind-new.vercel.app/',
    gradient: 'linear-gradient(90deg, #ec4899, #db2777, #be185d)',
    color: '#ec4899'
  },
  {
    id: 6,
    title: 'Empreendimentos Niterói',
    description: 'Seu imóvel dos sonhos com infraestrutura completa. Investimento imobiliário e qualidade de vida em Niterói.',
    url: 'https://www.xn--lanamentosniteroi-csb.com.br/',
    gradient: 'linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)',
    color: '#3b82f6'
  },
  {
    id: 7,
    title: 'Conviva Life Camboinhas',
    description: 'Apartamentos de 1, 2 e 3 quartos com lazer completo e sustentabilidade.',
    url: 'https://conviva-life-camboinhas.vercel.app/',
    gradient: 'linear-gradient(90deg, #14b8a6, #0d9488, #0f766e)',
    color: '#14b8a6'
  },
  {
    id: 8,
    title: 'Conviva Camboinhas',
    description: '1 quarto e Double Suite com wellness, convivência e localização privilegiada.',
    url: 'https://conviva-camboinhas.vercel.app/',
    gradient: 'linear-gradient(90deg, #a855f7, #9333ea, #7e22ce)',
    color: '#a855f7'
  },
  {
    id: 9,
    title: 'Conviva Piratininga',
    description: 'Studios prontos para morar com conveniências e rooftop com piscina e sauna.',
    url: 'https://conviva-piratininga.vercel.app/',
    gradient: 'linear-gradient(90deg, #f97316, #ea580c, #c2410c)',
    color: '#f97316'
  }
]);

const totalSlides = computed(() => projects.value.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoPlay = () => {
  if (autoPlayInterval.value) return;
  autoPlayInterval.value = setInterval(() => {
    if (isAutoPlaying.value) {
      nextSlide();
    }
  }, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

const pauseAutoPlay = () => {
  isAutoPlaying.value = false;
};

const resumeAutoPlay = () => {
  isAutoPlaying.value = true;
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <div class="projects-carousel-container" 
       @mouseenter="pauseAutoPlay" 
       @mouseleave="resumeAutoPlay">
    <div class="carousel-wrapper">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="project in projects" 
             :key="project.id" 
             class="carousel-slide">
          <div class="project-showcase">
            <div class="project-preview">
              <div class="iframe-wrapper">
                <iframe 
                  v-if="Math.abs(currentSlide - projects.indexOf(project)) <= 1"
                  :src="project.url" 
                  :title="project.title"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  importance="low"
                ></iframe>
                <div v-else class="iframe-placeholder">
                  <i class="fas fa-spinner fa-spin"></i>
                </div>
              </div>
              <div class="preview-overlay" :style="{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)` }">
                <div class="overlay-content">
                  <a :href="project.url" target="_blank" class="btn-view-project">
                    <i class="fas fa-external-link-alt"></i>
                    Ver Projeto Completo
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <div class="project-number" :style="{ background: project.gradient }">
                {{ String(project.id).padStart(2, '0') }}
              </div>
              <h3 class="project-title" :style="{ color: project.color }">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-actions">
                <button class="btn-action primary" @click="router.push('/contact')">
                  <i class="fas fa-envelope"></i>
                  Contato
                </button>
                <a :href="project.url" target="_blank" class="btn-action secondary">
                  <i class="fas fa-arrow-right"></i>
                  Visitar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Controles do Carrossel -->
      <button class="carousel-control prev" @click="prevSlide" aria-label="Projeto anterior">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-control next" @click="nextSlide" aria-label="Próximo projeto">
        <i class="fas fa-chevron-right"></i>
      </button>
      
      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button 
          v-for="(project, index) in projects" 
          :key="index"
          :class="['indicator', { active: currentSlide === index }]"
          @click="goToSlide(index)"
          :aria-label="`Ir para projeto ${index + 1}`"
        >
          <span class="indicator-line"></span>
        </button>
      </div>
      
      <!-- Contador -->
      <div class="carousel-counter">
        <span class="current">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
        <span class="separator">/</span>
        <span class="total">{{ String(totalSlides).padStart(2, '0') }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-carousel-container {
  max-width: 1400px;
  margin: 0 auto 6rem;
  position: relative;
  padding: 0 1rem;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background: var(--card-bg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--border-color);
}

.carousel-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.project-showcase {
  position: relative;
  width: 100%;
  min-height: 700px;
  
  @media (max-width: 968px) {
    min-height: 500px;
  }
}

.project-preview {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #000;
  
  .iframe-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    
    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      transform: scale(1);
      transition: transform 0.6s ease;
    }
    
    .iframe-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-size: 3rem;
    }
  }
  
  .preview-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    backdrop-filter: blur(0px);
    opacity: 0;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .overlay-content {
      transform: translateY(30px);
      transition: transform 0.5s ease;
    }
  }
  
  &:hover {
    .preview-overlay {
      opacity: 1;
      backdrop-filter: blur(4px);
    }
    
    .overlay-content {
      transform: translateY(0);
    }
    
    iframe {
      transform: scale(1.05);
    }
  }
}

.btn-view-project {
  padding: 1.2rem 2.5rem;
  background: white;
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  i {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    
    i {
      transform: translateX(5px);
    }
  }
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85), transparent);
  color: white;
  z-index: 5;
  
  @media (max-width: 968px) {
    padding: 2rem 1.5rem;
  }
}

.project-number {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  width: fit-content;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.project-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -1px;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 968px) {
    font-size: 1.8rem;
  }
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  
  @media (max-width: 968px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-action {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  border: none;
  text-decoration: none;
  
  i {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }
  
  &.primary {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4);
      
      i {
        transform: scale(1.1);
      }
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: var(--primary-color);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
      
      i {
        transform: translateX(5px);
      }
    }
  }
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--border-color);
  color: var(--primary-color);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    background: var(--primary-color);
    color: white;
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.3);
  }
  
  &.prev {
    left: 10px;
    
    @media (max-width: 968px) {
      left: 10px;
    }
  }
  
  &.next {
    right: 20px;
    
    @media (max-width: 968px) {
      right: 10px;
    }
  }
  
  @media (max-width: 968px) {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}

.carousel-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
  
  @media (max-width: 968px) {
    bottom: 20px;
    gap: 0.7rem;
  }
}

.indicator {
  width: 50px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  @media (max-width: 968px) {
    width: 35px;
    height: 3px;
  }
  
  .indicator-line {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.5);
    
    .indicator-line {
      width: 100%;
      animation: indicatorProgress 5s linear;
    }
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: scaleY(1.5);
  }
}

@keyframes indicatorProgress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.carousel-counter {
  position: absolute;
  top: 30px;
  right: 30px;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  @media (max-width: 968px) {
    top: 20px;
    right: 20px;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
  }
  
  .current {
    color: var(--primary-color);
    font-size: 1.5rem;
    
    @media (max-width: 968px) {
      font-size: 1.2rem;
    }
  }
  
  .separator {
    color: var(--text-color);
    opacity: 0.3;
    margin: 0 0.3rem;
  }
  
  .total {
    color: var(--text-color);
    opacity: 0.5;
  }
}
</style>

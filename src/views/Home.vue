<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});

const scrollToProjects = () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content" :class="{ 'visible': isVisible }">
        <h1 class="hero-title">
          <span class="greeting">Olá, eu sou</span>
          <span class="name">Murilo Manoel</span>
          <span class="role">Desenvolvedor Web | Transformando ideias em <span class="highlight">experiências digitais</span></span>
        </h1>
        
        <p class="hero-description" data-aos="fade-up" data-aos-delay="300">
          Especializado em criar soluções web modernas, responsivas e de alta performance para empresas e empreendedores.
        </p>
        
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="500">
          <!-- <button class="btn primary" @click="router.push('/portfolio')">Ver Portfólio</button> -->
          <button class="btn secondary" @click="router.push('/contact')">Contato</button>
        </div>
        
        <div class="scroll-indicator" @click="scrollToProjects">
          <span>Rolar para baixo</span>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      
      <div class="hero-background">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="services-section" id="services">
      <h2 class="section-title" data-aos="fade-up">Minhas Competências</h2>
      
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
          <div class="service-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>Desenvolvimento Web</h3>
          <p>Experiência em criar sites e aplicações web modernas, responsivas e otimizadas para SEO.</p>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="service-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Design Responsivo</h3>
          <p>Desenvolvimento de interfaces que se adaptam perfeitamente a qualquer dispositivo, do desktop ao smartphone.</p>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="service-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <h3>E-commerce</h3>
          <p>Conhecimento em desenvolvimento de lojas virtuais com sistemas de pagamento, gestão de estoque e relatórios.</p>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="400">
          <div class="service-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>SEO & Performance</h3>
          <p>Experiência em otimização para mecanismos de busca e melhoria de performance de aplicações web.</p>
        </div>
      </div>
    </section>
    
    <!-- Projects Preview Section -->
    <section class="projects-section" id="projects">
      <h2 class="section-title" data-aos="fade-up">Projetos Recentes</h2>
      
      <div class="projects-grid">
        <!-- Escola de Música Harmony -->
        <div class="project-card harmony-card" data-aos="fade-up" data-aos-delay="100">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://lp-escola-de-musica.vercel.app/" 
                title="Escola de Música Harmony - Landing Page"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
              <div class="live-indicator">
                <span class="live-dot"></span>
                <span>AO VIVO</span>
              </div>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://lp-escola-de-musica.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Escola de Música Harmony</h3>
            <p>Landing page moderna e atrativa para escola de música, com design responsivo e otimizada para conversões. Focada em despertar o talento musical dos visitantes.</p>
            <div class="project-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Responsive</span>
              <span>SEO</span>
            </div>
          </div>
        </div>
        
        <!-- Advocacia Dr. João Silva -->
        <div class="project-card advocacia-card" data-aos="fade-up" data-aos-delay="200">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://lp-advocacia-five.vercel.app/" 
                title="Advocacia Dr. João Silva - Site Profissional"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
              <div class="live-indicator legal">
                <span class="live-dot"></span>
                <span>AO VIVO</span>
              </div>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://lp-advocacia-five.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Advocacia Dr. João Silva</h3>
            <p>Site profissional para escritório de advocacia, transmitindo credibilidade e excelência em direito. Design elegante e informações claras sobre os serviços jurídicos.</p>
            <div class="project-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Professional</span>
              <span>Legal</span>
            </div>
          </div>
        </div>
        
        <div class="project-card smartfiles-card" data-aos="fade-up" data-aos-delay="400">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://smart-file-eta.vercel.app/" 
                title="SmartFiles - Ferramentas Online"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
              <div class="live-indicator">
                <span class="live-dot"></span>
                <span>AO VIVO</span>
              </div>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/portfolio')">Ver Detalhes</button>
                <a href="https://smart-file-eta.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>SmartFiles</h3>
            <p>Plataforma completa de ferramentas online: compressão de imagens, edição de PDFs, conversor de arquivos, gerador de QR Code e ferramentas de IA.</p>
            <div class="project-tags">
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>PDF.js</span>
              <span>Canvas API</span>
              <span>IA Tools</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-all-projects" data-aos="fade-up">
        <!-- <button class="btn primary" @click="router.push('/portfolio')">Ver Todos os Projetos</button> -->
      </div>
    </section>
    
    <!-- Why Choose My Work Section -->
    <section class="why-choose-section">
      <h2 class="section-title" data-aos="fade-up">Por que Escolher Meu Trabalho?</h2>
      
      <div class="why-choose-container">
        <div class="why-choose-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>Código Limpo e Organizado</h3>
          <p>Desenvolvimento seguindo as melhores práticas e padrões da indústria, garantindo facilidade de manutenção e escala.</p>
        </div>
        
        <div class="why-choose-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-icon">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Entrega no Prazo</h3>
          <p>Comprometimento com cronogramas estabelecidos e comunicação constante sobre o progresso do projeto.</p>
        </div>
        
        <div class="why-choose-card" data-aos="fade-up" data-aos-delay="300">
          <div class="card-icon">
            <i class="fas fa-comments"></i>
          </div>
          <h3>Comunicação Clara</h3>
          <p>Feedback constante, relatórios de progresso e total transparência em todas as etapas do desenvolvimento.</p>
        </div>
        
        <div class="why-choose-card last-card" data-aos="fade-up" data-aos-delay="400">
          <div class="card-icon">
            <i class="fas fa-tools"></i>
          </div>
          <h3>Suporte Pós-Lançamento</h3>
          <p>Acompanhamento após a entrega, correções necessárias e orientações para o melhor uso da solução.</p>
        </div>
      </div>
    </section>
    
    <!-- GitHub Section -->
    <section class="github-section" data-aos="fade-up">
      <h2 class="section-title">Meu GitHub</h2>
      <div class="github-content">
        <div class="github-info">
          <h3>Acompanhe meus projetos</h3>
          <p>Confira meus repositórios, contribuições e atividades no GitHub. Aqui você encontra projetos pessoais.</p>
          <a href="https://github.com/M4noel" target="_blank" class="btn primary">Visitar GitHub</a>
        </div>
        <div class="github-iframe-container">
          <img src="/src/assets/GitHub___headpic.jpg" alt="" data-v-2dc54a20="" style=" max-width: 721px; border-radius: 20px;">
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section" data-aos="fade-up">
      <div class="cta-content">
        <h2>Vamos criar algo incrível juntos?</h2>
        <p>Estou sempre aberto a novos desafios e oportunidades. Entre em contato para conversarmos sobre projetos ou parcerias.</p>
        <button class="btn primary large" @click="router.push('/contact')">Vamos Conversar</button>
      </div>
    </section>
  </div>
</template>

<script>
  async function loadGitHubProfile() {
    const username = "M4noel"; 
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name || data.login;
    document.getElementById("bio").textContent = data.bio || "Sem bio...";
    document.getElementById("repos").textContent = data.public_repos;
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("profile-link").href = data.html_url;
  }

  loadGitHubProfile();
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
}

// Hero Section
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  
  .greeting {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  .name {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
  }
  
  .role {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-color);
  }
  
  .highlight {
    color: var(--primary-color);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(79, 70, 229, 0.2);
      z-index: -1;
    }
  }
}

.hero-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: var(--text-color);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.scroll-indicator {
  position: absolute;
    bottom: 0rem;
    left: 43%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    animation: bounce-2dc54a20 2s infinite;
    top: 100%;
  
  span {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    opacity: 0.7;
  }
  
  i {
    font-size: 1.2rem;
    color: var(--primary-color);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse-live {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
}

.shape-1 {
  top: 20%;
  right: 15%;
  width: 300px;
  height: 300px;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color));
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  bottom: 10%;
  left: 10%;
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, var(--secondary-color), #06b6d4);
  animation: float 12s ease-in-out infinite;
}

.shape-3 {
  top: 40%;
  left: 25%;
  width: 150px;
  height: 150px;
  background: linear-gradient(to right, #f59e0b, #ef4444);
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(20px, 20px) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

// Services Section
.services-section {
  padding: 6rem 2rem;
  background-color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background-color: white;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-light);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-heavy);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  h3 {
    margin: 1.5rem 0 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: var(--text-color);
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

.service-icon {
  width: 90px;
  height: 90px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: var(--gradient-accent);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    
    &::before {
      opacity: 1;
    }
  }
  
  i {
    font-size: 2.2rem;
    color: white;
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: scale(1.1);
  }
}

// Projects Section
.projects-section {
  padding: 6rem 2rem;
  background-color: #f8fafc;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    
    .project-overlay {
      opacity: 1;
    }
  }
  
  &.smartfiles-card {
    border: 2px solid #e5e7eb;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
      z-index: 1;
    }
    
    &:hover {
      border-color: #3b82f6;
      
      .iframe-container iframe {
        transform: scale(1.02);
      }
      
      .live-indicator {
        .live-dot {
          animation-duration: 0.8s;
        }
      }
    }
  }
  
  &.harmony-card {
    border: 2px solid #e5e7eb;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #f59e0b, #ef4444, #ec4899);
      z-index: 1;
    }
    
    &:hover {
      border-color: #f59e0b;
      
      .iframe-container iframe {
        transform: scale(1.02);
      }
      
      .live-indicator {
        background: rgba(245, 158, 11, 0.95);
        
        .live-dot {
          animation-duration: 0.8s;
        }
      }
    }
  }
  
  &.advocacia-card {
    border: 2px solid #e5e7eb;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #374151, #1f2937, #111827);
      z-index: 1;
    }
    
    &:hover {
      border-color: #374151;
      
      .iframe-container iframe {
        transform: scale(1.02);
      }
      
      .live-indicator.legal {
        background: rgba(55, 65, 81, 0.95);
        
        .live-dot {
          animation-duration: 0.8s;
        }
      }
    }
  }
  
  h3 {
    padding: 1.5rem 1.5rem 0.5rem;
    font-size: 1.3rem;
    margin: 0;
  }
  
  .project-content {
    padding: 0 1.5rem 1.5rem;
    
    h3 {
      padding: 1.5rem 0 0.5rem;
      font-size: 1.3rem;
      margin: 0;
      color: var(--dark-color);
    }
    
    p {
      margin: 0 0 1rem;
      color: var(--text-color);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
  
  p {
    padding: 0 1.5rem 1rem;
    color: var(--text-color);
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

.project-image {
  position: relative;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  
  .image-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
  }
  
  .iframe-container {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #f8f9fa;
    
    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      transition: all 0.3s ease;
    }
    
    .live-indicator {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(220, 38, 38, 0.95);
      backdrop-filter: blur(10px);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.7rem;
      font-weight: 600;
      z-index: 10;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      
      .live-dot {
        width: 6px;
        height: 6px;
        background: white;
        border-radius: 50%;
        animation: pulse-live 1.5s ease-in-out infinite;
      }
    }
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 41, 55, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1.5rem 1.5rem;
  
  span {
    background-color: rgba(79, 70, 229, 0.1);
    color: var(--primary-color);
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
  }
}

.view-all-projects {
  text-align: center;
  margin-top: 3rem;
}

// Why Choose My Work Section
.why-choose-section {
  padding: 6rem 2rem;
  background-color: white;
}

.why-choose-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.why-choose-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
    
    .card-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }
  
  .card-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    transition: all 0.4s ease;
    
    i {
      font-size: 2.2rem;
      color: white;
    }
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--dark-color);
  }
  
  p {
    color: var(--text-color);
    line-height: 1.6;
    font-size: 1rem;
  }
}

// GitHub Section
.github-section {
  padding: 6rem 2rem;
  background-color: #f8fafc;
  overflow: hidden;
}

.github-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.github-info {
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--dark-color);
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-color);
    margin-bottom: 2rem;
  }
}

.github-iframe-container {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: white;
  border: 1px solid #e5e7eb;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(135deg, #24292f, #1f2328);
    z-index: 1;
  }
  
  &::after {
    content: '🔴🟡🟢';
    position: absolute;
    top: 12px;
    left: 15px;
    color: #8b949e;
    font-size: 12px;
    z-index: 2;
  }
  
  iframe {
    display: block;
    border: none;
    padding-top: 40px;
    background: white;
  }
}

// CTA Section
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
}

// Buttons
.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-light);
    
    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: var(--shadow-heavy);
      background: var(--gradient-secondary);
    }
  }
  
  &.secondary {
    background: transparent;
    color: var(--text-color);
    border: 2px solid var(--primary-color);
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      color: white;
      transform: translateY(-3px);
      
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
  
  &.small {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }
  
  &.large {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
}

// Responsive
@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    .name {
      font-size: 2.5rem;
    }
    
    .role {
      font-size: 1.5rem;
    }
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid,
  .projects-grid,
  .why-choose-container {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    &.harmony-card,
    &.advocacia-card,
    &.smartfiles-card {
      .project-image {
        height: 180px;
      }
      
      .iframe-container {
        iframe {
          transform: scale(0.8);
          transform-origin: top left;
          width: 125%;
          height: 125%;
        }
        
        .live-indicator {
          right: 5px;
          top: 5px;
          padding: 0.2rem 0.6rem;
          font-size: 0.65rem;
          
          .live-dot {
            width: 5px;
            height: 5px;
          }
        }
      }
    }
    
    .project-content {
      padding: 1rem;
      
      h3 {
        font-size: 1.2rem;
        padding: 0.5rem 0;
      }
      
      p {
        font-size: 0.9rem;
        margin-bottom: 0.8rem;
      }
    }
    
    .project-tags {
      padding: 0 1rem 1rem;
      gap: 0.4rem;
      
      span {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
      }
    }
  }
  
  .cta-content {
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  .github-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    .github-iframe-container iframe {
      height: 400px;
    }
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 4rem 1rem;
  }
  
  .project-card {
    &.harmony-card,
    &.advocacia-card,
    &.smartfiles-card {
      .project-image {
        height: 160px;
      }
      
      .iframe-container {
        iframe {
          transform: scale(0.7);
          width: 143%;
          height: 143%;
        }
      }
    }
    
    .project-content {
      h3 {
        font-size: 1.1rem;
      }
      
      p {
        font-size: 0.85rem;
      }
    }
    
    .project-actions {
      flex-direction: column;
      gap: 0.5rem;
      
      .btn {
        font-size: 0.85rem;
        padding: 0.6rem 1rem;
      }
    }
  }
}
.last-card {
  left: 110%;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';

const experiences = ref([
  {
    id: 1,
    role: 'Desenvolvedor Web',
    company: 'MZ Group',
    period: '2025',
    description: 'Desenvolvimento e manutenção de interfaces web com foco em front-end. Implementação de projetos em WordPress, desenvolvendo temas e funcionalidades personalizadas diretamente no código. Utilização de Git para versionamento e colaboração em equipe.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Git']
  },
  {
    id: 2,
    role: 'Desenvolvedor',
    company: 'Eleve Marketing',
    period: '2024',
    description: 'Desenvolvimento e manutenção de soluções digitais com foco em tecnologia front-end e back-end. Implementação de projetos em PHP, JavaScript (Node.js, Vue.js), WordPress e integração de APIs. Desenvolvimento de sites e aplicativos, otimizando a performance e a experiência do usuário.',
    technologies: ['PHP', 'JavaScript', 'Node.js', 'Vue.js', 'WordPress', 'APIs', 'Git', 'Docker']
  },
  {
    id: 3,
    role: 'Desenvolvedor Web (Freelancer)',
    company: 'Trabalho Autônomo',
    period: '2023',
    description: 'Desenvolvimento e manutenção de soluções web personalizadas. Criação de websites responsivos, com foco em SEO e performance. Implementação de funcionalidades utilizando tecnologias como PHP, HTML, JavaScript, e CSS. Integração de plataformas de e-commerce e sistemas de gerenciamento de conteúdo (CMS). Suporte técnico e correção de bugs em projetos existentes.',
    technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'WordPress', 'SEO', 'E-commerce']
  },
  {
    id: 4,
    role: 'Estagiário em Desenvolvimento Web',
    company: 'Okn Grup - Agência Digital',
    period: '2021 - 2022',
    description: 'Desenvolvimento de aplicações web. Manutenção de sistemas. Otimização de projetos com técnicas SEO. Assistência na correção de códigos.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SEO', 'WordPress']
  }
]);

const education = ref([
  {
    id: 1,
    degree: 'Graduação em Sistemas de Informação',
    institution: 'Centro Universitário - FAM',
    period: '2019 - 2023',
    description: 'Formação completa em Sistemas de Informação com foco em desenvolvimento de software, análise de sistemas e gerenciamento de projetos tecnológicos.'
  }
]);

const certifications = ref([
  { id: 1, title: 'Front-end Moderno', description: 'HTML5, CSS3, JavaScript, Vue.js, padrões e boas práticas', icon: 'fa-code' },
  { id: 2, title: 'Back-end e APIs', description: 'Node.js, Express, integração de APIs REST, autenticação', icon: 'fa-server' },
  { id: 3, title: 'WordPress Profissional', description: 'Temas customizados, ACF, performance e segurança', icon: 'fa-wordpress' },
  { id: 4, title: 'SEO & Performance', description: 'Otimização SEO, Core Web Vitals e melhores práticas', icon: 'fa-chart-line' },
  { id: 5, title: 'Angular & TypeScript', description: 'Arquitetura, componentes e tipagem estática', icon: 'fa-layer-group' },
  { id: 6, title: 'Java & Spring Boot', description: 'APIs, camadas e boas práticas com Spring', icon: 'fa-leaf' }
]);

onMounted(() => {
  // Inicializar animações específicas desta página
});
</script>

<template>
  <div class="about-container">
    <!-- Hero Section Modernizada -->
    <section class="hero-modern">
      <div class="hero-bg-animation">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="floating-shape shape-4"></div>
      </div>
      
      <div class="hero-content" data-aos="fade-up">
        <div class="hero-badge" data-aos="zoom-in" data-aos-delay="200">
          <i class="fas fa-user-tie"></i>
          <span>Desenvolvedor Full Stack</span>
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="300">Olá, eu sou <span class="gradient-text">Murilo Manoel</span></h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
          Desenvolvedor apaixonado por criar soluções digitais inovadoras e experiências web excepcionais
        </p>
        
        <div class="hero-stats" data-aos="fade-up" data-aos-delay="500">
          <div class="stat-card">
            <div class="stat-number">3+</div>
            <div class="stat-label">Anos de Experiência</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">Tecnologias Dominadas</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Foco em Qualidade</div>
          </div>
        </div>
        
        <div class="hero-actions" data-aos="fade-up" data-aos-delay="600">
          <a 
            href="/curriculo-murilo.pdf" 
            class="btn-modern primary" 
            download="Murilo-Manoel-Curriculo.pdf"
          >
            <i class="fas fa-download"></i>
            <span>Download CV</span>
          </a>
          <router-link to="/contact" class="btn-modern secondary">
            <i class="fas fa-envelope"></i>
            <span>Contato</span>
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- About Info Cards -->
    <section class="about-cards-section">
      <div class="container">
        <div class="about-cards-grid">
          <div class="info-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <div class="card-content">
              <h3>Formação</h3>
              <p>Graduado em <strong>Sistemas de Informação</strong> pelo Centro Universitário FAM (2023)</p>
            </div>
          </div>
          
          <div class="info-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="card-content">
              <h3>Localização</h3>
              <p><strong>São Paulo - SP</strong><br>Disponível para trabalho presencial e remoto</p>
            </div>
          </div>
          
          <div class="info-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon">
              <i class="fas fa-code"></i>
            </div>
            <div class="card-content">
              <h3>Especialidade</h3>
              <p><strong>Full Stack Developer</strong><br>Front-end, Back-end e WordPress</p>
            </div>
          </div>
        </div>
        
        <!-- Bio Text -->
        <div class="bio-text-section" data-aos="fade-up" data-aos-delay="400">
          <div class="bio-text">
            <h2>Sobre Minha <span class="gradient-text">Trajetória</span></h2>
            <p class="lead">
              Desenvolvedor Full Stack de 23 anos com sólida experiência em criar soluções digitais inovadoras e eficientes.
            </p>
            <div class="bio-highlights">
              <div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <span>3+ anos desenvolvendo soluções web profissionais</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <span>Experiência em empresas como MZ Group, Eleve Marketing e Okn Grup</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <span>Expertise em WordPress, PHP, JavaScript, Vue.js e Node.js</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <span>Focado em performance, UX e melhores práticas de desenvolvimento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience Section -->
    <section class="experience-section">
      <h2 class="section-title" data-aos="fade-up">Experiência Profissional</h2>
      
      <div class="timeline">
        <div 
          v-for="exp in experiences" 
          :key="exp.id" 
          class="timeline-item"
          data-aos="fade-up"
          :data-aos-delay="100 * exp.id"
        >
          <div class="timeline-marker"></div>
          
          <div class="timeline-content">
            <h3>{{ exp.role }}</h3>
            <div class="timeline-info">
              <span class="company">{{ exp.company }}</span>
              <span class="period">{{ exp.period }}</span>
            </div>
            <p>{{ exp.description }}</p>
            
            <div class="tech-tags">
              <span v-for="(tech, index) in exp.technologies" :key="index" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Education Section -->
    <section class="education-section">
      <h2 class="section-title" data-aos="fade-up">Formação Acadêmica</h2>
      
      <div class="education-grid">
        <div 
          v-for="edu in education" 
          :key="edu.id" 
          class="education-card"
          data-aos="fade-up"
          :data-aos-delay="100 * edu.id"
        >
          <div class="education-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          
          <div class="education-content">
            <h3>{{ edu.degree }}</h3>
            <div class="education-info">
              <span class="institution">{{ edu.institution }}</span>
              <span class="period">{{ edu.period }}</span>
            </div>
            <p>{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Formações Complementares Section -->
    <section class="certifications-section">
      <h2 class="section-title" data-aos="fade-up">Formações Complementares</h2>
      
      <div class="certifications-grid">
        <div 
          v-for="cert in certifications" 
          :key="cert.id" 
          class="certification-card"
          data-aos="fade-up"
          :data-aos-delay="100 * cert.id"
        >
          <div class="certification-icon">
            <i class="fas" :class="cert.icon || 'fa-certificate'"></i>
          </div>
          
          <div class="certification-content">
            <h3>{{ cert.title }}</h3>
            <p class="cert-desc">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section class="skills-section">
      <h2 class="section-title" data-aos="fade-up">Habilidades e Competências</h2>
      
      <div class="skills-container">
        <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
          <h3><i class="fas fa-code"></i> Linguagens de Programação/Marcação</h3>
          <div class="skill-badges">
            <div class="skill-badge" style="background: rgba(227, 76, 38, 0.1); border: 1px solid rgba(227, 76, 38, 0.2);">
              <i class="fab fa-html5" style="color: #e34c26;"></i>
              <span>HTML5</span>
            </div>
            <div class="skill-badge" style="background: rgba(21, 114, 182, 0.1); border: 1px solid rgba(21, 114, 182, 0.2);">
              <i class="fab fa-css3-alt" style="color: #1572b6;"></i>
              <span>CSS3</span>
            </div>
            <div class="skill-badge" style="background: rgba(247, 223, 30, 0.1); border: 1px solid rgba(247, 223, 30, 0.2);">
              <i class="fab fa-js-square" style="color: #f7df1e;"></i>
              <span>JavaScript</span>
            </div>
            <div class="skill-badge" style="background: rgba(119, 123, 180, 0.1); border: 1px solid rgba(119, 123, 180, 0.2);">
              <i class="fab fa-php" style="color: #777bb4;"></i>
              <span>PHP</span>
            </div>
            <div class="skill-badge" style="background: rgba(237, 139, 0, 0.1); border: 1px solid rgba(237, 139, 0, 0.2);">
              <i class="fab fa-java" style="color: #ed8b00;"></i>
              <span>Java</span>
            </div>
            <div class="skill-badge" style="background: rgba(49, 120, 198, 0.1); border: 1px solid rgba(49, 120, 198, 0.2);">
              <i class="fas fa-code" style="color: #3178c6;"></i>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        
        <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
          <h3><i class="fas fa-layer-group"></i> Frameworks e Bibliotecas</h3>
          <div class="skill-badges">
            <div class="skill-badge" style="background: rgba(79, 192, 141, 0.1); border: 1px solid rgba(79, 192, 141, 0.2);">
              <i class="fab fa-vuejs" style="color: #4fc08d;"></i>
              <span>Vue.js</span>
            </div>
            <div class="skill-badge" style="background: rgba(221, 0, 49, 0.1); border: 1px solid rgba(221, 0, 49, 0.2);">
              <i class="fab fa-angular" style="color: #dd0031;"></i>
              <span>Angular</span>
            </div>
            <div class="skill-badge" style="background: rgba(104, 160, 99, 0.1); border: 1px solid rgba(104, 160, 99, 0.2);">
              <i class="fab fa-node-js" style="color: #68a063;"></i>
              <span>Node.js</span>
            </div>
            <div class="skill-badge" style="background: rgba(121, 82, 179, 0.1); border: 1px solid rgba(121, 82, 179, 0.2);">
              <i class="fab fa-bootstrap" style="color: #7952b3;"></i>
              <span>Bootstrap</span>
            </div>
            <div class="skill-badge" style="background: rgba(104, 189, 69, 0.1); border: 1px solid rgba(104, 189, 69, 0.2);">
              <i class="fas fa-leaf" style="color: #68bd45;"></i>
              <span>Spring Boot</span>
            </div>
          </div>
        </div>
        
        <div class="skill-category" data-aos="fade-up" data-aos-delay="300">
          <h3><i class="fas fa-wordpress"></i> CMS e Plataformas</h3>
          <div class="skill-badges">
            <div class="skill-badge" style="background: rgba(33, 117, 155, 0.1); border: 1px solid rgba(33, 117, 155, 0.2);">
              <i class="fab fa-wordpress" style="color: #21759b;"></i>
              <span>WordPress</span>
            </div>
            <div class="skill-badge" style="background: rgba(79, 70, 229, 0.1); border: 1px solid rgba(79, 70, 229, 0.2);">
              <i class="fas fa-puzzle-piece" style="color: #4f46e5;"></i>
              <span>ACF</span>
            </div>
            <div class="skill-badge" style="background: rgba(255, 122, 89, 0.1); border: 1px solid rgba(255, 122, 89, 0.2);">
              <i class="fas fa-hubspot" style="color: #ff7a59;"></i>
              <span>HubSpot CMS</span>
            </div>
          </div>
        </div>
        
        <div class="skill-category" data-aos="fade-up" data-aos-delay="400">
          <h3><i class="fas fa-database"></i> Bancos de Dados</h3>
          <div class="skill-badges">
            <div class="skill-badge" style="background: rgba(0, 117, 143, 0.1); border: 1px solid rgba(0, 117, 143, 0.2);">
              <i class="fas fa-database" style="color: #00758f;"></i>
              <span>MySQL</span>
            </div>
            <div class="skill-badge" style="background: rgba(71, 162, 72, 0.1); border: 1px solid rgba(71, 162, 72, 0.2);">
              <i class="fas fa-leaf" style="color: #47a248;"></i>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
        
        <div class="skill-category" data-aos="fade-up" data-aos-delay="500">
          <h3><i class="fas fa-tools"></i> Ferramentas e Tecnologias</h3>
          <div class="skill-badges">
            <div class="skill-badge" style="background: rgba(240, 80, 51, 0.1); border: 1px solid rgba(240, 80, 51, 0.2);">
              <i class="fab fa-git-alt" style="color: #f05033;"></i>
              <span>Git</span>
            </div>
            <div class="skill-badge" style="background: rgba(29, 161, 242, 0.1); border: 1px solid rgba(29, 161, 242, 0.2);">
              <i class="fab fa-docker" style="color: #1da1f2;"></i>
              <span>Docker</span>
            </div>
            <div class="skill-badge" style="background: rgba(52, 168, 83, 0.1); border: 1px solid rgba(52, 168, 83, 0.2);">
              <i class="fas fa-search" style="color: #34a853;"></i>
              <span>SEO</span>
            </div>
            <div class="skill-badge" style="background: rgba(255, 165, 0, 0.1); border: 1px solid rgba(255, 165, 0, 0.2);">
              <i class="fas fa-exchange-alt" style="color: #ffa500;"></i>
              <span>APIs REST</span>
            </div>
            <div class="skill-badge" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2);">
              <i class="fas fa-shopping-cart" style="color: #10b981;"></i>
              <span>E-commerce</span>
            </div>
          </div>
        </div>
        
        <div class="skill-category" data-aos="fade-up" data-aos-delay="600">
          <h3><i class="fas fa-network-wired"></i> Outras Competências</h3>
          <div class="skill-badges">
            <div class="skill-badge" style="background: rgba(0, 123, 255, 0.1); border: 1px solid rgba(0, 123, 255, 0.2);">
              <i class="fas fa-network-wired" style="color: #007bff;"></i>
              <span>Redes</span>
            </div>
            <div class="skill-badge" style="background: rgba(108, 117, 125, 0.1); border: 1px solid rgba(108, 117, 125, 0.2);">
              <i class="fas fa-tools" style="color: #6c757d;"></i>
              <span>Hardware</span>
            </div>
            <div class="skill-badge" style="background: rgba(220, 53, 69, 0.1); border: 1px solid rgba(220, 53, 69, 0.2);">
              <i class="fas fa-file-word" style="color: #dc3545;"></i>
              <span>Office</span>
            </div>
            <div class="skill-badge" style="background: rgba(23, 162, 184, 0.1); border: 1px solid rgba(23, 162, 184, 0.2);">
              <i class="fas fa-globe" style="color: #17a2b8;"></i>
              <span>Inglês</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section" data-aos="fade-up">
      <div class="cta-content">
        <h2>Vamos trabalhar juntos?</h2>
        <p>Estou disponível para novos projetos e oportunidades. Localizado em São Paulo - SP, pronto para criar soluções digitais inovadoras para o seu negócio.</p>
        <div class="cta-actions">
          <router-link to="/contact" class="btn primary large">Entre em Contato</router-link>
          <a href="mailto:manoelmurilo9@gmail.com" class="btn secondary large">
            <i class="fas fa-envelope"></i> manoelmurilo9@gmail.com
          </a>
        </div>
        <div class="cta-info">
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>(11) 95724-1394</span>
          </div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>São Paulo - SP</span>
          </div>
          <div class="info-item">
            <i class="fab fa-github"></i>
            <a href="https://github.com/M4noel" target="_blank">github.com/M4noel</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  width: 100%;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Hero Section Modernizado
.hero-modern {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.hero-bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  animation: float-animation 20s infinite ease-in-out;
}

.shape-1 {
  top: 10%;
  left: 20%;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  animation-delay: 0s;
}

.shape-2 {
  top: 60%;
  right: 20%;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #4ecdc4, #44a08d);
  animation-delay: -5s;
}

.shape-3 {
  bottom: 20%;
  left: 10%;
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #feca57, #ff9ff3);
  animation-delay: -10s;
}

.shape-4 {
  top: 30%;
  right: 40%;
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #48dbfb, #0abde3);
  animation-delay: -15s;
}

@keyframes float-animation {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(30px, -50px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(-20px, -80px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(-40px, -30px) rotate(270deg) scale(1.05);
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 900px;
  padding: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  
  i {
    color: #ffd700;
    font-size: 1.2rem;
  }
}

.hero-content h1 {
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
}

.gradient-text {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.2);
  }
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-modern {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.primary {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #333;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(255, 215, 0, 0.6);
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-5px);
    }
  }
}

// About Cards Section
.about-cards-section {
  padding: 6rem 0;
  background: var(--bg-color);
}

.about-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.info-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: var(--shadow-medium);
  border: 1px solid var(--border-color);
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
}

.card-icon {
  width: 70px;
  height: 70px;
  background: var(--gradient-primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  
  i {
    font-size: 2rem;
    color: white;
  }
}

.card-content {
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-color);
    line-height: 1.6;
    font-size: 1rem;
  }
}

.bio-text-section {
  text-align: center;
}

.bio-text {
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  .lead {
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 3rem;
    line-height: 1.7;
  }
}

.bio-highlights {
  display: grid;
  gap: 1.5rem;
  text-align: left;
  margin-top: 2rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  i {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
  
  span {
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--text-color);
  }
}

// Responsividade
@media (max-width: 992px) {
  .hero-content h1 {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-modern {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .about-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-modern {
    min-height: 90vh;
    padding: 2rem 1rem;
  }
  
  .hero-content {
    padding: 1rem;
  }
  
  .hero-badge {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .stat-card {
    padding: 1.2rem 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .info-card {
    padding: 2rem;
  }
  
  .card-icon {
    width: 60px;
    height: 60px;
    
    i {
      font-size: 1.7rem;
    }
  }
  
  .bio-text h2 {
    font-size: 2rem;
  }
  
  .bio-text .lead {
    font-size: 1.05rem;
  }
  
  .highlight-item {
    gap: 0.8rem;
    
    span {
      font-size: 0.95rem;
    }
  }
}

// Experience Section
.experience-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
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

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background-color: #e5e7eb;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  top: 0;
  left: -2rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 3px solid white;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.timeline-content {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
}

.timeline-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  .company {
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .period {
    color: var(--text-color);
    opacity: 0.7;
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: rgba(79, 70, 229, 0.1);
  color: var(--primary-color);
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

// Education Section
.education-section {
  padding: 6rem 2rem;
  background-color: var(--light-color);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.education-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.education-icon {
  font-size: 2rem;
  color: var(--primary-color);
}

.education-content {
  flex: 1;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
}

.education-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  .institution {
    font-weight: 600;
    color: var(--primary-color);
  }
  
  .period {
    color: var(--text-color);
    opacity: 0.7;
  }
}

// Certifications Section
.certifications-section {
  padding: 6rem 2rem;
  background-color: var(--light-color);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.certification-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.certification-icon {
  font-size: 2rem;
  color: var(--secondary-color);
}

.certification-content {
  flex: 1;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
}

.certification-info { display: none; }

.certification-content {
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
  .cert-desc {
    color: var(--text-color);
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

// Skills Section
.skills-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.skill-category {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-heavy);
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--text-color);
    
    i {
      font-size: 1.5rem;
      color: var(--primary-color);
      width: 30px;
      text-align: center;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--gradient-primary);
      border-radius: 2px;
    }
  }
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: default;
  
  i {
    font-size: 1.1rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

// Responsive para skills
@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skill-category {
    padding: 2rem;
    
    h3 {
      font-size: 1.1rem;
      
      i {
        font-size: 1.3rem;
      }
    }
  }
}

// CTA Section
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 900px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    line-height: 1.6;
  }
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  .btn.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    
    i {
      margin-right: 0.5rem;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
}

.cta-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    
    i {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.7);
      width: 20px;
      text-align: center;
    }
    
    a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
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
  transition: all 0.3s ease;
  border: none;
  outline: none;
  text-decoration: none;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--gradient-primary);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: var(--text-color);
    border: 2px solid var(--text-color);
    
    &:hover {
      background-color: var(--text-color);
      color: white;
      transform: translateY(-3px);
    }
  }
  
  &.large {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
}

// Responsive
@media (max-width: 992px) {
  .bio-container {
    grid-template-columns: 1fr;
  }
  
  .bio-image {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .about-hero-content {
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .bio-content {
    h2 {
      font-size: 1.8rem;
    }
  }
  
  .bio-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
  }
  
  .cta-content {
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    
    .btn {
      width: 100%;
      max-width: 280px;
      text-align: center;
    }
  }
  
  .cta-info {
    gap: 1.5rem;
    
    .info-item {
      font-size: 0.9rem;
    }
  }
}
</style>
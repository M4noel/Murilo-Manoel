<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ProjectsCarousel from '@/components/ProjectsCarousel.vue';
import artistisseHome from '@/assets/img/site-home.png';
import artistisseProduto from '@/assets/img/FireShot Capture 022 - Footer Artistisse - localhost.png';
import agroclipImage from '@/assets/img/Agroclipe.png';

const router = useRouter();
const isVisible = ref(false);
const artistisseCurrentSlide = ref(0);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});

const scrollToProjects = () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};

const nextSlideArtistisse = () => {
  if (artistisseCurrentSlide.value < 1) {
    artistisseCurrentSlide.value++;
  }
};

const prevSlideArtistisse = () => {
  if (artistisseCurrentSlide.value > 0) {
    artistisseCurrentSlide.value--;
  }
};
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content" :class="{ 'visible': isVisible }">
        <h1 class="hero-title">
          <span class="greeting" data-aos="fade-down" data-aos-duration="800">Olá, eu sou</span>
          <span class="name" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">Murilo Manoel</span>
          <span class="role" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">Desenvolvedor Web | Transformando ideias em <span class="highlight">experiências digitais</span></span>
        </h1>
        
        <p class="hero-description" data-aos="fade-up" data-aos-delay="300">
          Especializado em criar soluções web modernas, responsivas e de alta performance para empresas e empreendedores.
        </p>
        
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="500">
          <!-- <button class="btn primary" @click="router.push('/portfolio')">Ver Portfólio</button> -->
          <button class="btn secondary" @click="router.push('/contact')">Contato</button>
        </div>
        
        <div class="scroll-indicator" @click="scrollToProjects" data-aos="fade-up" data-aos-delay="700">
          <span>Rolar para baixo</span>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      
      <div class="hero-background">
        <div class="shape shape-1" data-aos="fade-right" data-aos-duration="1500"></div>
        <div class="shape shape-2" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200"></div>
        <div class="shape shape-3" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"></div>
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
      
      <!-- Carrossel de Projetos em Destaque -->
      <ProjectsCarousel />
      
      <!-- Mais Projetos -->
      <h3 class="subsection-title" data-aos="fade-up" style="text-align: center; font-size: 2rem; font-weight: 800; margin: 4rem 0 3rem; color: var(--text-color);">Mais Projetos</h3>
      
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
            <p>Landing page com foco em conversões, design moderno e formulários otimizados. Resultado: aumento de 300% nas matrículas.</p>
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
            <p>Website institucional com apresentação de serviços jurídicos, blog especializado e sistema de agendamento. Design que transmite confiança.</p>
          </div>
        </div>
        
        <div class="project-card smartfiles-card" data-aos="fade-up" data-aos-delay="300">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://smart-file-eta.vercel.app/" 
                title="SmartFiles - Ferramentas Online"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://smart-file-eta.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>SmartFiles</h3>
            <p>Plataforma com 10+ ferramentas: compressão de imagens, editor de PDFs, conversor de arquivos, gerador de QR Code e IA integrada.</p>
          </div>
        </div>

        <!-- E-commerce -->
        <div class="project-card ecommerce-card" data-aos="fade-up" data-aos-delay="400">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://e-commerce-sepia-nu-53.vercel.app/" 
                title="E-commerce Moderno"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://e-commerce-sepia-nu-53.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>E-commerce Moderno</h3>
            <p>Loja virtual com carrinho de compras, pagamento integrado, gestão de produtos e painel administrativo. Interface intuitiva e responsiva.</p>
          </div>
        </div>
        
        <!-- Dashboard Clima -->
        <div class="project-card weather-card" data-aos="fade-up" data-aos-delay="500">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://painel-do-clima.vercel.app/" 
                title="Painel do Clima"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://painel-do-clima.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Painel do Clima</h3>
            <p>Dashboard de previsão do tempo com dados em tempo real, gráficos dinâmicos e mapas meteorológicos. Interface moderna e acessível.</p>
          </div>
        </div>
        
        <!-- Clínica Odontológica -->
        <div class="project-card dental-card" data-aos="fade-up" data-aos-delay="600">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://lp-dentista.vercel.app/" 
                title="Clínica Odontológica"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://lp-dentista.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Clínica Odontológica</h3>
            <p>Landing page com agendamento online, galeria de casos, depoimentos de pacientes e informações da equipe. Design clean e profissional.</p>
          </div>
        </div>
        
        <!-- AgroClip -->
        <div class="project-card agroclip-card" data-aos="fade-up" data-aos-delay="700">
          <div class="project-image">
            <img :src="agroclipImage" alt="AgroClip - Plataforma Agrícola" />
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://agroclip.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>AgroClip</h3>
            <p>Desenvolvimento e manutenção de plataforma para o setor agrícola. Sistema completo com gestão de dados e interface moderna.</p>
          </div>
        </div>
        
        <!-- GA Advising -->
        <div class="project-card gaadvising-card" data-aos="fade-up" data-aos-delay="800">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://gaadvising.com/" 
                title="GA Advising"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://gaadvising.com/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>GA Advising</h3>
            <p>Desenvolvimento e manutenção de site institucional para consultoria. Design profissional com foco em conversão e credibilidade.</p>
          </div>
        </div>
        
        <!-- Receitas.ai -->
        <div class="project-card receitas-card" data-aos="fade-up" data-aos-delay="900">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://www.receitas.ai/" 
                title="Receitas.ai"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://www.receitas.ai/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Receitas.ai</h3>
            <p>Desenvolvimento e manutenção de plataforma de receitas com inteligência artificial. Interface intuitiva e sistema de busca avançado.</p>
          </div>
        </div>
        
        <!-- Eleve Ads -->
        <div class="project-card eleveads-card" data-aos="fade-up" data-aos-delay="1000">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://site-novo.dev-eleveads.com.br/" 
                title="Eleve Ads"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://site-novo.dev-eleveads.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Eleve Ads</h3>
            <p>Desenvolvimento e manutenção de site para agência de marketing digital. Design moderno com foco em resultados e performance.</p>
          </div>
        </div>
        
        <!-- IBC Dogs -->
        <div class="project-card ibcdogs-card" data-aos="fade-up" data-aos-delay="1100">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://ibcdogs.com.br/" 
                title="IBC Dogs"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://ibcdogs.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>IBC Dogs</h3>
            <p>Desenvolvimento e manutenção de site para centro de treinamento canino. Sistema de agendamento e galeria de serviços.</p>
          </div>
        </div>
        
        <!-- Reis Revisional -->
        <div class="project-card reisrevisional-card" data-aos="fade-up" data-aos-delay="1200">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://reisrevisional.com.br/" 
                title="Reis Revisional"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://reisrevisional.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Reis Revisional</h3>
            <p>Desenvolvimento e manutenção de site para escritório de advocacia especializado em ações revisionais. Design profissional e confiável.</p>
          </div>
        </div>
        
        <!-- HD Landing Page -->
        <div class="project-card hdlp-card" data-aos="fade-up" data-aos-delay="1300">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://hd-lp.dev-eleveads.com.br/" 
                title="HD Landing Page"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://hd-lp.dev-eleveads.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>HD Landing Page</h3>
            <p>Landing page desenvolvida com foco em alta conversão. Design moderno, responsivo e otimizado para captura de leads.</p>
          </div>
        </div>
        
        <!-- Cálculo Revisional -->
        <div class="project-card calculorevisional-card" data-aos="fade-up" data-aos-delay="1400">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://www.site.calculorevisional.dev-eleveads.com.br/" 
                title="Cálculo Revisional"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://www.site.calculorevisional.dev-eleveads.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Cálculo Revisional</h3>
            <p>Manutenção e ajustes em plataforma de cálculo revisional. Otimizações de performance e melhorias na experiência do usuário.</p>
          </div>
        </div>
        
        <!-- Tropical Camboinhas -->
        <div class="project-card tropical-card" data-aos="fade-up" data-aos-delay="1500">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://tropical-camboinhas-v2.vercel.app/" 
                title="Tropical Camboinhas"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://tropical-camboinhas-v2.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Tropical Camboinhas</h3>
            <p>Website moderno e responsivo desenvolvido para o restaurante Tropical Camboinhas. Interface elegante com menu interativo, galeria de fotos e sistema de reservas online integrado.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="1600">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://casas-buzios.vercel.app/" 
                title="Casas Búzios"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://casas-buzios.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Casas Búzios</h3>
            <p>Portal de casas de veraneio em Búzios com foco em investimento e locação por temporada.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="1700">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://viva-b-zios-2-residence.vercel.app/" 
                title="VIVA Búzios Geribá"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://viva-b-zios-2-residence.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>VIVA Búzios Geribá</h3>
            <p>Casas duplex de alto padrão em Geribá com lazer completo, fitness e portaria 24h.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="1800">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://mbloft-icarai-site.vercel.app/" 
                title="MBLoft Icaraí"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://mbloft-icarai-site.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>MBLoft Icaraí</h3>
            <p>Studios funcionais em Icaraí, tecnologia, segurança e área de lazer completa.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="1900">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://conviva-life-inga.vercel.app/" 
                title="CONVIVA Life Ingá"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://conviva-life-inga.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>CONVIVA Life Ingá</h3>
            <p>Studios, 1 e 2 quartos no Ingá com lazer no rooftop e conveniências.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="2000">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://da-vind-new.vercel.app/" 
                title="Da Vince Icaraí"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://da-vind-new.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Da Vince Icaraí</h3>
            <p>Studios e apartamentos de alto padrão com design inteligente e rooftop.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="2100">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://www.xn--lanamentosniteroi-csb.com.br//" 
                title="Empreendimentos Niterói"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://www.xn--lanamentosniteroi-csb.com.br/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Empreendimentos Niterói</h3>
            <p>Conteúdo institucional sobre investimento imobiliário e qualidade de vida em Niterói.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="2200">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://conviva-life-camboinhas.vercel.app/" 
                title="Conviva Life Camboinhas"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://conviva-life-camboinhas.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Conviva Life Camboinhas</h3>
            <p>Apartamentos de 1, 2 e 3 quartos com lazer completo e sustentabilidade.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="2300">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://conviva-camboinhas.vercel.app/" 
                title="Conviva Camboinhas"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://conviva-camboinhas.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Conviva Camboinhas</h3>
            <p>1 quarto e Double Suite com wellness, convivência e localização privilegiada.</p>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up" data-aos-delay="2400">
          <div class="project-image">
            <div class="iframe-container">
              <iframe 
                src="https://conviva-piratininga.vercel.app/" 
                title="Conviva Piratininga"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              ></iframe>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn small" @click="router.push('/contact')">Contato</button>
                <a href="https://conviva-piratininga.vercel.app/" class="btn small secondary" target="_blank">Abrir Site</a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>Conviva Piratininga</h3>
            <p>Studios prontos para morar com conveniências e rooftop com piscina e sauna.</p>
          </div>
        </div>
        
      </div>
      
      <div class="view-all-projects" data-aos="fade-up">
        <!-- <button class="btn primary" @click="router.push('/portfolio')">Ver Todos os Projetos</button> -->
      </div>
    </section>
    
    <!-- Why Choose My Work Section -->
    <section class="why-choose-section">
      <h2 class="section-title" data-aos="zoom-in" data-aos-duration="800">Por que Escolher Meu Trabalho?</h2>
      
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
        
        <div class="why-choose-card" data-aos="fade-up" data-aos-delay="400">
          <div class="card-icon">
            <i class="fas fa-tools"></i>
          </div>
          <h3>Suporte Pós-Lançamento</h3>
          <p>Acompanhamento após a entrega, correções necessárias e orientações para o melhor uso da solução.</p>
        </div>
      </div>
      
      <!-- Seção de Currículo -->
      <div class="resume-section" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="resume-container">
          <div class="resume-left">
            <div class="resume-icon-large">
              <i class="fas fa-file-alt"></i>
            </div>
          </div>
          
          <div class="resume-right">
            <div class="resume-badge">
              <i class="fas fa-award"></i>
              <span>Desenvolvedor Web</span>
            </div>
            <h3>Meu Currículo Profissional</h3>
            <p>Conheça minha trajetória, habilidades técnicas, projetos desenvolvidos e certificações. Um histórico completo da minha experiência como desenvolvedor web.</p>
            
            <div class="resume-actions">
              <a href="/Curriculo-Manoel-Murilo-23 (1).pdf" target="_blank" class="btn primary resume-btn">
                <i class="fas fa-eye"></i>
                Visualizar Currículo
              </a>
              <a href="/Curriculo-Manoel-Murilo-23 (1).pdf" download class="btn secondary resume-btn">
                <i class="fas fa-download"></i>
                Baixar PDF
              </a>
            </div>
            
            <div class="resume-tip">
              <i class="fas fa-lightbulb"></i>
              <span>Clique em "Visualizar" para ver o PDF no navegador ou "Baixar" para salvar em seu computador</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- GitHub Section -->
    <section class="github-section" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="section-title" data-aos="zoom-in" data-aos-duration="800">Meu GitHub</h2>
      <div class="github-container">
        <div class="github-card" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          <div class="github-header">
            <div class="github-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="github-badge">
              <i class="fas fa-code"></i>
              <span>Open Source</span>
            </div>
          </div>
          
          <div class="github-body">
            <h3>Projetos & Contribuições</h3>
            <p>Explore meus repositórios, contribuições e atividades no GitHub. Código aberto, projetos pessoais e colaborações com a comunidade.</p>
            
            <div class="github-stats">
              <div class="stat-box">
                <i class="fas fa-code-branch"></i>
                <div class="stat-info">
                  <span class="stat-value">26</span>
                  <span class="stat-label">Repositórios Públicos</span>
                </div>
              </div>
            </div>
            
            <a href="https://github.com/M4noel" target="_blank" class="btn primary github-btn">
              <i class="fab fa-github"></i>
              Visitar Meu GitHub
            </a>
          </div>
        </div>
        
        <div class="github-preview" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
          <div class="preview-header">
            <div class="preview-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="preview-title">github.com/M4noel</span>
          </div>
          <div class="preview-image">
            <img src="/src/assets/GitHub___headpic.jpg" alt="GitHub Profile">
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section" data-aos="zoom-in" data-aos-duration="1000">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: bounce 2s infinite;
  z-index: 10;
  margin-top: 3rem;
  
  &:hover {
    transform: translateY(-5px);
    animation: none;
    
    i {
      color: white;
    }
  }
  
  span {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.9;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.5px;
  }
  
  i {
    font-size: 1.5rem;
    color: white;
    opacity: 0.9;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }
  
  @media (max-width: 768px) {
    bottom: 2rem;
    
    span {
      font-size: 0.9rem;
    }
    
    i {
      font-size: 1.3rem;
    }
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
  opacity: 0.15;
  filter: blur(40px);
  
  &.shape-1 {
    width: 400px;
    height: 400px;
    background: var(--primary-color);
    top: 10%;
    left: 10%;
    animation: float 20s ease-in-out infinite, pulse 4s ease-in-out infinite;
  }
  
  &.shape-2 {
    width: 300px;
    height: 300px;
    background: var(--secondary-color);
    bottom: 20%;
    right: 15%;
    animation: float 15s ease-in-out infinite reverse, pulse 5s ease-in-out infinite;
  }
  
  &.shape-3 {
    width: 250px;
    height: 250px;
    background: var(--accent-color);
    top: 50%;
    right: 20%;
    animation: float 25s ease-in-out infinite, pulse 6s ease-in-out infinite;
  }
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
  background-color: var(--bg-color);
}

.section-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 4.5rem;
  position: relative;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 6px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
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
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-light);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
  
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
    color: var(--text-color);
  }
  
  p {
    line-height: 1.7;
    color: var(--text-color);
    opacity: 0.8;
    font-size: 0.95rem;
  }
}

.service-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.4s ease;
  animation: pulse 3s ease-in-out infinite;
  
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
  padding: 7rem 2rem;
  background: var(--light-color);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.2), transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  
  @media (min-width: 1200px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }
}

.project-card {
  background: var(--card-bg);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06), 
              0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  border: 2px solid transparent;
  background-clip: padding-box;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 10;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(145deg, rgba(79, 70, 229, 0.1), rgba(16, 185, 129, 0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-20px) scale(1.03);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15), 
                0 10px 30px rgba(79, 70, 229, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
    
    .project-overlay {
      opacity: 1;
    }
    
    .project-image .iframe-container iframe {
      transform: scale(1.08);
    }
    
    .project-content {
      transform: translateY(-5px);
    }
  }
  
  &.smartfiles-card {
    &::before {
      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    }
    
    &:hover {
      .project-content h3 {
        color: #3b82f6;
      }
    }
  }
  
  &.ecommerce-card {
    &::before {
      background: linear-gradient(90deg, #10b981, #059669, #047857);
    }
    
    &:hover {
      .project-content h3 {
        color: #10b981;
      }
    }
  }
  
  &.weather-card {
    &::before {
      background: linear-gradient(90deg, #06b6d4, #0891b2, #0e7490);
    }
    
    &:hover {
      .project-content h3 {
        color: #06b6d4;
      }
    }
  }
  
  &.dental-card {
    &::before {
      background: linear-gradient(90deg, #ec4899, #db2777, #be185d);
    }
    
    &:hover {
      .project-content h3 {
        color: #ec4899;
      }
    }
  }
  
  &.harmony-card {
    &::before {
      background: linear-gradient(90deg, #f59e0b, #ef4444, #ec4899);
    }
    
    &:hover {
      .project-content h3 {
        color: #f59e0b;
      }
    }
  }
  
  &.advocacia-card {
    &::before {
      background: linear-gradient(90deg, #374151, #1f2937, #111827);
    }
    
    &:hover {
      .project-content h3 {
        color: #374151;
      }
    }
  }
  
  &.agroclip-card {
    &::before {
      background: linear-gradient(90deg, #22c55e, #16a34a, #15803d);
    }
    
    &:hover {
      .project-content h3 {
        color: #22c55e;
      }
    }
  }
  
  &.gaadvising-card {
    &::before {
      background: linear-gradient(90deg, #0ea5e9, #0284c7, #0369a1);
    }
    
    &:hover {
      .project-content h3 {
        color: #0ea5e9;
      }
    }
  }
  
  &.receitas-card {
    &::before {
      background: linear-gradient(90deg, #f97316, #ea580c, #c2410c);
    }
    
    &:hover {
      .project-content h3 {
        color: #f97316;
      }
    }
  }
  
  &.eleveads-card {
    &::before {
      background: linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9);
    }
    
    &:hover {
      .project-content h3 {
        color: #8b5cf6;
      }
    }
  }
  
  &.ibcdogs-card {
    &::before {
      background: linear-gradient(90deg, #eab308, #ca8a04, #a16207);
    }
    
    &:hover {
      .project-content h3 {
        color: #eab308;
      }
    }
  }
  
  &.reisrevisional-card {
    &::before {
      background: linear-gradient(90deg, #dc2626, #b91c1c, #991b1b);
    }
    
    &:hover {
      .project-content h3 {
        color: #dc2626;
      }
    }
  }
  
  &.hdlp-card {
    &::before {
      background: linear-gradient(90deg, #06b6d4, #14b8a6, #0d9488);
    }
    
    &:hover {
      .project-content h3 {
        color: #06b6d4;
      }
    }
  }
  
  &.calculorevisional-card {
    &::before {
      background: linear-gradient(90deg, #a855f7, #9333ea, #7e22ce);
    }
    
    &:hover {
      .project-content h3 {
        color: #a855f7;
      }
    }
  }
  
  &.artistisse-card {
    &::before {
      background: linear-gradient(90deg, #7c3aed, #00bcd4, #7c3aed);
    }
    
    &:hover {
      .project-content h3 {
        color: #7c3aed;
      }
      
      .carousel-wrapper img {
        transform: scale(1.05);
      }
    }
  }
  
  .project-content {
    padding: 2rem 2.2rem 2.5rem;
    background: transparent;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 2.2rem;
      right: 2.2rem;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08), transparent);
    }
    
    h3 {
      font-size: 1.5rem;
      margin: 0 0 1rem;
      color: var(--text-color);
      font-weight: 800;
      transition: all 0.4s ease;
      line-height: 1.3;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &::before {
        content: '';
        width: 4px;
        height: 24px;
        background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
        border-radius: 2px;
        opacity: 0;
        transform: scaleY(0);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    }
    
    p {
      margin: 0;
      color: var(--text-color);
      font-size: 1.05rem;
      line-height: 1.8;
      opacity: 0.85;
      font-weight: 400;
    }
  }
  
  &:hover .project-content h3::before {
    opacity: 1;
    transform: scaleY(1);
  }
}

.project-image {
  position: relative;
  height: 260px;
  overflow: hidden;
  background: var(--light-color);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent);
    pointer-events: none;
    z-index: 5;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
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
    overflow: hidden;
    background: var(--card-bg);
    
    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      filter: brightness(0.98);
    }
  }
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
  
  .carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    min-width: 100%;
    height: 100%;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(124, 58, 237, 0.9);
    color: #fff;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 15;
    font-size: 18px;
    
    &:hover {
      background: rgba(124, 58, 237, 1);
      transform: translateY(-50%) scale(1.1);
    }
    
    &.prev {
      left: 15px;
    }
    
    &.next {
      right: 15px;
    }
  }
  
  .carousel-indicators {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 15;
    
    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      padding: 0;
      
      &.active {
        background: #7c3aed;
        transform: scale(1.2);
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.8);
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
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.97), rgba(139, 92, 246, 0.97));
  backdrop-filter: blur(12px) saturate(180%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }
}

.project-actions {
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  z-index: 20;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  .btn {
    min-width: 140px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 0.85rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    
    &.small {
      padding: 0.9rem 1.8rem;
    }
    
    &:hover {
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
  }
}


.view-all-projects {
  text-align: center;
  margin-top: 4rem;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(-5deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(79, 70, 229, 0.6);
  }
}

// Why Choose My Work Section
.why-choose-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
}

.why-choose-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 20%;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.why-choose-card {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 2px solid rgba(79, 70, 229, 0.08);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12),
                0 10px 30px rgba(79, 70, 229, 0.1);
    border-color: rgba(79, 70, 229, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
    
    .card-icon {
      transform: scale(1.15) rotate(5deg);
      box-shadow: 0 15px 40px rgba(79, 70, 229, 0.3);
    }
  }
  
  .card-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.2);
    animation: glow 3s ease-in-out infinite;
    
    i {
      font-size: 2rem;
      color: white;
    }
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--text-color);
    line-height: 1.3;
    letter-spacing: -0.3px;
  }
  
  p {
    color: var(--text-color);
    line-height: 1.7;
    font-size: 0.95rem;
    opacity: 0.9;
  }
}

// Resume Section
.resume-section {
  margin-top: 5rem;
  padding: 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  
  .resume-container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0;
    background: var(--card-bg);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: var(--shadow-heavy);
    border: 2px solid var(--border-color);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
    }
  }
  
  .resume-left {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
      animation: float 20s ease-in-out infinite;
    }
    
    .resume-icon-large {
      width: 160px;
      height: 160px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      z-index: 2;
      animation: pulse 4s ease-in-out infinite;
      
      &:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
      }
      
      i {
        font-size: 5rem;
        color: white;
      }
    }
  }
  
  .resume-right {
    padding: 3rem 3rem 3rem 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .resume-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1));
      color: var(--primary-color);
      padding: 0.6rem 1.2rem;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      width: fit-content;
      border: 1px solid rgba(79, 70, 229, 0.2);
      
      i {
        font-size: 1rem;
      }
    }
    
    h3 {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--dark-color);
      margin-bottom: 1rem;
      line-height: 1.2;
      letter-spacing: -0.5px;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-color);
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .resume-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      
      .resume-btn {
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 12px;
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        text-decoration: none;
        
        i {
          font-size: 1.1rem;
        }
        
        &.primary {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          border: none;
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4);
          }
        }
        
        &.secondary {
          background: var(--card-bg);
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
          
          &:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
          }
        }
      }
    }
    
    .resume-tip {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1rem 1.5rem;
      background: rgba(79, 70, 229, 0.05);
      border-radius: 12px;
      border-left: 4px solid var(--primary-color);
      
      i {
        color: var(--primary-color);
        font-size: 1.2rem;
      }
      
      span {
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.8;
      }
    }
  }
  
  @media (max-width: 968px) {
    .resume-container {
      grid-template-columns: 1fr;
      gap: 0;
    }
    
    .resume-left {
      padding: 2.5rem 2rem;
      
      .resume-icon-large {
        width: 120px;
        height: 120px;
        
        i {
          font-size: 3.5rem;
        }
      }
    }
    
    .resume-right {
      padding: 2.5rem 2rem;
      
      h3 {
        font-size: 1.8rem;
      }
      
      p {
        font-size: 1rem;
      }
      
      .resume-actions {
        flex-direction: column;
        
        .resume-btn {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
}

// GitHub Section
.github-section {
  padding: 7rem 2rem;
  background: var(--bg-color);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
}

.github-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.github-card {
  background: var(--card-bg);
  border-radius: 30px;
  padding: 3rem;
  box-shadow: var(--shadow-heavy);
  border: 2px solid var(--border-color);
  position: relative;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
    border-radius: 30px 30px 0 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12),
                0 10px 30px rgba(79, 70, 229, 0.1);
  }
  
  .github-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    
    .github-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #24292f, #1f2328);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      animation: pulse 3s ease-in-out infinite;
      
      &:hover {
        transform: scale(1.1) rotate(-5deg);
      }
      
      i {
        font-size: 2.5rem;
        color: white;
      }
    }
    
    .github-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1));
      color: var(--primary-color);
      padding: 0.6rem 1.2rem;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      border: 1px solid rgba(79, 70, 229, 0.2);
      
      i {
        font-size: 1rem;
      }
    }
  }
  
  .github-body {
    h3 {
      font-size: 2rem;
      font-weight: 800;
      color: var(--dark-color);
      margin-bottom: 1rem;
      line-height: 1.2;
      letter-spacing: -0.5px;
    }
    
    p {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--text-color);
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .github-stats {
      display: flex;
      margin-bottom: 2rem;
      
      .stat-box {
        background: rgba(79, 70, 229, 0.05);
        border: 1px solid rgba(79, 70, 229, 0.1);
        border-radius: 15px;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        transition: all 0.3s ease;
        width: 100%;
        
        &:hover {
          background: rgba(79, 70, 229, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.15);
        }
        
        i {
          font-size: 2.5rem;
          color: var(--primary-color);
        }
        
        .stat-info {
          display: flex;
          flex-direction: column;
          
          .stat-value {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--dark-color);
            line-height: 1;
          }
          
          .stat-label {
            font-size: 0.85rem;
            color: var(--text-color);
            opacity: 0.7;
            margin-top: 0.3rem;
          }
        }
      }
    }
    
    .github-btn {
      width: 100%;
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      background: linear-gradient(135deg, #24292f, #1f2328);
      color: white;
      border: none;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      text-decoration: none;
      
      i {
        font-size: 1.2rem;
      }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #1f2328, #24292f);
      }
    }
  }
}

.github-preview {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-heavy);
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  }
  
  .preview-header {
    background: linear-gradient(135deg, #24292f, #1f2328);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .preview-dots {
      display: flex;
      gap: 0.5rem;
      
      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        
        &:nth-child(1) {
          background: #ff5f57;
        }
        
        &:nth-child(2) {
          background: #ffbd2e;
        }
        
        &:nth-child(3) {
          background: #28c840;
        }
      }
    }
    
    .preview-title {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  
  .preview-image {
    background: #0d1117;
    padding: 0;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }
  
  &:hover .preview-image img {
    transform: scale(1.05);
  }
}

@media (max-width: 968px) {
  .github-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .github-card {
    padding: 2rem;
    
    .github-header {
      .github-icon {
        width: 70px;
        height: 70px;
        
        i {
          font-size: 2rem;
        }
      }
    }
    
    .github-body {
      h3 {
        font-size: 1.6rem;
      }
      
      p {
        font-size: 1rem;
      }
      
      .github-stats {
        width: 100%;
      }
    }
  }
  
  .github-preview {
    display: none;
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
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--text-color);
  }
  
  p {
    line-height: 1.7;
    color: var(--text-color);
    opacity: 0.9;
  }
}

.btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  
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
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    border-radius: 18px;
    
    &:hover {
      transform: translateY(-12px) scale(1.02);
    }
    
    .project-image {
      height: 220px;
      
      &::after {
        height: 60px;
      }
    }
    
    .project-content {
      padding: 1.8rem 1.8rem 2rem;
      
      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
        
        &::before {
          height: 20px;
        }
      }
      
      p {
        font-size: 0.98rem;
        line-height: 1.7;
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
  
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }
  
  .projects-section {
    padding: 4rem 1.5rem;
  }
  
  .project-card {
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-10px) scale(1.01);
    }
    
    .project-image {
      height: 200px;
      
      &::after {
        height: 50px;
      }
    }
    
    .project-content {
      padding: 1.5rem 1.5rem 1.8rem;
      
      h3 {
        font-size: 1.2rem;
        
        &::before {
          height: 18px;
          width: 3px;
        }
      }
      
      p {
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
    
    .project-actions {
      gap: 1rem;
      
      .btn {
        font-size: 0.8rem;
        padding: 0.75rem 1.3rem;
        min-width: 120px;
      }
    }
  }
  
  .last-card {
    left: 110%;
  }
}
</style>
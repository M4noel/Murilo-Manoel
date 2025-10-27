<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Carregar script do LinkedIn
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://platform.linkedin.com/badges/js/profile.js';
  script.async = true;
  script.defer = true;
  script.type = 'text/javascript';
  document.body.appendChild(script);
});
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const formError = ref(false);
const resultMessage = ref('');

const submitForm = async (event) => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    return;
  }
  
  isSubmitting.value = true;
  resultMessage.value = 'Enviando...';
  formError.value = false;
  formSubmitted.value = false;
  
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'bae09d7e-4999-46d0-ab07-d03163201d2d');
    formDataToSend.append('name', formData.value.name);
    formDataToSend.append('email', formData.value.email);
    formDataToSend.append('subject', formData.value.subject || 'Contato via Portfólio');
    formDataToSend.append('message', formData.value.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });

    const data = await response.json();
    
    if (data.success) {
      formSubmitted.value = true;
      resultMessage.value = 'Formulário enviado com sucesso!';
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      formError.value = true;
      resultMessage.value = 'Erro ao enviar formulário. Tente novamente.';
    }
  } catch (error) {
    formError.value = true;
    resultMessage.value = 'Erro ao enviar formulário. Tente novamente.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="contact-container">
    <!-- Hero Section Modernizada -->
    <section class="contact-hero-modern">
      <div class="hero-bg-animation">
        <div class="floating-shape shape-a"></div>
        <div class="floating-shape shape-b"></div>
        <div class="floating-shape shape-c"></div>
        <div class="floating-shape shape-d"></div>
      </div>
      <div class="contact-hero-content" data-aos="fade-up">
        <div class="hero-badge" data-aos="zoom-in" data-aos-delay="150">
          <i class="fas fa-comments"></i>
          <span>Vamos conversar</span>
        </div>
        <h1>Entre em <span class="gradient-text">Contato</span></h1>
        <p class="subtitle">Aberto a novos projetos, parcerias e oportunidades profissionais</p>
        <div class="hero-actions" data-aos="fade-up" data-aos-delay="300">
          <a class="btn-modern primary" href="mailto:manoelmurilo9@gmail.com">
            <i class="fas fa-envelope"></i>
            <span>Enviar Email</span>
          </a>
          <a class="btn-modern secondary" href="https://wa.me/5511957241394" target="_blank">
            <i class="fab fa-whatsapp"></i>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-grid container">
        <!-- Contact Info -->
        <div class="contact-info glass-card" data-aos="fade-right">
          <h2>Vamos Conversar</h2>
          <p>Estou sempre aberto a novos projetos, parcerias e oportunidades profissionais. Entre em contato para conversarmos!</p>
          
          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p>manoelmurilo9@gmail.com</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="info-content">
                <h3>Telefone</h3>
                <p>(11) 95724-1394</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info-content">
                <h3>Localização</h3>
                <p>São Paulo - SP</p>
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <a href="https://github.com/M4noel" target="_blank" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/murilo-manoel/" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/5511957241394" target="_blank" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="contact-form glass-card" data-aos="fade-left">
          <h2>Envie uma Mensagem</h2>
          
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="Seu endereço de email"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="subject">Assunto</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Sua mensagem"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="btn primary" 
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Enviar Mensagem</span>
              <span v-else class="loading-spinner"></span>
            </button>
            
            <div class="form-message success" v-if="formSubmitted">
              <i class="fas fa-check-circle"></i>
              <p>{{ resultMessage }}</p>
            </div>
            
            <div class="form-message error" v-if="formError">
              <i class="fas fa-exclamation-circle"></i>
              <p>{{ resultMessage }}</p>
            </div>
            
            <div class="form-message info" v-if="isSubmitting">
              <i class="fas fa-spinner fa-spin"></i>
              <p>{{ resultMessage }}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    <!-- LinkedIn Badge Section -->
    <section class="linkedin-section" data-aos="fade-up">
      <div class="linkedin-container">
        <h2>Conecte-se Comigo no LinkedIn</h2>
        <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="murilo-manoel" data-version="v1">
          <a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/murilo-manoel?trk=profile-badge">Murilo Manoel</a>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section" data-aos="fade-up">
      <div class="cta-content">
        <h2>Pronto para iniciar seu projeto?</h2>
        <p>Vamos trabalhar juntos para criar uma solução digital que atenda às suas necessidades e objetivos.</p>
        <button class="btn primary large" @click="router.push('/')">Conheça Meu Trabalho</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

// Hero Section Modernizada
.contact-hero-modern {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4f46e5, #8b5cf6);
  overflow: hidden;
}

.hero-bg-animation { position: absolute; inset: 0; z-index: 1; }
.floating-shape { position: absolute; border-radius: 50%; filter: blur(40px); opacity: .35; animation: float-contact 18s infinite ease-in-out; }
.shape-a { top: 12%; left: 18%; width: 280px; height: 280px; background: linear-gradient(45deg, #22c55e, #16a34a); }
.shape-b { bottom: 10%; right: 15%; width: 220px; height: 220px; background: linear-gradient(45deg, #06b6d4, #0ea5e9); animation-delay: -5s; }
.shape-c { top: 45%; left: 8%; width: 140px; height: 140px; background: linear-gradient(45deg, #f59e0b, #ef4444); animation-delay: -10s; }
.shape-d { top: 25%; right: 40%; width: 110px; height: 110px; background: linear-gradient(45deg, #a78bfa, #60a5fa); animation-delay: -14s; }
@keyframes float-contact { 0%,100%{transform:translate(0,0) scale(1)} 25%{transform:translate(25px,-40px) scale(1.06)} 50%{transform:translate(-20px,-70px) scale(.94)} 75%{transform:translate(-35px,-20px) scale(1.02)} }

.contact-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 900px;
  padding: 2rem;
}

.hero-badge { display:inline-flex; align-items:center; gap:.6rem; background: rgba(255,255,255,.15); border:1px solid rgba(255,255,255,.25); backdrop-filter: blur(16px); border-radius:999px; padding:.6rem 1.2rem; margin-bottom:1rem; font-weight:700; }
.contact-hero-content h1 { font-size: clamp(2.4rem, 6vw, 3.5rem); font-weight: 900; letter-spacing: -1px; margin-bottom: .5rem; }
.gradient-text { background: linear-gradient(135deg, #ffd700, #ffed4e); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.subtitle { font-size: 1.1rem; opacity: .95; margin-bottom: 1.5rem; }
.hero-actions { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }

.btn-modern { display:inline-flex; align-items:center; gap:.6rem; padding:.9rem 1.4rem; border-radius:999px; font-weight:800; text-decoration:none; transition:.35s; position:relative; overflow:hidden; }
.btn-modern::before { content:''; position:absolute; inset:0; left:-100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent); transition:left .6s; }
.btn-modern:hover::before { left:100%; }
.btn-modern.primary { background:#fff; color:#1f2937; box-shadow: 0 10px 30px rgba(255,255,255,.25); }
.btn-modern.primary:hover { transform: translateY(-3px); }
.btn-modern.secondary { background: rgba(255,255,255,.15); border:2px solid rgba(255,255,255,.35); color:#fff; backdrop-filter: blur(12px); }
.btn-modern.secondary:hover { transform: translateY(-3px); background: rgba(255,255,255,.25); }


// Contact Section
.contact-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.glass-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: var(--shadow-medium);
  transition: all 0.3s ease;
}

// Contact Info
.contact-info {
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--primary-color);
    }
  }
  
  > p {
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-color);
  }
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
}

.info-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(79, 70, 229, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 1.2rem;
    color: var(--primary-color);
  }
}

.info-content {
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-color);
  }
}

.social-links {
  display: flex;
  gap: 0.8rem;
  
  a {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    transition: .3s;
    
    &:hover {
      background: var(--gradient-primary);
      color: white;
      transform: translateY(-3px);
      border-color: transparent;
      box-shadow: var(--shadow-medium);
    }
    
    i {
      font-size: 1.2rem;
    }
  }
}

// Contact Form
.contact-form {
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--primary-color);
    }
  }
}

form {
  margin-top: 2.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
    
    &::placeholder {
      color: #9ca3af;
    }
  }
}

.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &.success {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }
  
  &.error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
  
  &.info {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  i {
    font-size: 1.5rem;
  }
}

// LinkedIn Section
.linkedin-section {
  padding: 4rem 2rem;
  background-color: var(--light-color);
  text-align: center;
}

.linkedin-container {
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--text-color);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: var(--primary-color);
    }
  }
  
  .LI-profile-badge {
    display: inline-block;
    margin-top: 1.5rem;
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
  max-width: 800px;
  margin: 0 auto;
  
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
  transition: all 0.3s ease;
  border: none;
  outline: none;
  text-decoration: none;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover:not(:disabled) {
      background: var(--gradient-primary);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  
  &.large {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
}

// Responsive
@media (max-width: 768px) {
  .container { padding: 0 1rem; }
  .contact-hero-modern { min-height: 60vh; padding: 2rem 1rem; }
  .hero-actions { flex-direction: column; }
  .btn-modern { width: 100%; justify-content: center; }
  .contact-hero-content {
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .contact-info,
  .contact-form {
    h2 {
      font-size: 1.8rem;
    }
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-content {
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
}
</style>
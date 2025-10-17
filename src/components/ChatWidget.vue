<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { useChat } from '../composables/useChat';

const { messages, sendMessage, loadMessages, isLoading, startPolling, stopPolling, addMessage } = useChat();
const isOpen = ref(false);
const messageInput = ref('');
const nameInput = ref('');
const phoneInput = ref('');
const chatMessagesRef = ref(null);
const hasUnreadMessages = ref(false);
const showContactForm = ref(true);
const userName = ref('');
const userPhone = ref('');
const sessionId = ref('');

// Carregar mensagens ao montar
onMounted(() => {
  loadMessages();
  
  // Gerar ou recuperar ID único da sessão
  let savedSessionId = localStorage.getItem('chatSessionId');
  if (!savedSessionId) {
    savedSessionId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('chatSessionId', savedSessionId);
  }
  sessionId.value = savedSessionId;
  
  // Verificar se já tem dados salvos
  const savedName = localStorage.getItem('userName');
  const savedPhone = localStorage.getItem('userPhone');
  if (savedName && savedPhone) {
    userName.value = savedName;
    userPhone.value = savedPhone;
    showContactForm.value = false;
  }
  
  // Verificar se há mensagens não lidas
  const lastReadTime = localStorage.getItem('lastReadTime');
  if (lastReadTime) {
    const hasUnread = messages.value.some(msg => 
      msg.timestamp > parseInt(lastReadTime) && !msg.isUser
    );
    hasUnreadMessages.value = hasUnread;
  }
  
  // Iniciar polling para buscar respostas do Telegram
  startPolling();
  console.log('🔄 Sistema de polling ativado - suas respostas do Telegram aparecerão automaticamente!');
});

// Abrir/fechar chat
const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    hasUnreadMessages.value = false;
    localStorage.setItem('lastReadTime', Date.now().toString());
    nextTick(() => {
      scrollToBottom();
    });
  }
};

// Salvar dados do usuário
const handleSaveContact = () => {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  
  if (!name || !phone) return;
  
  userName.value = name;
  userPhone.value = phone;
  localStorage.setItem('userName', name);
  localStorage.setItem('userPhone', phone);
  showContactForm.value = false;
  
  // Adicionar mensagem de boas-vindas automática
  const welcomeMessage = `Olá, ${name}! 👋\n\nObrigado por entrar em contato! Em breve responderei sua mensagem.\n\nPor favor, envie sua dúvida ou solicitação.`;
  addMessage(welcomeMessage, false);
  
  nextTick(() => {
    scrollToBottom();
  });
};

// Enviar mensagem
const handleSendMessage = async () => {
  const text = messageInput.value.trim();
  if (!text || isLoading.value) return;

  messageInput.value = '';
  await sendMessage(text, userName.value, userPhone.value, sessionId.value);
  
  nextTick(() => {
    scrollToBottom();
  });
};

// Alterar dados
const changeContact = () => {
  showContactForm.value = true;
  nameInput.value = userName.value;
  phoneInput.value = userPhone.value;
};

// Scroll para o final
const scrollToBottom = () => {
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight;
  }
};

// Formatar hora
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
};

// Formatar data
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Hoje';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Ontem';
  } else {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  }
};

// Agrupar mensagens por data
const groupedMessages = computed(() => {
  const groups = {};
  messages.value.forEach(msg => {
    const dateKey = new Date(msg.timestamp).toDateString();
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(msg);
  });
  return groups;
});
</script>

<template>
  <div class="chat-widget">
    <!-- Botão flutuante -->
    <button 
      class="chat-button" 
      @click="toggleChat"
      :class="{ 'active': isOpen }"
      aria-label="Chat"
    >
      <transition name="icon-fade" mode="out-in">
        <i v-if="!isOpen" class="fas fa-comments" key="open"></i>
        <i v-else class="fas fa-times" key="close"></i>
      </transition>
      <span v-if="hasUnreadMessages && !isOpen" class="unread-badge"></span>
    </button>

    <!-- Janela do chat -->
    <transition name="chat-slide">
      <div v-if="isOpen" class="chat-window">
        <!-- Header -->
        <div class="chat-header">
          <div class="header-content">
            <div class="avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="header-info">
              <h3>Murilo Manoel</h3>
              <span class="status">
                <span class="status-dot"></span>
                Online
              </span>
            </div>
          </div>
        </div>

        <!-- Formulário de Contato -->
        <div v-if="showContactForm" class="contact-form-container">
          <div class="contact-form">
            <div class="contact-icon">
              <i class="fas fa-user-circle"></i>
            </div>
            <h3>Olá! 👋</h3>
            <p class="main-text">Para começarmos, preciso saber quem você é:</p>
            
            <form @submit.prevent="handleSaveContact">
              <label>
                <span class="label-text">
                  <i class="fas fa-user"></i>
                  Seu Nome *
                </span>
                <input 
                  v-model="nameInput"
                  type="text" 
                  placeholder="Ex: João Silva"
                  required
                  autofocus
                />
              </label>

              <label>
                <span class="label-text">
                  <i class="fas fa-phone"></i>
                  Seu Telefone/WhatsApp *
                </span>
                <input 
                  v-model="phoneInput"
                  type="tel" 
                  placeholder="Ex: (11) 99999-9999"
                  required
                />
              </label>
              
              <button type="submit" :disabled="!nameInput.trim() || !phoneInput.trim()">
                <i class="fas fa-paper-plane"></i>
                Iniciar Conversa
              </button>
            </form>
            
            <div class="info-box">
              <i class="fas fa-info-circle"></i>
              <p>Seus dados serão enviados com cada mensagem para que eu possa identificar você e responder.</p>
            </div>
            
            <p class="privacy-note">
              <i class="fas fa-lock"></i>
              Seus dados estão seguros e protegidos.
            </p>
          </div>
        </div>

        <!-- Mensagens -->
        <div v-else class="chat-messages" ref="chatMessagesRef">
          <div class="welcome-message">
            <div class="welcome-icon">
              <i class="fas fa-hand-wave"></i>
            </div>
            <h4>Olá, {{ userName }}! 👋</h4>
            <p>Como posso ajudar você hoje? Envie sua mensagem e responderei assim que possível!</p>
            <button @click="changeContact" class="change-contact-btn">
              <i class="fas fa-edit"></i>
              Alterar dados ({{ userPhone }})
            </button>
          </div>

          <div v-for="(msgs, dateKey) in groupedMessages" :key="dateKey" class="message-group">
            <div class="date-divider">
              <span>{{ formatDate(msgs[0].timestamp) }}</span>
            </div>
            
            <div 
              v-for="message in msgs" 
              :key="message.id"
              class="message"
              :class="{ 'user-message': message.isUser, 'bot-message': !message.isUser }"
            >
              <div class="message-content">
                <p>{{ message.text }}</p>
                <span class="message-time">{{ formatTime(message.timestamp) }}</span>
              </div>
            </div>
          </div>

          <!-- Loading indicator -->
          <div v-if="isLoading" class="message bot-message">
            <div class="message-content typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div v-if="!showContactForm" class="chat-input">
          <form @submit.prevent="handleSendMessage">
            <input 
              v-model="messageInput"
              type="text" 
              placeholder="Digite sua mensagem..."
              :disabled="isLoading"
            />
            <button 
              type="submit" 
              :disabled="!messageInput.trim() || isLoading"
              aria-label="Enviar mensagem"
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.chat-widget {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
}

.chat-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(79, 70, 229, 0.6);
  }

  &.active {
    transform: rotate(90deg);
  }

  .unread-badge {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 12px;
    height: 12px;
    background: #ef4444;
    border-radius: 50%;
    border: 2px solid white;
    animation: pulse 2s infinite;
  }
}

.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 550px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

.chat-header {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  padding: 1.5rem;
  
  .header-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }

  .header-info {
    h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      opacity: 0.9;
      margin-top: 0.2rem;

      .status-dot {
        width: 8px;
        height: 8px;
        background: #10b981;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
    }
  }
}

// Formulário de Contato
.contact-form-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #f8fafc;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 320px;
  width: 100%;

  .contact-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
    animation: pulse 2s infinite;
  }

  h3 {
    margin: 0 0 0.8rem;
    color: var(--dark-color);
    font-size: 1.6rem;
    font-weight: 700;
  }

  .main-text {
    margin: 0 0 1.5rem;
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .label-text {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--dark-color);
        display: flex;
        align-items: center;
        gap: 0.5rem;

        i {
          color: var(--primary-color);
        }
      }
    }

    input {
      width: 100%;
      padding: 0.9rem 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      font-size: 0.95rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
      }
    }

    button {
      width: 100%;
      padding: 0.9rem;
      border: none;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .info-box {
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 10px;
    padding: 0.8rem;
    margin-top: 0.5rem;
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;

    i {
      color: #3b82f6;
      font-size: 1rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    p {
      margin: 0;
      font-size: 0.85rem;
      color: #1e40af;
      line-height: 1.5;
      text-align: left;
    }
  }

  .privacy-note {
    margin: 1rem 0 0;
    font-size: 0.8rem;
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    i {
      color: #10b981;
    }
  }
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
}

.welcome-message {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;

  .welcome-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin: 0 0 0.5rem;
    color: var(--dark-color);
    font-size: 1.2rem;
  }

  p {
    margin: 0 0 1rem;
    color: var(--text-color);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .change-contact-btn {
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: #e5e7eb;
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    i {
      font-size: 0.8rem;
    }
  }
}

.date-divider {
  text-align: center;
  margin: 1rem 0;

  span {
    background: rgba(0, 0, 0, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    color: var(--text-color);
    font-weight: 500;
  }
}

.message {
  display: flex;
  margin-bottom: 0.8rem;
  animation: messageSlide 0.3s ease;

  &.user-message {
    justify-content: flex-end;

    .message-content {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      color: white;
      border-radius: 18px 18px 4px 18px;
    }
  }

  &.bot-message {
    justify-content: flex-start;

    .message-content {
      background: white;
      color: var(--dark-color);
      border-radius: 18px 18px 18px 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
  }

  .message-content {
    max-width: 75%;
    padding: 0.8rem 1rem;
    position: relative;

    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
      word-wrap: break-word;
    }

    .message-time {
      display: block;
      font-size: 0.7rem;
      opacity: 0.7;
      margin-top: 0.3rem;
    }
  }
}

.typing-indicator {
  display: flex;
  gap: 0.3rem;
  padding: 1rem !important;

  span {
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
    animation: typing 1.4s infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

.chat-input {
  padding: 1rem;
  background: white;
  border-top: 1px solid #e5e7eb;

  form {
    display: flex;
    gap: 0.5rem;
  }

  input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 25px;
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

// Animations
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-slide-enter-from,
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.2s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(90deg);
}

@keyframes messageSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
}
</style>

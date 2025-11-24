<script setup>
import { ref } from 'vue';

const phoneNumber = '11957241394';
const whatsappMessage = 'Olá! 👋 Gostaria de conversar com você!';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const showMessage = ref(false);

const openWhatsApp = () => {
  showMessage.value = true;
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    showMessage.value = false;
  }, 500);
};
</script>

<template>
  <div class="whatsapp-button-container">
    <transition name="pop">
      <div v-if="showMessage" class="success-message">
        ✓ Abrindo WhatsApp...
      </div>
    </transition>
    
    <button 
      class="whatsapp-button" 
      @click="openWhatsApp"
      aria-label="Abrir WhatsApp"
      title="Enviar mensagem no WhatsApp"
    >
      <span class="badge">1</span>
      <i class="fab fa-whatsapp"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.whatsapp-button-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  animation: slideIn 0.3s ease-in-out;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
}

.whatsapp-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 0%, #20ba5f 100%);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 26px;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.7);
    animation: pulse 1.5s infinite;
  }

  &:active {
    transform: scale(0.95);
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #dc2626;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.5);
  animation: badgeBounce 2s infinite;
  border: 3px solid white;
}

.success-message {
  position: absolute;
  bottom: 85px;
  right: 0;
  background: #22c55e;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
  white-space: nowrap;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
  }
}

@keyframes badgeBounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pop-enter-active, .pop-leave-active {
  transition: all 0.3s ease;
}

.pop-enter-from, .pop-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>

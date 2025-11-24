<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error', 'info'].includes(value)
  },
  message: String,
  duration: {
    type: Number,
    default: 4000
  }
});

const isVisible = ref(false);

const show = () => {
  isVisible.value = true;
  if (props.duration > 0) {
    setTimeout(() => {
      isVisible.value = false;
    }, props.duration);
  }
};

const hide = () => {
  isVisible.value = false;
};

defineExpose({
  show,
  hide
});

onMounted(() => {
  if (props.message) {
    show();
  }
});
</script>

<template>
  <transition name="slide-down">
    <div v-if="isVisible" class="notification" :class="`notification-${type}`">
      <div class="notification-content">
        <i v-if="type === 'success'" class="fas fa-check-circle"></i>
        <i v-else-if="type === 'error'" class="fas fa-exclamation-circle"></i>
        <i v-else class="fas fa-info-circle"></i>
        <span>{{ message }}</span>
      </div>
      <button class="notification-close" @click="hide">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 400px;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  font-weight: 500;
  animation: slideIn 0.4s ease-out;

  @media (max-width: 640px) {
    left: 10px;
    right: 10px;
    max-width: none;
  }

  &-content {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex: 1;

    i {
      font-size: 1.2rem;
      flex-shrink: 0;
    }
  }

  &-close {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 1rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.notification-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.notification-error {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.notification-info {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(400px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateX(400px);
}
</style>

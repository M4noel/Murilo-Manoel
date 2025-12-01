import { ref, onMounted, onUnmounted } from 'vue';

export function useLazyLoad(options = {}) {
  const isVisible = ref(false);
  const target = ref(null);
  let observer = null;

  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          // Desconectar após carregar
          if (observer && target.value) {
            observer.unobserve(target.value);
          }
        }
      });
    }, defaultOptions);

    if (target.value) {
      observer.observe(target.value);
    }
  });

  onUnmounted(() => {
    if (observer && target.value) {
      observer.unobserve(target.value);
    }
  });

  return {
    isVisible,
    target
  };
}

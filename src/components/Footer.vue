<template>
  <footer class="footer">
    <div class="social-links">
      <a href="https://github.com/M4noel" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="#" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="#" target="_blank" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    <p>&copy; {{ new Date().getFullYear() }} Murilo Manoel. Desenvolvedor Web.</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(135deg, var(--dark-color) 0%, #111827 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gradient-primary);
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      color: white;
      font-size: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all var(--transition-speed) ease;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient-primary);
        border-radius: 50%;
        transform: scale(0);
        transition: transform var(--transition-speed) ease;
        z-index: -1;
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-medium);
        
        &::before {
          transform: scale(1);
        }
      }
      
      &:nth-child(1):hover {
        background: #333;
      }
      
      &:nth-child(2):hover {
        background: #0077b5;
      }
      
      &:nth-child(3):hover {
        background: #1da1f2;
      }
    }
  }
  
  p {
    opacity: 0.8;
    font-size: 0.9rem;
  }
}
</style>

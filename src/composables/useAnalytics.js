// Composable para usar Vercel Analytics em componentes Vue
import { track } from '@vercel/analytics'

export function useAnalytics() {
  
  // Função para rastrear eventos personalizados
  const trackEvent = (eventName, properties = {}) => {
    track(eventName, properties)
  }

  // Função para rastrear clicks em botões
  const trackButtonClick = (buttonName, section = 'unknown') => {
    track('button_click', {
      button_name: buttonName,
      section: section
    })
  }

  // Função para rastrear navegação
  const trackPageView = (pageName) => {
    track('page_view', {
      page: pageName
    })
  }

  // Função para rastrear interações de contato
  const trackContactAction = (action) => {
    track('contact_action', {
      action: action
    })
  }

  // Função para rastrear downloads (se houver CV, etc)
  const trackDownload = (fileName) => {
    track('download', {
      file: fileName
    })
  }

  return {
    trackEvent,
    trackButtonClick,
    trackPageView,
    trackContactAction,
    trackDownload
  }
}

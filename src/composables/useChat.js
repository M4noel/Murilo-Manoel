import { ref } from 'vue';

const STORAGE_KEY = 'chat_messages';
const API_URL = import.meta.env.VITE_BOT_API_URL || 'http://localhost:3000';

// Estado compartilhado entre todas as instâncias
const messages = ref([]);
const isLoading = ref(false);

export function useChat() {
  // Carregar mensagens do localStorage
  const loadMessages = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        messages.value = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
      messages.value = [];
    }
  };

  // Salvar mensagens no localStorage
  const saveMessages = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value));
    } catch (error) {
      console.error('Erro ao salvar mensagens:', error);
    }
  };

  // Adicionar mensagem
  const addMessage = (text, isUser = false) => {
    const message = {
      id: Date.now() + Math.random(),
      text,
      isUser,
      timestamp: Date.now(),
      status: 'sent'
    };
    messages.value.push(message);
    saveMessages();
    return message;
  };

  // Enviar mensagem para o Telegram
  const sendMessage = async (text, userName = '', userPhone = '', sessionId = '') => {
    // Adicionar mensagem do usuário
    addMessage(text, true);
    
    isLoading.value = true;

    try {
      // Enviar para o bot do Telegram
      const response = await fetch(`${API_URL}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          userName: userName || 'Visitante',
          userPhone: userPhone || 'Não informado',
          sessionId: sessionId,
          timestamp: Date.now()
        })
      });

      const data = await response.json();

      if (data.success) {
        console.log('✅ Mensagem enviada para o Telegram com sucesso!');
        
        // Se há notificação do sistema (chat iniciado ou fila), mostrar para o usuário
        if (data.systemNotification) {
          setTimeout(() => {
            addMessage(data.systemNotification, false);
          }, 500);
        }
      } else {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      addMessage(
        'Desculpe, houve um erro ao enviar sua mensagem. Tente novamente ou entre em contato pelo email.',
        false
      );
    } finally {
      isLoading.value = false;
    }
  };

  // Verificar novas mensagens do bot (polling)
  const checkNewMessages = async () => {
    try {
      const sessionId = localStorage.getItem('chatSessionId');
      const lastMessageId = localStorage.getItem('lastMessageId') || '0';
      console.log('🔍 Verificando novas mensagens... SessionID:', sessionId, 'LastMessageId:', lastMessageId);
      
      const response = await fetch(`${API_URL}/api/messages?sessionId=${sessionId}&lastMessageId=${lastMessageId}`);
      const data = await response.json();

      console.log('📨 Resposta da API:', data);

      if (data.success && data.messages && data.messages.length > 0) {
        console.log(`✉️ ${data.messages.length} mensagem(ns) encontrada(s)`);
        
        // Adicionar novas mensagens que ainda não existem
        let newCount = 0;
        let maxMessageId = parseInt(lastMessageId);
        
        data.messages.forEach(msg => {
          const exists = messages.value.some(m => m.telegramId === msg.id);
          if (!exists && !msg.isUser) {
            console.log('➕ Nova mensagem:', msg.text, msg.isSystemMessage ? '(Sistema)' : '(Telegram)');
            addMessage(msg.text, false);
            messages.value[messages.value.length - 1].telegramId = msg.id;
            messages.value[messages.value.length - 1].isSystemMessage = msg.isSystemMessage || false;
            newCount++;
            
            // Atualizar o maior ID de mensagem recebido
            if (msg.id > maxMessageId) {
              maxMessageId = msg.id;
            }
          }
        });
        
        // Salvar o último ID de mensagem processado
        if (maxMessageId > parseInt(lastMessageId)) {
          localStorage.setItem('lastMessageId', maxMessageId.toString());
        }
        
        if (newCount > 0) {
          console.log(`✅ ${newCount} nova(s) mensagem(ns) adicionada(s) ao chat!`);
        }
      } else {
        console.log('📭 Nenhuma mensagem nova');
      }
      
      // Verificar status da conversa
      if (data.conversationStatus) {
        const status = data.conversationStatus.status;
        console.log('📊 Status da conversa:', status);
        
        // Salvar status no localStorage para referência
        const previousStatus = localStorage.getItem('conversationStatus');
        localStorage.setItem('conversationStatus', status);
        
        // Se o status mudou para 'ended' e ainda não mostramos a mensagem
        if (status === 'ended' && previousStatus !== 'ended') {
          console.log('🔴 Conversa encerrada - verificando se já tem mensagem de encerramento');
          // A mensagem de encerramento já deve vir do servidor nas mensagens do sistema
        }
      }
    } catch (error) {
      console.error('❌ Erro ao verificar novas mensagens:', error);
    }
  };

  // Encerrar chat pelo usuário
  const endChat = async (userName = '', userPhone = '', sessionId = '') => {
    try {
      const response = await fetch(`${API_URL}/api/user-end-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          userName: userName,
          userPhone: userPhone
        })
      });

      const data = await response.json();

      if (data.success) {
        console.log('✅ Chat encerrado com sucesso!');
        
        // Adicionar mensagem de confirmação
        addMessage('✅ Você encerrou o chat. Obrigado pelo contato!', false);
        
        // Parar o polling
        stopPolling();
        
        return true;
      } else {
        throw new Error(data.message || 'Erro ao encerrar chat');
      }
    } catch (error) {
      console.error('❌ Erro ao encerrar chat:', error);
      addMessage('Erro ao encerrar o chat. Tente novamente.', false);
      return false;
    }
  };

  // Limpar histórico de mensagens
  const clearMessages = () => {
    messages.value = [];
    localStorage.removeItem(STORAGE_KEY);
  };

  // Iniciar polling automático (verifica a cada 5 segundos)
  let pollingInterval = null;
  
  const startPolling = () => {
    if (pollingInterval) return; // Já está rodando
    
    // Verificar imediatamente
    checkNewMessages();
    
    // Depois verificar a cada 5 segundos
    pollingInterval = setInterval(() => {
      checkNewMessages();
    }, 5000);
    
    console.log('✅ Polling iniciado - verificando mensagens a cada 5s');
  };
  
  const stopPolling = () => {
    if (pollingInterval) {
      clearInterval(pollingInterval);
      pollingInterval = null;
      console.log('⏹️ Polling parado');
    }
  };

  return {
    messages,
    isLoading,
    loadMessages,
    sendMessage,
    addMessage,
    checkNewMessages,
    clearMessages,
    startPolling,
    stopPolling,
    endChat
  };
}

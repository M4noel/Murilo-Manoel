# 🚀 Instruções Rápidas - Chat Integrado

## ⚡ Início Rápido

### 1️⃣ Configurar Variáveis de Ambiente

**No portfólio** (`c:\Users\Murilo\Desktop\itePortifolio`):
```bash
# Crie um arquivo .env na raiz com:
VITE_BOT_API_URL=http://localhost:3000
```

**No bot** (`c:\Users\Murilo\Desktop\bot-automatico`):
```bash
# O arquivo .env já deve existir com:
TELEGRAM_TOKEN=seu_token_do_botfather
TELEGRAM_CHAT_ID=seu_chat_id
```

### 2️⃣ Iniciar o Servidor do Bot

```bash
cd c:\Users\Murilo\Desktop\bot-automatico
npm run dev
```

Deve aparecer:
```
✅ Servidor rodando em http://localhost:3000
📡 API disponível em http://localhost:3000/api/send
💬 Chat API disponível em http://localhost:3000/api/messages
```

### 3️⃣ Iniciar o Site

```bash
cd c:\Users\Murilo\Desktop\itePortifolio
npm run dev
```

### 4️⃣ Testar o Chat

1. Abra o site no navegador
2. Clique no ícone de chat no canto inferior direito
3. Digite uma mensagem e envie
4. Verifique se a mensagem chegou no seu Telegram
5. Responda no Telegram
6. A resposta deve aparecer automaticamente no chat do site!

## 📝 Como Funciona

### Fluxo de Mensagem do Visitante para Você:
1. Visitante digita mensagem no chat do site
2. Mensagem é salva no localStorage do navegador
3. Mensagem é enviada para `http://localhost:3000/api/send`
4. Servidor envia para o Telegram via Bot API
5. Você recebe notificação no Telegram

### Fluxo de Resposta (Você para Visitante):
1. Você responde no Telegram normalmente
2. Site faz polling em `http://localhost:3000/api/messages` a cada 10s
3. Servidor busca novas mensagens do Telegram
4. Novas mensagens são retornadas para o site
5. Chat do site exibe sua resposta automaticamente
6. Mensagem é salva no localStorage

## 🎯 Recursos Implementados

✅ **Chat Widget Flutuante** - Ícone no canto inferior direito
✅ **Mensagens Bidirecionais** - Visitante ↔ Telegram
✅ **LocalStorage** - Histórico salvo no navegador
✅ **Badge de Notificação** - Indica mensagens não lidas
✅ **Design Responsivo** - Mobile e Desktop
✅ **Animações Suaves** - Transições e efeitos
✅ **Indicador de Digitação** - Mostra quando está carregando
✅ **Agrupamento por Data** - Organiza mensagens por dia
✅ **Horário das Mensagens** - Timestamp em cada mensagem

## 🔧 Arquivos Criados/Modificados

### Novos Arquivos:
- `src/components/ChatWidget.vue` - Componente do chat
- `src/composables/useChat.js` - Lógica de gerenciamento
- `.env.example` - Exemplo de configuração
- `CHAT_SETUP.md` - Documentação completa
- `INSTRUCOES_CHAT.md` - Este arquivo

### Arquivos Modificados:
- `src/App.vue` - Adicionado ChatWidget
- `bot-automatico/server.js` - API bidirecional
- `bot-automatico/package.json` - Dependência cors

## 🎨 Personalização

### Mudar Cores:
Edite as variáveis CSS em `src/App.vue`:
```css
--primary-color: #4f46e5;
--secondary-color: #10b981;
--accent-color: #8b5cf6;
```

### Mudar Posição do Botão:
Em `ChatWidget.vue`, procure por `.chat-widget`:
```scss
.chat-widget {
  bottom: 2rem;  // Distância do fundo
  right: 2rem;   // Distância da direita
}
```

### Mudar Mensagem de Boas-vindas:
Em `ChatWidget.vue`, procure por `.welcome-message`:
```vue
<h4>Olá! 👋</h4>
<p>Sua mensagem personalizada aqui</p>
```

## 🐛 Solução de Problemas

### Chat não aparece?
- Verifique se o servidor do bot está rodando
- Abra o console do navegador (F12) e procure por erros
- Confirme que o ChatWidget está importado no App.vue

### Mensagens não chegam no Telegram?
- Verifique o arquivo .env do bot
- Teste o token: `https://api.telegram.org/bot<TOKEN>/getMe`
- Verifique os logs do servidor do bot

### Respostas não aparecem no site?
- Confirme que está respondendo no chat correto
- Verifique o console do navegador
- Teste a API: `http://localhost:3000/api/messages`

### Erro de CORS?
- Certifique-se de que instalou o cors: `npm install cors`
- Reinicie o servidor do bot

## 📱 Testando em Produção

### Deploy do Bot (Vercel):
1. Push para GitHub
2. Importe no Vercel
3. Configure variáveis de ambiente
4. Copie a URL do deploy

### Deploy do Site (Vercel):
1. Configure `VITE_BOT_API_URL` com a URL do bot
2. Deploy!

## 💡 Dicas

- **Mantenha o servidor do bot rodando** para receber mensagens
- **LocalStorage persiste** - Mensagens ficam salvas no navegador
- **Polling a cada 10s** - Para respostas em tempo real
- **Mobile-friendly** - Chat ocupa tela inteira no mobile
- **Sem limite de mensagens** - Histórico ilimitado no localStorage

## 📞 Próximos Passos

1. Teste o sistema localmente
2. Configure seu bot do Telegram
3. Personalize as cores e mensagens
4. Faça deploy em produção
5. Compartilhe o link do seu portfólio!

---

🎉 **Pronto!** Agora você tem um sistema de chat profissional integrado ao Telegram!

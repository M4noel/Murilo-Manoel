# 💬 Sistema de Chat Integrado com Telegram

## 📋 Visão Geral

Este sistema permite que visitantes do seu site enviem mensagens diretamente para você via Telegram, e você pode responder pelo Telegram - as respostas aparecem automaticamente no chat do site!

## ✨ Funcionalidades

- **Chat Widget Flutuante**: Ícone de chat no canto inferior direito
- **Mensagens Bidirecionais**: Visitante → Telegram e Telegram → Visitante
- **LocalStorage**: Conversas salvas localmente no navegador
- **Notificações**: Badge de mensagens não lidas
- **Design Responsivo**: Funciona perfeitamente em mobile e desktop

## 🚀 Como Funciona

1. **Visitante envia mensagem** → Aparece no chat do site
2. **Mensagem é enviada para o Telegram** → Você recebe notificação
3. **Você responde no Telegram** → Resposta aparece automaticamente no chat do site
4. **Histórico salvo** → Visitante pode voltar e ver a conversa

## 🛠️ Configuração

### 1. Configurar o Bot do Telegram

Se ainda não configurou, siga os passos:

1. Abra o Telegram e procure por `@BotFather`
2. Envie `/newbot` e siga as instruções
3. Guarde o **TOKEN** fornecido
4. Envie uma mensagem para o seu bot
5. Acesse: `https://api.telegram.org/bot<SEU_TOKEN>/getUpdates`
6. Copie o **CHAT_ID** do resultado

### 2. Configurar o Servidor do Bot

```bash
# Navegue até a pasta do bot
cd c:\Users\Murilo\Desktop\bot-automatico

# Instale as dependências (incluindo o novo pacote cors)
npm install

# Configure as variáveis de ambiente no arquivo .env
TELEGRAM_TOKEN=seu_token_aqui
TELEGRAM_CHAT_ID=seu_chat_id_aqui

# Inicie o servidor
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

### 3. Configurar o Site (Portfólio)

```bash
# Navegue até a pasta do portfólio
cd c:\Users\Murilo\Desktop\itePortifolio

# Crie um arquivo .env na raiz do projeto
# Adicione a URL da API do bot:
VITE_BOT_API_URL=http://localhost:3000

# Inicie o site
npm run dev
```

## 📡 Endpoints da API

### POST `/api/send`
Envia mensagem do site para o Telegram

**Body:**
```json
{
  "message": "Olá, gostaria de um orçamento",
  "userName": "Visitante do Site",
  "timestamp": 1234567890
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

### GET `/api/messages`
Busca novas mensagens do Telegram (suas respostas)

**Response:**
```json
{
  "success": true,
  "messages": [
    {
      "id": 123,
      "text": "Olá! Claro, vou te enviar um orçamento.",
      "isUser": false,
      "timestamp": 1234567890,
      "userName": "Murilo"
    }
  ]
}
```

### GET `/api/history`
Retorna todo o histórico de mensagens

### DELETE `/api/history`
Limpa o histórico (útil para desenvolvimento)

## 🎨 Personalização

### Cores e Estilo

Edite `src/components/ChatWidget.vue` para personalizar:

- **Cores**: Usa as variáveis CSS do tema (--primary-color, etc)
- **Tamanho**: Ajuste width/height da `.chat-window`
- **Posição**: Modifique bottom/right da `.chat-widget`
- **Animações**: Customize as transitions e keyframes

### Mensagem de Boas-vindas

No arquivo `ChatWidget.vue`, procure por `.welcome-message`:

```vue
<div class="welcome-message">
  <h4>Olá! 👋</h4>
  <p>Sua mensagem personalizada aqui</p>
</div>
```

## 🔄 Fluxo de Mensagens

```
┌─────────────┐         ┌──────────────┐         ┌──────────────┐
│   Visitante │────────>│  API Server  │────────>│   Telegram   │
│   (Site)    │         │ (localhost)  │         │  (Seu Chat)  │
└─────────────┘         └──────────────┘         └──────────────┘
       ↑                        ↑                        │
       │                        │                        │
       │                   Polling                       │
       └────────────────────────┴────────────────────────┘
                        (Suas respostas)
```

## 📱 Como Responder

1. **Receba a notificação** no Telegram
2. **Responda normalmente** no chat do Telegram
3. **A resposta aparece automaticamente** no site (via polling)
4. **Visitante vê sua resposta** em tempo real

## 🔒 Segurança

- ✅ **CORS configurado** para aceitar apenas seu domínio
- ✅ **Variáveis de ambiente** protegidas (.env não commitado)
- ✅ **Validação de mensagens** no backend
- ✅ **Rate limiting** recomendado para produção

## 🚀 Deploy em Produção

### Vercel (Backend - Bot)

1. Faça push do código do bot para o GitHub
2. Importe no Vercel
3. Configure as variáveis de ambiente:
   - `TELEGRAM_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Deploy!

### Vercel (Frontend - Site)

1. Configure a variável de ambiente:
   - `VITE_BOT_API_URL=https://seu-bot.vercel.app`
2. Deploy!

## 🐛 Troubleshooting

### Chat não abre
- Verifique se o componente `ChatWidget` está importado no `App.vue`
- Verifique o console do navegador para erros

### Mensagens não chegam no Telegram
- Confirme que o servidor do bot está rodando
- Verifique as variáveis de ambiente (.env)
- Teste a API diretamente: `curl -X POST http://localhost:3000/api/send -H "Content-Type: application/json" -d '{"message":"teste"}'`

### Respostas não aparecem no site
- Verifique se o polling está funcionando (console do navegador)
- Confirme que você está respondendo no chat correto do Telegram
- Teste o endpoint: `curl http://localhost:3000/api/messages`

### CORS Error
- Certifique-se de que o pacote `cors` está instalado no bot
- Verifique se o servidor está rodando na porta correta

## 📚 Tecnologias Utilizadas

- **Frontend**: Vue.js 3 + Composition API
- **Backend**: Express.js + Node.js
- **API**: Telegram Bot API
- **Storage**: LocalStorage (navegador)
- **Styling**: SCSS com animações CSS

## 💡 Melhorias Futuras

- [ ] WebSocket para mensagens em tempo real (sem polling)
- [ ] Banco de dados para persistir mensagens
- [ ] Sistema de notificações push
- [ ] Upload de arquivos/imagens
- [ ] Indicador de "digitando..."
- [ ] Suporte a múltiplos visitantes simultâneos
- [ ] Dashboard admin para gerenciar conversas

## 📞 Suporte

Se tiver dúvidas ou problemas, verifique:
1. Logs do servidor do bot
2. Console do navegador
3. Documentação da Telegram Bot API

---

⭐ **Dica**: Mantenha o servidor do bot sempre rodando para receber mensagens em tempo real!

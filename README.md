# 🚀 Murilo Manoel - Portfólio Pessoal

Um portfólio moderno e responsivo construído com Vue.js 3, Vite e SCSS, apresentando minhas habilidades e projetos de desenvolvimento web.

## ✨ Características

- **Design Moderno**: Interface clean e profissional com gradientes e animações suaves
- **Totalmente Responsivo**: Otimizado para todos os dispositivos (desktop, tablet, mobile)
- **Performance Otimizada**: Construído com Vite para carregamento ultra-rápido
- **Animações Fluidas**: Transições suaves entre páginas e hover effects
- **Menu Mobile**: Hamburger menu interativo para dispositivos móveis
- **Tema Customizável**: Sistema de variáveis CSS para fácil personalização

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vue.js 3** - Framework JavaScript progressivo
- **Vue Router 4** - Roteamento SPA
- **Vite** - Build tool moderno e rápido
- **SCSS/Sass** - Pré-processador CSS avançado

### Design & Animações
- **GSAP** - Biblioteca de animações profissionais
- **AOS (Animate On Scroll)** - Animações ao scroll
- **FontAwesome** - Ícones profissionais
- **CSS Grid & Flexbox** - Layout responsivo moderno

### Ferramentas de Desenvolvimento
- **ES6+ JavaScript** - Sintaxe moderna
- **Hot Reload** - Desenvolvimento ágil
- **Component-based Architecture** - Código modular e reutilizável

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

### 4. Acesse no navegador
```
http://localhost:5173
```

## 🚀 Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Footer.vue      # Rodapé do site
│   └── HelloWorld.vue  # Componente inicial
├── views/              # Páginas principais
│   ├── Home.vue        # Página inicial
│   ├── About.vue       # Sobre mim
│   └── Contact.vue     # Contato
├── assets/             # Recursos estáticos
├── App.vue             # Componente principal
├── main.js             # Ponto de entrada
└── style.css           # Estilos globais
```

## 🎨 Funcionalidades

### Página Inicial (Home)
- Hero section impactante
- Apresentação profissional
- Call-to-actions estratégicos

### Sobre (About)
- História profissional
- Habilidades técnicas
- Experiências relevantes

### Contato (Contact)
- Formulário de contato
- Links para redes sociais
- Informações de contato

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. A configuração está otimizada no `vercel.json`
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy a pasta dist/ para GitHub Pages
```

## 🔧 Customização

### Cores e Tema
As variáveis CSS estão centralizadas em `App.vue`:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
  --accent-color: #8b5cf6;
  /* ... */
}
```

### Gradientes
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

## 📱 Responsividade

- **Desktop**: Layout completo com menu horizontal
- **Tablet**: Layout adaptado com espaçamentos otimizados  
- **Mobile**: Menu hamburger e layout em coluna única

## ⚡ Performance

- **Vite**: Build otimizado com tree-shaking
- **Code Splitting**: Carregamento sob demanda
- **Asset Optimization**: Compressão de imagens e CSS
- **Lazy Loading**: Componentes carregados conforme necessário

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

**Murilo Manoel**
- Portfolio: [Seu Site](https://seu-portfolio.vercel.app)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- Email: [seu-email@exemplo.com](mailto:seu-email@exemplo.com)
- GitHub: [Seu GitHub](https://github.com/seu-usuario)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

*Desenvolvido com ❤️ por Murilo Manoel*

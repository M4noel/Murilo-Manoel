# Como Gerar o Currículo em PDF

Para criar o arquivo PDF do currículo, siga estes passos:

## Método 1: Usando o navegador (Recomendado)

1. **Abrir o arquivo HTML**: 
   - Navegue até a pasta `public`
   - Abra o arquivo `curriculo-murilo-manoel.html` no seu navegador
   - Ou acesse através do site: `localhost:3000/curriculo-murilo-manoel.html`

2. **Imprimir como PDF**:
   - Pressione `Ctrl + P` (Windows/Linux) ou `Cmd + P` (Mac)
   - Na janela de impressão, selecione **"Salvar como PDF"**
   - Configure as opções:
     - Margens: Mínimas
     - Escala: 100%
     - Páginas: Todas
   - Clique em **"Salvar"**
   - Salve como `curriculo-murilo-manoel.pdf` na pasta `public`

## Método 2: Usando ferramenta online

1. Abra um conversor HTML para PDF online (como wkhtmltopdf.org)
2. Faça upload do arquivo `curriculo-murilo-manoel.html`
3. Baixe o PDF gerado
4. Salve na pasta `public` como `curriculo-murilo-manoel.pdf`

## Método 3: Usando Node.js (Avançado)

Se você tiver o Node.js instalado, pode usar o puppeteer:

```bash
npm install puppeteer
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/public/curriculo-murilo-manoel.html');
  await page.pdf({
    path: './public/curriculo-murilo-manoel.pdf',
    format: 'A4',
    margin: { top: '1cm', bottom: '1cm', left: '1cm', right: '1cm' }
  });
  await browser.close();
})();"
```

## Verificação

Após gerar o PDF:
1. Verifique se o arquivo está na pasta `public`
2. Teste o download no site clicando no botão "Baixar Currículo"
3. Confirme que todas as informações estão visíveis e bem formatadas

---

**Nota**: O currículo HTML já está otimizado para impressão com estilos CSS específicos para mídia print.

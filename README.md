# Mapa dos 4 Pesos

Quiz mobile-first para cuidadoras e cuidadores identificarem qual dos 4 pesos (Presença, Dinheiro, Burocracia ou Decisão e emoção) mais pesa hoje.

## Configuração do link de vendas

Edite apenas o arquivo `config.ts` na raiz do projeto:

```ts
export const SALES_URL = 'https://mapa4pesos.vercel.app/';
export const SALES_BUTTON_TEXT = 'Conhecer o Kit';
```

## Como subir manualmente para o GitHub e publicar no GitHub Pages

### Opção 1: Subindo o projeto completo (recomendado — publica automático)
1. Baixe os arquivos do projeto (ou faça upload desta pasta para um repositório no GitHub na branch `main`).
2. No repositório do GitHub, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. O arquivo `.github/workflows/deploy.yml` fará o build (`npm install && npm run build`) e publicará automaticamente a pasta `dist/`.

### Opção 2: Gerando os arquivos prontos localmente
1. Rode `npm install && npm run build`.
2. Todo o site estático pronto estará na pasta `dist/` (`index.html`, `rose.jpg` e `assets/`).
3. Suba o conteúdo da pasta `dist/` para a branch `gh-pages` ou para qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages ou GitHub Pages).

# 💪 Academia VitalFit — Landing Page Institucional

Landing page institucional para a **Academia VitalFit**, desenvolvida com HTML5, CSS3 e JavaScript, contando com menu fixo responsivo, carrossel de galeria com **Swiper**, animações de rolagem com **ScrollReveal** e formulário de contato via **Formspree**.

![alt text](image.png)

## ✨ Seções e Funcionalidades

- **Menu e Hero (`#inicio` / `.hero`):** Barra de navegação fixa com mudança de fundo/blur ao rolar a página (`#menu-principal.rolou`), menu hambúrguer para telas menores, chamada *"Construa o seu legado em cada treino"* e acesso rápido ao contato.
- **Sobre Nós (`#sobre` / `.sobre`):** Apresentação institucional da proposta, estrutura e equipe da VitalFit.
- **Nossos Planos (`#planos` / `.planos`):** Grade com três opções (**Mensal** a R$ 99,90/mês, **Trimestral** em destaque como *Mais vendido* a R$ 89,90/mês e **Anual** a R$ 69,90/mês) com benefícios listados e links para contato.
- **Galeria (`#galeria` / `.galeria`):** Carrossel **Swiper** com 12 slides (`imagemesteira.webp`, `imagem2.webp` a `imagem12.webp`), paginação por pontos, setas de navegação e autoplay a cada 4 segundos.
- **Depoimentos (`#testimonials` / `.testimonials`):** Cards com relatos de alunos (**Carlos Mendes**, **Juliana Ferreira** e **Rafael Souza**).
- **Contato (`#contato` / `.contact`):** Informações de endereço (`Rua das Palmeiras, 123 — Centro`), horários de funcionamento, telefone/WhatsApp e formulário (`nome`, `email` e `mensagem`) apontando para o Formspree (`https://formspree.io/f/SEU-ID`).
- **Rodapé (`.rodape`):** Direitos autorais e links rápidos.

## 🛠️ Tecnologias Utilizadas

- **HTML5** (`index.html` com meta tags de SEO e Open Graph)
- **CSS3** (`css/geral.css`, `css/header.css`, `css/hero.css`, `css/section.css`, `css/footer.css`, `css/responsive.css` e `Swiper` CSS via CDN)
- **JavaScript** (`script.js` para carrossel, transição do menu via `requestAnimationFrame`, menu mobile e `ScrollReveal`)
- **Bibliotecas e Fontes via CDN:**
  - [Swiper v11](https://swiperjs.com/)
  - [ScrollReveal v4](https://scrollrevealjs.org/)
  - Google Fonts (`Oswald` e `Montserrat`)

## 📁 Estrutura de Arquivos (conforme o código enviado)

```text
├── css/
│   ├── footer.css
│   ├── geral.css
│   ├── header.css
│   ├── hero.css
│   ├── responsive.css
│   └── section.css
├── imagem/
│   └── ... (imagens referenciadas no HTML e no CSS)
├── index.html
└── script.js
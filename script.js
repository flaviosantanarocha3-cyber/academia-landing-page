/*
SCRIPT DA ACADEMIA VITALFIT
--------------------------------------------------------
Aqui ficam as 3 responsabilidades do JavaScript:
1. Ligar o carrossel Swiper da galeria
2. Mudar o menu quando o usuário rola a página
3. Abrir/fechar o menu hamburguer no celular
*/

/* ============================================
   ============================================================ */
const swiper = new Swiper('.swiper', {

  loop: true,               // ao chegar na última imagem, volta para a primeira
  speed: 600,               // velocidade da animação de troca (ms)

  // troca de slide automática a cada 4 segundos
  autoplay: {
    delay: 4000,          // pausa entre um slide e outro
    disableOnInteraction: false,  // mesmo se o usuário mexer, continua depois
  },

  pagination: {
    el: '.swiper-pagination',   // onde as bolinhas aparecem
    clickable: true,            // permite clicar nas bolinhas para pular
  },

  navigation: {
    nextEl: '.swiper-button-next',  // seta para o próximo slide
    prevEl: '.swiper-button-prev',  // seta para o slide anterior
  },

  // quantos slides aparecem ao mesmo tempo, por tamanho de tela
  breakpoints: {
    0: {                  // celular: 1 imagem por vez
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {                // tablet: 2 imagens por vez
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {               // computador: 3 imagens por vez
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
});

/* ============================================================
   2. MENU QUE MUDA AO ROLAR
   
   ============================================================ */
const menu = document.querySelector('#menu-principal');

// rAF (requestAnimationFrame) faz o efeito rodar suave a 60fps
// sem travar o navegador em telas grandes
let posicaoAtual = 0;
let animacaoPendente = false;

function atualizarMenu() {
  // se passou de 60 pixels, o menu ganha fundo; senão, fica transparente
  if (posicaoAtual > 60) {
    menu.classList.add('rolou');
  } else {
    menu.classList.remove('rolou');
  }
  animacaoPendente = false;
}

window.addEventListener('scroll', () => {
  posicaoAtual = window.scrollY;

  // só agenda uma animação se não houver nenhuma pendente
  if (!animacaoPendente) {
    animacaoPendente = true;
    requestAnimationFrame(atualizarMenu);
  }
}, { passive: true });   // passive: true deixa a rolagem mais fluida no celular

/* ============================================================
   3. MENU HAMBURGUER (CELULAR)
   
   ============================================================ */
const botaoMenu = document.querySelector('#botao-menu-mobile');
const navegacao = document.querySelector('#menu-navegacao');

botaoMenu.addEventListener('click', () => {
  // toggle: adiciona a classe se não tem, remove se já tem
  botaoMenu.classList.toggle('menu-aberto');
  navegacao.classList.toggle('menu-aberto');
});

// fecha o menu automaticamente quando um link é clicado
// (assim o usuário não precisa fechar na mão)
const linksDoMenu = document.querySelectorAll('.menu-navegacao a');

linksDoMenu.forEach((link) => {
  link.addEventListener('click', () => {
    botaoMenu.classList.remove('menu-aberto');
    navegacao.classList.remove('menu-aberto');
  });
});


// Estrutura base: passar o seletor da classe
ScrollReveal().reveal('.texto-hero h1', {
  duration: 2000,
  origin: 'left',
  distance: '15%',
  opacity: 0,
  scale: 0.95,
  reset: true       // se deve repetir ao rolar novamente
});

ScrollReveal().reveal('.texto-hero span', {
  duration: 2000,
  origin: 'right',
  distance: '15%',
  opacity: 0,
  scale: 0.95,
  reset: true       // se deve repetir ao rolar novamente
});

ScrollReveal().reveal('.sobre ', {
  duration: 2000,
  origin: 'botton',
  distance: '20%',
  opacity: 0,
  scale: 0.95,
  reset: true       // se deve repetir ao rolar novamente
});

ScrollReveal().reveal('.planos ', {
  duration: 2000,
  origin: 'bottom',
  distance: '20%',
  opacity: 0,
  scale: 0.95,
  reset: true       // se deve repetir ao rolar novamente
});

ScrollReveal().reveal('.galeria ', {
  duration: 2000,
  origin: 'right',
  distance: '20%',
  opacity: 0,
  scale: 0.95,
  reset: true       // se deve repetir ao rolar novamente
});

ScrollReveal().reveal('.testimonials ', {
  duration: 2000,
  origin: 'left',
  distance: '20%',
  opacity: 0,
  scale: 0.95,
  reset: true       // se deve repetir ao rolar novamente
});

ScrollReveal().reveal('.contact ', {
  duration: 2000,
  origin: 'bottom',
  distance: '20%',
  opacity: 0,
  scale: 0.90,
  reset: true       // se deve repetir ao rolar novamente
});



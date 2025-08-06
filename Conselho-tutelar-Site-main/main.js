/* abre e fecha o menu ao cliclar = hamburger e x*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Fecha o menu ao clicar nos items*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scrol*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /*scroll é maior que a altura do header */
    header.classList.add('scroll')
  } else {
    /*menor que a altura do header*/
    header.classList.remove('scroll')
  }
}

/* Testimonialscarousel slider  swiper */
const swiper = new Swiper('.swiper', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWapperSize: true
    }
  }
})

/* ScrollReaveal: Mostrar elementos quando der scroll na página  */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials
 #contact .text, #contact .links
 footer .brand, footer .social
 `,
  { interval: 100 }
)

/* Botão voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Card selecionável 1*/

document.getElementById('selectable-card1').addEventListener('click', function() {
  window.location.href = 'https://prefeitura.poa.br/sites/default/files/usu_doc/cartadeservicos/Endere%C3%A7os%20CTs%20para%20Carta.pdf';
});

/* Card selecionável 2*/

document.getElementById('selectable-card2').addEventListener('click', function() {
  window.location.href = 'https://docs.google.com/forms/d/1mOu_aVpHsXo9ObfZcBvPH6D3ArEd-ltdHxSR94kzkj0/edit';
});

/* Card selecionável 3*/

document.getElementById('selectable-card3').addEventListener('click', function() {
  window.location.href = 'https://prefeitura.poa.br/cmdca/eleicoes-conselho-tutelar-porto-alegre-2023';
});

/* Menu ativo conforme a seção visível na página*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const chekpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && chekpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

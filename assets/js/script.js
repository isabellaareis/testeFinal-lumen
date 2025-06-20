/* MENU HAMBURGUER */

const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("active");
});

// Seleciona todos os itens da FAQ
const faqItems = document.querySelectorAll('.faq-item');
const toggleButton = document.getElementById('toggle-faq-btn');

let mostrarTudo = false;
const limiteInicial = 3;



function atualizarExibicaoFaqs() {
  faqItems.forEach((item, index) => {
    item.style.display = (mostrarTudo || index < limiteInicial) ? 'block' : 'none';
  });

  toggleButton.textContent = mostrarTudo ? 'Ver Menos' : 'Ver Mais';
}


function inicializarInteracoesFaq() {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    }
  });
}

function configurarToggleFaqs() {
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      mostrarTudo = !mostrarTudo;
      atualizarExibicaoFaqs();
    });
  }
}

// Execução inicial
inicializarInteracoesFaq();
configurarToggleFaqs();
atualizarExibicaoFaqs();
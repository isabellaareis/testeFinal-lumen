// MENU HAMBURGUER (mantém como está)
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("active");
});

// Código FAQ
const faqItems = document.querySelectorAll('.faq-item');
const toggleFaqBtn = document.getElementById('toggle-faq-btn');

let mostrarTudoFaq = false;
const limiteInicialFaq = 3;

function atualizarExibicaoFaqs() {
  faqItems.forEach((item, index) => {
    item.style.display = (mostrarTudoFaq || index < limiteInicialFaq) ? 'block' : 'none';
  });

  toggleFaqBtn.textContent = mostrarTudoFaq ? 'Ver Menos' : 'Ver Mais';
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
  if (toggleFaqBtn) {
    toggleFaqBtn.addEventListener('click', () => {
      mostrarTudoFaq = !mostrarTudoFaq;
      atualizarExibicaoFaqs();
    });
  }
}

inicializarInteracoesFaq();
configurarToggleFaqs();
atualizarExibicaoFaqs();

// Código Espada
const espadaItems = document.querySelectorAll('.espada-item');
const toggleEspadaBtn = document.getElementById('toggle-espada-btn');

let mostrarTudoEspada = false;
const limiteInicialEspada = 3;

function atualizarExibicaoEspadas() {
  espadaItems.forEach((item, index) => {
    item.style.display = (mostrarTudoEspada || index < limiteInicialEspada) ? 'block' : 'none';
  });

  toggleEspadaBtn.textContent = mostrarTudoEspada ? 'Ver Menos' : 'Ver Mais';
}

function inicializarInteracoesEspada() {
  espadaItems.forEach(item => {
    const question = item.querySelector('.espada-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    }
  });
}

function configurarToggleEspada() {
  if (toggleEspadaBtn) {
    toggleEspadaBtn.addEventListener('click', () => {
      mostrarTudoEspada = !mostrarTudoEspada;
      atualizarExibicaoEspadas();
    });
  }
}

inicializarInteracoesEspada();
configurarToggleEspada();
atualizarExibicaoEspadas();

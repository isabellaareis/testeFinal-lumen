/* MENU HAMBURGUER */

const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("active");
});

/* FAQ */
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

/* BOTÃO VER MAIS FAQS */
const toggleBtn = document.getElementById('toggle-faq-btn');

// Mostra inicialmente apenas 3 FAQs
let mostrarTudo = false;

function atualizarFaqs() {
  faqItems.forEach((item, index) => {
    item.style.display = mostrarTudo || index < 3 ? 'block' : 'none';
  });
  toggleBtn.textContent = mostrarTudo ? 'Ver Menos' : 'Ver Mais';
}

// Inicializa com só 3 visíveis
atualizarFaqs();

toggleBtn.addEventListener('click', () => {
  mostrarTudo = !mostrarTudo;
  atualizarFaqs();
});

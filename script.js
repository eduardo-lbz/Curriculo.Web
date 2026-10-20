// Interações simples e modernas
document.addEventListener('DOMContentLoaded', () => {
  const btnComecar = document.getElementById('btn-comecar');
  
  if (btnComecar) {
    btnComecar.addEventListener('click', () => {
      const recursosSection = document.getElementById('recursos');
      if (recursosSection) {
        recursosSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Efeito suave de rolagem para os links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

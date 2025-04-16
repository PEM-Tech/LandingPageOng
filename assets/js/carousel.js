document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
  
    function moveSlide(direction) {
      const slides = document.getElementById('carouselSlides');
      const totalSlides = slides.children.length;
  
      currentIndex += direction;
  
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      if (currentIndex >= totalSlides) currentIndex = 0;
  
      const offset = -(100 * currentIndex);
      slides.style.transform = `translateX(${offset}%)`;
    }
  
    // Deixa a função disponível globalmente para os botões
    window.moveSlide = moveSlide;
  
    // Troca automática
    setInterval(() => {
      moveSlide(1);
    }, 5000);
  });
  
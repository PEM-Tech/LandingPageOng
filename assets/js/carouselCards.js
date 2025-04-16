let currentCard = 0;

function scrollCards(direction) {
  const container = document.getElementById("cardContainer");
  const cards = container.querySelectorAll(".card");

  currentCard += direction;

  if (currentCard < 0) currentCard = 0;
  if (currentCard >= cards.length) currentCard = cards.length - 1;

  // Mover a faixa para posicionar o card ativo no centro
  const cardWidth = cards[0].offsetWidth + 40; // card + gap
  const centerOffset = (container.parentElement.offsetWidth - cardWidth) / 2;
  const offset = currentCard * cardWidth;

  container.style.transform = `translateX(${-offset + centerOffset}px)`;

  // Limpa classes
  cards.forEach(card => card.classList.remove("active", "left", "right"));

  // Adiciona destaque
  cards.forEach((card, index) => {
    if (index === currentCard) {
      card.classList.add("active");
    } else if (index < currentCard) {
      card.classList.add("left");
    } else {
      card.classList.add("right");
    }
  });
}

// Centralizar o primeiro card ao carregar
document.addEventListener("DOMContentLoaded", () => {
  scrollCards(0);

  // Autoplay: muda de card a cada 4 segundos
  setInterval(() => {
    const cards = document.querySelectorAll(".card");

    // Se chegou no último, volta ao início
    if (currentCard >= cards.length - 1) {
      currentCard = -1; // vai para 0 no próximo scrollCards(1)
    }

    scrollCards(1);
  }, 4000);
});

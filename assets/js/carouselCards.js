let currentCard = 0;

function scrollCards(direction) {
  const container = document.getElementById('cardContainer');
  const cards = container.querySelectorAll('.card');

  const cardWidth = cards[0].offsetWidth + 40; // largura + gap
  const visibleArea = container.offsetWidth;
  const visibleCards = Math.floor(visibleArea / cardWidth);
  const maxIndex = cards.length - visibleCards;

  currentCard += direction;
  if (currentCard < 0) currentCard = 0;
  if (currentCard > maxIndex) currentCard = maxIndex;

  // 🔥 Correção: calcula deslocamento para centralizar o card ativo
  const centerOffset = (container.parentElement.offsetWidth - cardWidth) / 2;
  const offset = currentCard * cardWidth - centerOffset;

  container.style.transform = `translateX(-${offset}px)`;

  // ✨ Limpa classes antigas
  cards.forEach(card => card.classList.remove('active', 'left', 'right'));

  // ✨ Aplica destaque ao atual e vizinhos
  if (cards[currentCard]) cards[currentCard].classList.add('active');
  if (cards[currentCard - 1]) cards[currentCard - 1].classList.add('left');
  if (cards[currentCard + 1]) cards[currentCard + 1].classList.add('right');
}

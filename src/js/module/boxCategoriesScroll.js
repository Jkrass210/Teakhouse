export function boxCategoriesScroll() {
  const container = document.querySelector('.box-categories__list');

  let isDragging = false;
  let startX, scrollLeft;

  container.addEventListener('mousedown', (e) => {
    // Если кликнули по ссылке или другому интерактивному элементу — не начинаем перетаскивание
    if (e.target.closest('a, button, [onclick], [role="button"]')) {
      return;
    }

    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });

  container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}
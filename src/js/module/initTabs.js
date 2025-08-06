// tabs.js
export function initTabs(containerClass, buttonClass, activeClass) {
  const containers = document.querySelectorAll(`.${containerClass}`);

  if (!containers.length) return;

  containers.forEach(container => {
    const buttons = container.querySelectorAll(`.${buttonClass}`);

    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();

        // Если текущая кнопка уже активна - закрываем таб
        if (this.classList.contains(activeClass)) {
          this.classList.remove(activeClass);
          return;
        }

        // Закрываем все табы в текущем контейнере
        buttons.forEach(btn => {
          btn.classList.remove(activeClass);
        });
        // Открываем текущий таб
        this.classList.add(activeClass);
      });
    });

  });
}
// catalogLinkHandler.js
export function initCatalogLinkHandler({
  linkSelector,
  dropdownSelector,
  activeClass
}) {
  // Находим элементы на странице
  const link = document.querySelector(linkSelector);
  const dropdown = document.querySelector(dropdownSelector);
  const body = document.body;

  // Если элементы не найдены, выходим из функции
  if (!link || !dropdown) return;

  // Функция для активации
  const activate = () => {
    link.classList.add(activeClass);
    body.style.overflow = 'hidden';
  };

  // Функция для деактивации
  const deactivate = () => {
    link.classList.remove(activeClass);
    body.style.overflow = '';
  };

  // Обработчик для события mouseenter
  const handleMouseEnter = () => {
    activate();
  };

  // Обработчик для клика вне блока
  const handleClickOutside = (event) => {
    const isClickInside = link.contains(event.target) || dropdown.contains(event.target);
    if (!isClickInside) {
      deactivate();
    }
  };

  // Обработчик для клавиши Esc
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      deactivate();
    }
  };

  // Добавляем обработчики событий
  link.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);

  // Функция для очистки (удаления обработчиков при необходимости)
  return () => {
    link.removeEventListener('mouseenter', handleMouseEnter);
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
    // Восстанавливаем overflow при очистке
    body.style.overflow = '';
  };
}
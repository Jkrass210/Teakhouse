/*export function initCatalogMenu(options) {
  const {
    rootSelector = '.catalog-link__drop-down-catalog',
    level1LinkSelector = '.link-level-1',
    level2LinkSelector = '.link-level-2',
    level3LinkSelector = '.link-level-3',
    level2ListSelector = '.list-level-2',
    level3ListSelector = '.list-level-3',
    boxLevel2Selector = '.box-level-2',
    boxLevel3Selector = '.box-level-3',
    activeClass = 'active'
  } = options || {};

  const rootElement = document.querySelector(rootSelector);
  if (!rootElement) return;

  // Удаляем класс active со всех элементов уровня
  const deactivateLevel = (levelSelector) => {
    document.querySelectorAll(levelSelector).forEach(item => {
      item.classList.remove(activeClass);
    });
  };

  // Обработчик для первого уровня
  const handleLevel1MouseEnter = (e) => {
    const link = e.currentTarget;
    const listLevel2 = link.nextElementSibling;
    
    // Деактивируем все ссылки первого уровня перед активацией текущей
    deactivateLevel(level1LinkSelector);
    link.classList.add(activeClass);
    
    if (listLevel2 && listLevel2.matches(level2ListSelector)) {
      const boxLevel2 = rootElement.querySelector(boxLevel2Selector);
      if (boxLevel2) {
        // Клонируем список
        const clone = listLevel2.cloneNode(true);
        boxLevel2.innerHTML = '';
        boxLevel2.appendChild(clone);
        
        // Очищаем box-level-3
        const boxLevel3 = rootElement.querySelector(boxLevel3Selector);
        if (boxLevel3) boxLevel3.innerHTML = '';
        
        // Добавляем обработчики для нового содержимого
        addLevel2Handlers(boxLevel2);
      }
    }
  };

  // Обработчик для второго уровня
  const handleLevel2MouseEnter = (e) => {
    const link = e.currentTarget;
    const listLevel3 = link.nextElementSibling;
    
    // Деактивируем все ссылки второго уровня перед активацией текущей
    deactivateLevel(level2LinkSelector);
    link.classList.add(activeClass);
    
    if (listLevel3 && listLevel3.matches(level3ListSelector)) {
      const boxLevel3 = rootElement.querySelector(boxLevel3Selector);
      if (boxLevel3) {
        // Клонируем список
        const clone = listLevel3.cloneNode(true);
        boxLevel3.innerHTML = '';
        boxLevel3.appendChild(clone);
        
        // Добавляем обработчики для нового содержимого
        addLevel3Handlers(boxLevel3);
      }
    }
  };

  // Обработчик для третьего уровня
  const handleLevel3MouseEnter = (e) => {
    const link = e.currentTarget;
    // Деактивируем все ссылки третьего уровня перед активацией текущей
    deactivateLevel(level3LinkSelector);
    link.classList.add(activeClass);
  };

  // Добавляем обработчики для элементов второго уровня
  const addLevel2Handlers = (container) => {
    container.querySelectorAll(level2LinkSelector).forEach(link => {
      link.addEventListener('mouseenter', handleLevel2MouseEnter);
    });
  };

  // Добавляем обработчики для элементов третьего уровня
  const addLevel3Handlers = (container) => {
    container.querySelectorAll(level3LinkSelector).forEach(link => {
      link.addEventListener('mouseenter', handleLevel3MouseEnter);
    });
  };

  // Инициализация
  const init = () => {
    // Обработчики первого уровня
    document.querySelectorAll(level1LinkSelector).forEach(link => {
      link.addEventListener('mouseenter', handleLevel1MouseEnter);
    });
  };

  // Полифиллы
  if (!Element.prototype.matches) {
    Element.prototype.matches = 
      Element.prototype.msMatchesSelector || 
      Element.prototype.webkitMatchesSelector;
  }

  init();

  return {
    destroy: () => {
      // Удаляем все обработчики и классы active
      document.querySelectorAll(level1LinkSelector).forEach(link => {
        link.removeEventListener('mouseenter', handleLevel1MouseEnter);
        link.classList.remove(activeClass);
      });
      
      document.querySelectorAll(level2LinkSelector).forEach(link => {
        link.removeEventListener('mouseenter', handleLevel2MouseEnter);
        link.classList.remove(activeClass);
      });
      
      document.querySelectorAll(level3LinkSelector).forEach(link => {
        link.removeEventListener('mouseenter', handleLevel3MouseEnter);
        link.classList.remove(activeClass);
      });
    }
  };
}*/

export function initCatalogMenu(options) {
  const {
    rootSelector = '.catalog-link__drop-down-catalog',
    level1LinkSelector = '.link-level-1',
    level2LinkSelector = '.link-level-2',
    level3LinkSelector = '.link-level-3',
    level2ListSelector = '.list-level-2',
    level3ListSelector = '.list-level-3',
    boxLevel2Selector = '.box-level-2',
    boxLevel3Selector = '.box-level-3',
    activeClass = 'active'
  } = options || {};

  const rootElement = document.querySelector(rootSelector);
  if (!rootElement) return;

  // Удаляем класс active со всех элементов уровня
  const deactivateLevel = (levelSelector) => {
    document.querySelectorAll(levelSelector).forEach(item => {
      item.classList.remove(activeClass);
    });
  };

  // Функция для заполнения боксов при инициализации
  const fillInitialBoxes = () => {
    const boxLevel2 = rootElement.querySelector(boxLevel2Selector);
    const boxLevel3 = rootElement.querySelector(boxLevel3Selector);
    
    // Заполняем box-level-2 первым списком второго уровня
    const firstLevel1Link = document.querySelector(level1LinkSelector);
    if (firstLevel1Link && boxLevel2) {
      const firstListLevel2 = firstLevel1Link.nextElementSibling;
      if (firstListLevel2 && firstListLevel2.matches(level2ListSelector)) {
        const clone = firstListLevel2.cloneNode(true);
        boxLevel2.innerHTML = '';
        boxLevel2.appendChild(clone);
        
        // Активируем первую ссылку первого уровня
        firstLevel1Link.classList.add(activeClass);
        
        // Добавляем обработчики для второго уровня
        addLevel2Handlers(boxLevel2);
        
        // Заполняем box-level-3 первым списком третьего уровня
        if (boxLevel3) {
          const firstLevel2Link = boxLevel2.querySelector(level2LinkSelector);
          if (firstLevel2Link) {
            const firstListLevel3 = firstLevel2Link.nextElementSibling;
            if (firstListLevel3 && firstListLevel3.matches(level3ListSelector)) {
              const cloneLevel3 = firstListLevel3.cloneNode(true);
              boxLevel3.innerHTML = '';
              boxLevel3.appendChild(cloneLevel3);
              
              // Активируем первую ссылку второго уровня
              firstLevel2Link.classList.add(activeClass);
              
              // Добавляем обработчики для третьего уровня
              addLevel3Handlers(boxLevel3);
              
              // Активируем первую ссылку третьего уровня
              const firstLevel3Link = boxLevel3.querySelector(level3LinkSelector);
              if (firstLevel3Link) {
                firstLevel3Link.classList.add(activeClass);
              }
            }
          }
        }
      }
    }
  };

  // Обработчик для первого уровня
  const handleLevel1MouseEnter = (e) => {
    const link = e.currentTarget;
    const listLevel2 = link.nextElementSibling;
    
    // Деактивируем все ссылки первого уровня перед активацией текущей
    deactivateLevel(level1LinkSelector);
    link.classList.add(activeClass);
    
    if (listLevel2 && listLevel2.matches(level2ListSelector)) {
      const boxLevel2 = rootElement.querySelector(boxLevel2Selector);
      if (boxLevel2) {
        // Клонируем список
        const clone = listLevel2.cloneNode(true);
        boxLevel2.innerHTML = '';
        boxLevel2.appendChild(clone);
        
        // Очищаем box-level-3
        const boxLevel3 = rootElement.querySelector(boxLevel3Selector);
        if (boxLevel3) boxLevel3.innerHTML = '';
        
        // Добавляем обработчики для нового содержимого
        addLevel2Handlers(boxLevel2);
        
        // Активируем первую ссылку второго уровня
        const firstLevel2Link = boxLevel2.querySelector(level2LinkSelector);
        if (firstLevel2Link) {
          firstLevel2Link.classList.add(activeClass);
          const listLevel3 = firstLevel2Link.nextElementSibling;
          if (listLevel3 && listLevel3.matches(level3ListSelector)) {
            const boxLevel3 = rootElement.querySelector(boxLevel3Selector);
            if (boxLevel3) {
              const cloneLevel3 = listLevel3.cloneNode(true);
              boxLevel3.innerHTML = '';
              boxLevel3.appendChild(cloneLevel3);
              
              // Добавляем обработчики для третьего уровня
              addLevel3Handlers(boxLevel3);
              
              // Активируем первую ссылку третьего уровня
              const firstLevel3Link = boxLevel3.querySelector(level3LinkSelector);
              if (firstLevel3Link) {
                firstLevel3Link.classList.add(activeClass);
              }
            }
          }
        }
      }
    }
  };

  // Обработчик для второго уровня
  const handleLevel2MouseEnter = (e) => {
    const link = e.currentTarget;
    const listLevel3 = link.nextElementSibling;
    
    // Деактивируем все ссылки второго уровня перед активацией текущей
    deactivateLevel(level2LinkSelector);
    link.classList.add(activeClass);
    
    if (listLevel3 && listLevel3.matches(level3ListSelector)) {
      const boxLevel3 = rootElement.querySelector(boxLevel3Selector);
      if (boxLevel3) {
        // Клонируем список
        const clone = listLevel3.cloneNode(true);
        boxLevel3.innerHTML = '';
        boxLevel3.appendChild(clone);
        
        // Добавляем обработчики для нового содержимого
        addLevel3Handlers(boxLevel3);
      }
    }
  };

  // Обработчик для третьего уровня
  const handleLevel3MouseEnter = (e) => {
    const link = e.currentTarget;
    // Деактивируем все ссылки третьего уровня перед активацией текущей
    deactivateLevel(level3LinkSelector);
    link.classList.add(activeClass);
  };

  // Добавляем обработчики для элементов второго уровня
  const addLevel2Handlers = (container) => {
    container.querySelectorAll(level2LinkSelector).forEach(link => {
      link.addEventListener('mouseenter', handleLevel2MouseEnter);
    });
  };

  // Добавляем обработчики для элементов третьего уровня
  const addLevel3Handlers = (container) => {
    container.querySelectorAll(level3LinkSelector).forEach(link => {
      link.addEventListener('mouseenter', handleLevel3MouseEnter);
    });
  };

  // Инициализация
  const init = () => {
    // Заполняем боксы начальными значениями
    fillInitialBoxes();
    
    // Обработчики первого уровня
    document.querySelectorAll(level1LinkSelector).forEach(link => {
      link.addEventListener('mouseenter', handleLevel1MouseEnter);
    });
  };

  // Полифиллы
  if (!Element.prototype.matches) {
    Element.prototype.matches = 
      Element.prototype.msMatchesSelector || 
      Element.prototype.webkitMatchesSelector;
  }

  init();

  return {
    destroy: () => {
      // Удаляем все обработчики и классы active
      document.querySelectorAll(level1LinkSelector).forEach(link => {
        link.removeEventListener('mouseenter', handleLevel1MouseEnter);
        link.classList.remove(activeClass);
      });
      
      document.querySelectorAll(level2LinkSelector).forEach(link => {
        link.removeEventListener('mouseenter', handleLevel2MouseEnter);
        link.classList.remove(activeClass);
      });
      
      document.querySelectorAll(level3LinkSelector).forEach(link => {
        link.removeEventListener('mouseenter', handleLevel3MouseEnter);
        link.classList.remove(activeClass);
      });
    }
  };
}
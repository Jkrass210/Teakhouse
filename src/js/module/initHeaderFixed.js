export function initHeaderFixed() {

  const header = document.querySelector('.header');

  const mainContent = document.querySelector('main');

  if (!header) {
    return
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      header.classList.add('fixed');
      mainContent.classList.add('content-padding-top')
    } else {
      header.classList.remove('fixed');
      mainContent.classList.remove('content-padding-top')
    }
  });
}
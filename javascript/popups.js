Array.from(document.querySelectorAll('[data-popup-target]'), element => {
  element.addEventListener('click', (event) => {
    const popup = document.querySelector(event.currentTarget.dataset.popupTarget);

    popup.classList.add('visible');
    lockBodyScroll(popup);
  });
});

Array.from(document.querySelectorAll('.popup-close'), element => {
  element.addEventListener('click', (event) => {
    const popup = event.currentTarget.parentElement.parentElement;

    popup.classList.remove('visible');
    unlockBodyScroll(popup);
  });
});
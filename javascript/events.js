Array.from(document.querySelectorAll('[data-popup-target]'), element => {
  element.addEventListener('click', (event) => {
    document.querySelector(event.currentTarget.dataset.popupTarget).classList.add('visible');
  });
});

Array.from(document.querySelectorAll('.popup-close'), element => {
  element.addEventListener('click', (event) => {
    event.currentTarget.parentElement.parentElement.classList.remove('visible');
  });
});
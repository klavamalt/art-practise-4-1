const menuContainer = document.querySelector('.menu-container');
const menuElement = document.querySelector('.menu-container .menu');

document.querySelector('#menu-open').addEventListener('click', () => {
  menuContainer.classList.add('opened');
  menuElement.style.transform = 'translateY(0)';
  document.body.style.overflow = 'hidden';
});

document.querySelector('#menu-close').addEventListener('click', () => {
  menuElement.style.transform = 'translateY(-100%)'

  menuElement.addEventListener('transitionend', () => {
    document.querySelector('.menu-container').classList.remove('opened');
    document.body.style.overflow = null;
  }, { once: true });

});
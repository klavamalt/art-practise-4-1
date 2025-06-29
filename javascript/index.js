const lockBodyScroll = () => {
  const prevScroll = window.scrollY;

  document.body.style.overflow = 'hidden';

  setTimeout(() => window.scrollTo(0, prevScroll), 1);
}

const unlockBodyScroll = () => {
  document.body.style.overflow = null;
}

const menuContainer = document.querySelector('.menu-container');
const menuElement = document.querySelector('.menu-container .menu');

document.querySelector('#menu-open').addEventListener('click', () => {
  menuContainer.classList.add('opened');
  menuElement.style.transform = 'translateY(0)';
  lockBodyScroll();
});

document.querySelector('#menu-close').addEventListener('click', () => {
  menuElement.style.transform = 'translateY(-100%)'

  menuElement.addEventListener('transitionend', () => {
    document.querySelector('.menu-container').classList.remove('opened');
    unlockBodyScroll();
  }, { once: true });

});
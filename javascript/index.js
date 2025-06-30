let isBodyScrollLockInitialized = false;

const lockBodyScroll = (target) => {
  if (!isBodyScrollLockInitialized) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/body-scroll-lock/3.1.5/bodyScrollLock.min.js';
    script.addEventListener('load', () => {
      isBodyScrollLockInitialized = true;
      lockBodyScroll(target);
    })

    document.head.appendChild(script);
    return;
  }

  bodyScrollLock.disableBodyScroll(target);
}

const unlockBodyScroll = (target) => {
  bodyScrollLock.enableBodyScroll(target);
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
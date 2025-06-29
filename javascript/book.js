const popup = document.querySelector('.popup-container');

document.querySelector('#create').addEventListener('click', () => {
  popup.classList.add('visible');
  lockBodyScroll();
});

document.querySelector('.bubble-2').addEventListener('click', () => {
  popup.classList.remove('visible');
  unlockBodyScroll();
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  popup.classList.remove('visible');
  e.currentTarget.reset();
  unlockBodyScroll();
  alert('Менеджер свяжется с вами для уточнения деталей');
});

let isDesktopInitialized = false;

const initDesktopBookElement = () => {
  if (isDesktopInitialized) {
    return;
  }

  isDesktopInitialized = true;

  const bookDesktopElement = document.querySelector('.book.desktop');

  const { width, height } = bookDesktopElement.getBoundingClientRect();

  if (width && height) {
    const pageFlip = new St.PageFlip(bookDesktopElement,
      {
        width,
        height,
        showCover: false,
        maxShadowOpacity: 0.3
      }
    );

    pageFlip.loadFromHTML(document.querySelectorAll('.book.desktop .book-page'));
  } else {
    isDesktopInitialized = false;
  }

};

let isMobileInitialized = false;

const initMobileBookElement = () => {
  if (isMobileInitialized) {
    return;
  }

  isMobileInitialized = true;

  const bookMobileElement = document.querySelector('.book.mobile');

  const { width: widthMobile, height: heightMobile } = bookMobileElement.getBoundingClientRect();

  if (widthMobile && heightMobile) {
    const pageFlipMobile = new St.PageFlip(bookMobileElement,
      {
        width: widthMobile,
        height: heightMobile,
        showCover: false,
        maxShadowOpacity: 0.3
      }
    );

    pageFlipMobile.loadFromHTML(document.querySelectorAll('.book.mobile .book-page'));
  } else {
    isMobileInitialized = true;
  }
}

window.addEventListener('resize', () => {
  initDesktopBookElement();
  initMobileBookElement();
});

initDesktopBookElement();
initMobileBookElement();
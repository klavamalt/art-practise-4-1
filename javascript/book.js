const bookElement = document.querySelector('.book');

const { width, height } = bookElement.getBoundingClientRect();

const pageFlip = new St.PageFlip(bookElement,
  {
    width,
    height,
    showCover: false,
    maxShadowOpacity: 0.3
  }
);

pageFlip.loadFromHTML(document.querySelectorAll('.book-page'));
const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener('submit',  function (event) {
    event.preventDefault();

    elUrlShortenerResults.classList.add('url-shortener__results--open');
  });
}

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (event) {
    if (event.target.matches ('.js-copy-short-link-button')) {
      // Change button text
      event.target.textContent = 'Copied!';

      // Change button bgcolor
      event.target.classList.add('url-shortener__copy-button--copied');

      // Reset button text and class after 1 second
      setTimeout(function () {
        event.target.textContent = 'Copy';
        event.target.classList.remove('url-shortener__copy-button--copied');
      }, 2000);
    }
  });
}
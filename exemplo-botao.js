const divZoeira = document.querySelector('body>div');

divZoeira.onmouseenter = event => {
  event.target.classList.add('fugir');
}

divZoeira.onmouseleave = event => {
  event.target.classList.remove('fugir');
}
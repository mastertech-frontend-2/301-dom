const ultimaDiv = document.querySelector('div:last-child');

ultimaDiv.onclick = event => {
  if (event.ctrlKey && event.altKey) {
    console.log('Você clicou segurando CTRL e ALT. Não faça mais isso!');
  }
  else if (!event.ctrlKey && !event.altKey) {
    console.log('Você clicou sem segurar nenhum outro botão. Aperte CTRL ou ALT para clicar nessa área.');
  }
  else {
    console.log('AEAEAEAE');
  }
}
function play() {
  document.querySelector('.bouton').style.display = 'none';
  start();
}

document.querySelector('.bouton').setAttribute('onclick', 'play()');

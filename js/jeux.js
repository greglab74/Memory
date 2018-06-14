function atribution() {
  var num;

  for (var i = 0; i < img.length; i++) {
    var autoris = false;
    num = Math.floor(Math.random() * Math.floor(10));
    console.log(num);

    switch (num) {
      case 1:
        var couleur = 'red';
        break;
      case 2:
        var couleur = 'blue';
        break;
      case 3:
        var couleur = 'green';
        break;
      case 4:
        var couleur = 'pink';
        break;
      case 5:
        var couleur = 'grey';
        break;
      case 6:
        var couleur = 'orange';
        break;
      case 7:
        var couleur = 'lightgrey';
        break;
      case 8:
        var couleur = 'yellow';
        break;
      case 9:
        var couleur = 'gold';
        break;
      case 0:
        var couleur = 'silver';
        break;
    }

    while (autoris == false) {
      autoris = verifiAtribution(couleur);
      if (autoris == true) {
        num = Math.floor(Math.random() * Math.floor(10));
        console.log(num);

        switch (num) {
          case 1:
            var couleur = 'red';
            break;
          case 2:
            var couleur = 'blue';
            break;
          case 3:
            var couleur = 'green';
            break;
          case 4:
            var couleur = 'pink';
            break;
          case 5:
            var couleur = 'grey';
            break;
          case 6:
            var couleur = 'orange';
            break;
          case 7:
            var couleur = 'lightgrey';
            break;
          case 8:
            var couleur = 'yellow';
            break;
          case 9:
            var couleur = 'gold';
            break;
          case 0:
            var couleur = 'silver';
            break;
        }
      }
    }

    img[i].style.background = couleur;
  }
}

function verifiAtribution(atribu) {
  var nombreAparu = 0;
  for (var i = 0; i < img.length; i++) {
      if (atribu == img[i].style.background) {
        nombreAparu++;
      }
  }

  if (nombreAparu > 3) {
    return false;
  }else {
    return true;
  }
}

var img = document.getElementsByTagName('img');

atribution();

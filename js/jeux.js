function atribution() {
  var num;

  for (var b = 0; b < img.length; b++) {
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
        var couleur = 'lightblue';
        break;
    }

    while (autoris == false) {
      autoris = verifiAtribution(couleur);
      if (autoris == false) {
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
            var couleur = 'lightblue';
            break;
        }
      }
    }

    carte[b] = couleur;
    console.log(carte[b]);
  }
}

function verifiAtribution(atribu) {
  var nombreAparu = 0;
  for (var a = 0; a < img.length; a++) {
      if (atribu == carte[a]) {
        nombreAparu++;
      }
  }

  if (nombreAparu > 1) {
    return false;
  }else {
    return true;
  }
}

function retournVerif(carteNB){
  img[carteNB].style.backgroundColor = carte[carteNB];
  retourn++;
  console.log(retourn);
  console.log(img.lenght);

  if (retourn == 2) {
    for (var c = 0; c < img.length; c++) {
      if (img[carteNB].style.backgroundColor == img[c].style.backgroundColor) {
        if (carteNB != c) {
          img[c].src = '/memory/img/pokeball.png';
          img[carteNB].src = '/memory/img/pokeball.png';
        }
      }
    }
  }

  if (retourn > 2) {
    retourn = 1;
    for (var d = 0; d < img.length; d++) {
      img[d].style.backgroundColor = 'black';
    }
    img[carteNB].style.backgroundColor = carte[carteNB];
  }
}

var img = document.getElementsByTagName('img');
var carte = new Array();
var retourn = 0;

atribution();

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

    carte[i] = couleur;
    console.log(carte[i]);
  }
}

function verifiAtribution(atribu) {
  var nombreAparu = 0;
  for (var i = 0; i < img.length; i++) {
      if (atribu == carte[i]) {
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
}

var img = document.getElementsByTagName('img');
var carte = new Array();

atribution();

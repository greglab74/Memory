function atribution() {
  var num;

  for (var b = 0; b < img.length; b++) {
    var autoris = false;
    num = Math.floor(Math.random() * Math.floor(10));
    console.log(num);

    switch (num) {

      case 0:
        var couleur = '/memory/img/pkm1.png';
        break;
      case 1:
        var couleur = '/memory/img/pkm2.png';
        break;
      case 2:
        var couleur = '/memory/img/pkm3.png';
        break;
      case 3:
        var couleur = '/memory/img/pkm4.png';
        break;
      case 4:
        var couleur = '/memory/img/pkm5.png';
        break;
      case 5:
        var couleur = '/memory/img/pkm6.png';
        break;
      case 6:
        var couleur = '/memory/img/pkm7.png';
        break;
      case 7:
        var couleur = '/memory/img/pkm8.png';
        break;
      case 8:
        var couleur = '/memory/img/pkm9.png';
        break;
      case 9:
        var couleur = '/memory/img/pkm10.png';
        break;
    }

    while (autoris == false) {
      autoris = verifiAtribution(couleur);
      if (autoris == false) {
        num = Math.floor(Math.random() * Math.floor(10));
        console.log(num);

        switch (num) {

          case 0:
            var couleur = '/memory/img/pkm1.png';
            break;
          case 1:
            var couleur = '/memory/img/pkm2.png';
            break;
          case 2:
            var couleur = '/memory/img/pkm3.png';
            break;
          case 3:
            var couleur = '/memory/img/pkm4.png';
            break;
          case 4:
            var couleur = '/memory/img/pkm5.png';
            break;
          case 5:
            var couleur = '/memory/img/pkm6.png';
            break;
          case 6:
            var couleur = '/memory/img/pkm7.png';
            break;
          case 7:
            var couleur = '/memory/img/pkm8.png';
            break;
          case 8:
            var couleur = '/memory/img/pkm9.png';
            break;
          case 9:
            var couleur = '/memory/img/pkm10.png';
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
  img[carteNB].src = carte[carteNB];
  retourn++;
  console.log(retourn);

  if (retourn == 2) {
    for (var c = 0; c < img.length; c++) {
      if (img[carteNB].src == img[c].src) {
        if (carteNB != c) {
          img[c].src = carte[c];
          img[c].className = 1;
          img[carteNB].src = carte[carteNB];
          img[carteNB].className = 1;
        }
      }
    }
  }

  if (retourn > 2) {
    retourn = 1;
    for (var d = 0; d < img.length; d++) {
      if (img[d].className == 0)
      img[d].src = '/Memory/img/pokeball.png';
    }
    img[carteNB].src = carte[carteNB];
  }

  var compte = 0;
  for (var i = 0; i < img.length; i++) {
    if (img[i].className == 1) {
      compte++;
    }

    if (compte == img.length) {
      stop();
      document.getElementById('form-main').style.display = 'block';
    }
  }
}

var img = document.querySelectorAll('.card img');
var carte = new Array();
var retourn = 0;

for (var i = 0; i < img.length; i++) {
  img[i].setAttribute('onclick', 'retournVerif(' + i + ')');
  img[i].className = 0;
}

atribution();

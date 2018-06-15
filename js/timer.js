var heure=0 //initialisation minute,seconde,dixièmes à 0
var secon=0
var minut=0

function chrono(){
secon++; //incrémentation des dixièmes de 1
if (secon>59){dixie=0;minut++} //si les secondes > 59,on les réinitialise à 0 et on incrémente les minutes de 1
if (minut>59){minut=0;heure++} //si les minutes > 59,on les réinitialise à 0 et on incrémente les heures de 1
document.getElementById('heure').innerHTML=" "+heure //on affiche les heures
document.getElementById('secon').innerHTML=" "+secon //on affiche les secondes
document.getElementById('minut').innerHTML=" "+minut //on affiche les minutes

}
function start() {
var begin = setInterval(chrono,1000) //la fonction start s'execute toutes les secondes
}
function stop() {
  clearsetInterval(start) //arrête la fonction start
}

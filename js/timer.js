var dixie=0; //initialisation minute,seconde,dixièmes à 0
var secon=0;
var minut=0;

function chrono(){
dixie++; //incrémentation des dixièmes de 1
if (dixie>9){dixie=0;secon++} //si les dixièmes > 9,on les remet à 0 et on incrémente les secondes de 1
if (secon>59){secon=0;minut++} //si les secondes > 59,on les réinitialise à 0 et on incrémente les minutes de 1
document.getElementsByClassName('dixieme').innerHTML=" "+dixie //on affiche les dixièmes à l'intérieur de notre ID "dixieme" dans notre fichier HTML
document.getElementsByClassName('seconde').innerHTML=" "+secon //on affiche les secondes
document.getElementsByClassName('minute').innerHTML=" "+minut //on affiche les minutes

}
var begin
function start() {
begin = setInterval(chrono,100)//la fonction start s'execute tous les disièmes de secondes
}
function stop() {
  clearInterval(begin) //arrête la fonction start
}

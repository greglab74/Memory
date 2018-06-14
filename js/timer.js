var dixie=0 //initialisation minute,seconde,dixièmes à 0
var secon=0
var minut=0

function chrono(){
dixie++; //incrémentation des dixièmes de 1
if (dixie>9){dixie=0;secon++} //si les dixièmes > 9,on les remet à 0 et on incrémente les secondes de 1
if (secon>59){secon=0;minut++} //si les secondes > 59,on les réinitialise à 0 et on incrémente les minutes de 1
document.affiche.dix.value=" "+dixie //on affiche les dixièmes
document.affiche.sec.value=" "+secon //on affiche les secondes
document.affiche.min.value=" "+minut //on affiche les minutes

}
function start() {
setInterval(chrono,100) //la fonction start s'execute tous les disièmes de secondes
}

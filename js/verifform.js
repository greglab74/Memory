
function verifSexe() {
    var radio = document.getElementsByName('sexe');
    if (radio[0].checked == false && radio[1].checked == false) {
        alert("Veuillez selectionner votre sexe");
    return false;
    } else {
    return true;
    }
}

function verifPrenom(champ)
            {
               if(champ.value.length < 2)
               {
                  alert("Veuillez entrer votre prenom svp.");
                  return false;
               }
               else
               {

                  return true;
               }
            }

            function verifName(champ)
                        {
                           if(champ.value.length < 2)
                           {
                              alert("Veuillez entrer votre nom svp.");
                              return false;
                           }
                           else
                           {

                              return true;
                           }
                        }

function verifMail(champ)
              {
                var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
                if(!regex.test(champ.value))
                {
                  alert("Veuillez entrer un email valide svp.");
                  return false;
                }
                else
                  {

                    return true;
                  }
                }

function verifForm(f)
                {
                  var sexeOK = verifSexe(f.sexe);
                  var nomOk = verifName(f.nom);
                  var prenomOk = verifPrenom(f.prenom);
                  var mailOk = verifMail(f.email);

                  if(sexeOK && nomOk && prenomOk && mailOk) {
                  return true;
                }
                  else
                  {

                    return false;
                  }
                }

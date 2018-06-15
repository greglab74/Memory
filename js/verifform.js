
function verifSexe() {

  var monsieur = document.getelementById('homme').checked;
  var madame = document.getelementById('femme').checked;


  		// si aucun des boutons radio cochés alors on affiche un message d'erreur
  	    if  (monsieur == false && madame == false) {
  		alert("Veuillez cocher le bouton \"Mr\" ou \"Mme\", svp.");
  		return false;
  		}
          else {
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
                  var sexeOK = verifSexe(f.sexe)
                  var prenomOk = verifPrenom(f.prenom);
                  var nomOk = verifName(f.nom);
                  var mailOk = verifMail(f.email);

                  if(sexeOK && nomOk && prenomOk && mailOk) {
                  return true;
                }
                  else
                  {
                    alert("Veuillez remplir correctement tous les champs");
                    return false;
                  }
                }

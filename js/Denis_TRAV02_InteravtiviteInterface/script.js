
    //EXEMPLE 1

    function somme(){
        let somme= 0;

        for (let i = 1; i <= 100; i++){
            somme +=i;
        }
        document.querySelector("#afficheex1").innerHTML = somme;
    }
    

    //EXEMPLE 2

    function alerteIterations(){
        for(let i = 0; i < 10; i ++){
            if (i == 9){
                alert("Dernière itération - Boucle finie");
            }
        }
    }
    

    //EXEMPLE 3

    function auHazard(min,max){
        let randomNum = Math.round ( Math.random()*(max,min)) + min;
        return randomNum;
    }
    let chaineNbres= "";
    //Boucle 6 itérations.

    for (let i = 0; i < 6; i += 1) {
        chaineNbres = chaineNbres + auHazard (1, 49) + "<br>";
    }
    auHazard();

    //EXEMPLE 4

    function compteARebours(){
        for (let i = 10; i >= 0; i--){
            if (i == 0){
                console.log("Dernière itération - Décollage");
            }
        }
    }

    //EXEMPLE 5
    function calculDuCarre(deCombien){
        let carre = 1;
        let chaineCalcul = ``;

        for (let i = 1; 1 <= deCombien; i += 1){
            carre = i * i;

            chaineCalcul =+ `Le carré de ${i} est ${carre}<br>`;
        }
        document.querySelector("#afficheex5").innerHTML = chaineCalcul;
    }
    calculDuCarre(12);

    //EXEMPLE 6

    const prenoms = ["Claude", "Jacques", "Isabelle", "Marc", "Prune"];

    function affichePrenomsFormatesol(){

        let chaineDesPrenoms = `<ol>`;

        for (let i = 0; i < prenoms.length; i += 1){
            let prenom = prenoms [i];

            chaineDesPrenoms += `<li> ${prenom} <small>(${i})</small></li>`;
        }
        chaineDesPrenoms =+ `</ol>`
        document.querySelector("#afficheex6").innerHTML = chaineDesPrenoms;
    }

    //EXEMPLE 7`


      function genereTableau(deCombien){

          let chaineDesNombres = `<table>`;

          for (i = 1; i <= deCombien; i++) {
              chaineDesNombres += `<tr>`;
              for (j = 1; j <= deCombien; j++) {
                  if ((i == 1) || (j == 1)) {
                      chaineDesNombres += `<th>`;
                  } else {
                      chaineDesNombres += `<td>`;
                  }
                  chaineDesNombres += `${i * j} </td>`;
              }
              chaineDesNombres += `</tr>`;
          }

          chaineDesNombres += `</table>`;
          
          document.querySelector("#afficheex7").innerHTML = chaineDesNombres;
      }

      

    // somme();
    // alerteIterations();
    // auHazard();
    // compteARebours();
    // calculDuCarre(10);
    // affichePrenomsFormatesol();
    // genereTableau(10);


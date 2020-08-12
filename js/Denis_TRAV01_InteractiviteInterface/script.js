//QUESTION 1

let nbClic = 0;
function compteurClic(){
    nbClic = nbClic + 1;
    
    console.log (nbClic);
    document.querySelector("#nbclic").innerHTML = "Vous avez cliqué " + nbClic + " fois";
}
document.querySelector("#compteurclic").addEventListener("click", function(){
    compteurClic(this.id);
})

//  QUESTION 2

// fonction etreHeureux
//     variable heureux (peut être vraie ou fausse)
//     variable vouloir (Peut être vraie ou fausse)

//     si heureux est vrai
//         continuez ce que vous faites
//     sinon si heureux est faux
//         voulez-vous etre heureux ?
//             changez quelque chose !
//         sinon
//             continuez ce que vous faites

// fin de la fonction etreHeureux

// QUESTION 3

const elementAmpoule = document.querySelector("#elementampoule");
const ampoule = document.querySelector("#imageampoule");

elementAmpoule.addEventListener("click", function(){
    if(elementAmpoule.className === "elementampoule"){
        elementAmpoule.className = "elementampouleon";
        ampoule.src = "./images/ampouleon.png";
    } else {
        elementAmpoule.className = "elementampoule";
        ampoule.src = "./images/ampouleoff.png"
    }
});


// QUESTION 4

//INITIALISATION
// function plusGrandDeDix(){
    
//     //INIT

//     var chiffres = [10, 234, 35, 467, 59, 616, 189, 824, 92, 1019];
//     var nbrPlusGrand = 0;
    
//     //LOGIQUE

//     for( i in chiffres){
//         if(chiffres[i] > nbrPlusGrand){
//             nbrPlusGrand = chiffres[i];
//         }
//     //CALL AND PRINT
//     }console.log (nbrPlusGrand);
// }
// plusGrandDeDix();

// QUESTION 5

// Début de la fontion demande de prêt

// variable montant = 
// variable dossierCredit = 

// si dossierCredit ( bon )    
//     alors si montant < 2000 $
//         alors prêt approuvé
//         sinon
//         consulter le gérant
// sinon si dossierCredit ( mauvais )
//     alors refuser le prêt

// Fin de la fonction demande de prêt


// QUESTION 6

function login(){

    //init

    let userName = document.getElementById("nom").value;
    let password = document.getElementById("mdp").value;

    //logique

    if(userName == "Xavier" && password == "tarteauxpommes"){
        document.querySelector("#messageconnection").innerHTML = "Bienvenue Xavier !";
        window.open("http://www.w3schools.com", "_blank");
    } else {
        document.querySelector("#messageconnection").innerHTML = "Veuillez réessayer";
        window.open("https://www.youtube.com/results?search_query=trololololoololloloollololloloooolollololoololollolool+song+10+hours", "_blank");
    }
    
}
document.querySelector("#fin").addEventListener("click", function(){
    login();
});


// QUESTION 7
//init
function calculNouvelleTaxe(quelMontant){
    
    //initialisation

    let montantPlustaxe = 0;
    let calculTaxe = "";
    
    //logique

    for (let i = 1; i <= quelMontant; i+=1){
        montantPlustaxe = i * 1.17;
        calculTaxe += "Le montant à percevoir pour " + i + " $ est de " + montantPlustaxe.toFixed(2) + " $<br>";
    }
    document.querySelector(".resultattaxe").innerHTML = calculTaxe;
}
calculNouvelleTaxe(100);


    
function exam(){
    let i = 1;
    let k = (2+4*2);

    let m = Math.pow(k,2);
    let s = 0;
    let a = 10;

    while (i<3){
        i++;
        a = m+i;
        s += a+2
    }
    console.log(s);
}
exam();

function examen(){
    let combienvisite = 1;
    combienvisite ++;

    function renvoiMessageNombreVisite (nbrevisite){
        if (nbrevisite == 1) {
            return "Vous êtes à votre premierevisite";
        } else if ( nbrevisite >= 1 ){
            return "Vous êtes à votre" + nbrevisite + "e visite";
        } else{
            return "Vous n'avez rien visité";
        }
    }
    combienvisite += 2;
    let msgvisite = renvoiMessageNombreVisite(combienvisite);
    console.log( msgvisite );
}
examen();
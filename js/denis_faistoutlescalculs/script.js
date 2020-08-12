function calculDesOperations(){
    //init (peut utiliser let ou var / ES5 VS ES6)
    var calculA, calculB, calculC, calculD, calculE, calculF = 0;
    // var calculA = 0;
    // var calculB = 0;
    // var calculC = 0;
    // var calculD = 0; 
    // var calculE = 0;
    // var calculF = 0;
    var total = 0;
    //logique
    calculA = 2*6+12;
    calculB = 2*(8+4);
    calculC = ((2+3)+5)-5;
    calculD = 3*2+4*2;
    calculE = ((6+14)*10-5) + (6+2*3-7);
    calculF = 2*8+4;
    total = calculA+calculB+calculC+calculD+calculE+calculF;
    //affichage
    // document.getElementById("A").innerHTML = calculA;
    // document.getElementById("B").innerHTML = calculB;
    // document.getElementById("C").innerHTML = calculC;
    // document.getElementById("D").innerHTML = calculD;
    // document.getElementById("E").innerHTML = calculE;
    // document.getElementById("F").innerHTML = calculF;
    // par quesryselector
    document.querySelector("#A").innerHTML = calculA;
    document.querySelector("#B").innerHTML = calculB;  
    document.querySelector("#C").innerHTML = calculC;  
    document.querySelector("#D").innerHTML = calculD;  
    document.querySelector("#E").innerHTML = calculE;  
    document.querySelector("#F").innerHTML = calculF;
    // //par templating
    // const chaine = `<ul>
    //                     <li>calculA: ${ calculA }</li>
    //                     <li>calculA: ${ calculB }</li>   
    //                     <li>calculA: ${ calculC }</li>   
    //                     <li>calculA: ${ calculD }</li>   
    //                     <li>calculA: ${ calculE }</li>   
    //                     <li>calculA: ${ calculF }</li>       
}
//appel
calculDesOperations( total );
// calculDesOperations( calculA );
// calculDesOperations( calculB );
// calculDesOperations( calculC );
// calculDesOperations( calculD );
// calculDesOperations( calculE );
// calculDesOperations( calculF );
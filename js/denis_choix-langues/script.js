        //VERSION 4
        function choixLang( quelleLangue ) {
            let message = " ";

            // const francais = document.querySelector(".fr")
            // const english = document.querySelector(".en")
            // const espanol = document.querySelector(".es")

            if(quelleLangue == "fr") {
                message = "Bienvenue";
            } else if (quelleLangue == "en") {
                message = "Welcome";
            } else if (quelleLangue == "es"){
                message = "Bienvenido";
            } else {
                message = "Choisir / Choose / Elegir";
            }
            document.querySelector("h2").innerHTML = message;

            document.querySelector("#fr").addEventListener("click", function(){
                choixLang(this.id);
            });

            document.querySelector("#en").addEventListener("click", function(){
                choixLang(this.id);
            });

            document.querySelector("#es").addEventListener("click", function(){
                choixLang(this.id);
            });
        }
        choixLang();


        // //VERSION 3
        // function choixLang(message) {

        //     const francais = document.querySelector(".francais")
        //     const english = document.querySelector(".english")
        //     const espanol = document.querySelector(".espanol")
            
        //     francais.addEventListener("click", function(){
        //         document.querySelector("h2").innerHTML = ("Bienvenue")
        //     });

        //     english.addEventListener("click", function(){
        //         document.querySelector("h2").innerHTML = ("Welcome")
        //     });

        //     espanol.addEventListener("click", function(){
        //         document.querySelector("h2").innerHTML = ("Bienvenido")
        //     });
        // }
        // choixLang();


        //VERSION 2
        // function afficheMsg(message){
        //     document.querySelector("h2").innerHTML = message
        //     console.log (message);
        // }
        // afficheMsg("Choisir / Choose / Elegir");


        //VERSION 1
        // function afficheMsgAcc(){
        //     document.querySelector("h2").innerHTML = ("Choisir / Choose / Elegir ")
        // }
        // function afficheMsgFr() {
        //     document.querySelector("h2").innerHTML = ("Bienvenue.")
        // } 
        // // afficheMsgFr();

        // function afficheMsgEn() {
        //     document.querySelector("h2").innerHTML = ("Welcome.")
        // } 
        // // afficheMsgEn();

        // function afficheMsgEs() {
        //     document.querySelector("h2").innerHTML = ("Bienvenido.")
        // } 
        // afficheMsgAcc();
        // // afficheMsgEs();
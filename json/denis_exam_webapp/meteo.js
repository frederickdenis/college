export function meteo(){ 
    $(document).ready(function() {

    $.ajax({
        "type": "GET",
        "url": "http://api.openweathermap.org/data/2.5/weather?id=6325494&units=metric&APPID=0c98af945c8169d1e0fb538cd4ff153f",
        "dataType": "json"
        })
        .done(function(data, textStatus, jqXHR) { // textStatus : success
        
            let nomDeLaVille = data.name;
            let temperature = data.main.temp;
            let humidite = data.main.humidity;
            let vitesseVent = data.wind.speed;
            let tendance = data.weather[0].main;
            let description = data.weather[0].description;
            let icone = data.weather[0].icon;

            console.dir(data);
            console.log(nomDeLaVille);
            console.log(temperature);
            console.log(humidite);
            console.log(vitesseVent);
            console.log(tendance);
            console.log(description);
            console.log(icone);
            
            msg = `<h1>Bienvenue à ${nomDeLaVille}. La température est présentement de ${temperature} degrés et le taux d'humidité est à ${humidite}. Le vent souffle à ${vitesseVent} km/h. La tendance est présentement à ${tendance} ${icone}</h1>`
            
            document.getElementById("bloc-affichage").innerHTML = msg;

        })
        .fail(function(jqXHR, textStatus, errorThrown) { // textStatus : timeout, error, notmodified, parsererror

            console.log("errorThrown");
            })

        .always(function(jqXHR, textStatus) {

            console.log("Fin de l'exécution.");

            });
        

    }); //ready
}

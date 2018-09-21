/*//Kod för bildspel
var i = 0; //Startpunkt
var bilder = []; //Skapar en array
var tid = 3000; //En variabel som tilldelas antal sekunder

//Arraylista
bilder [0] = "bild1.jpg";
bilder [1] = "bild2.jpg";
bilder [2] = "bild3.jpg";

function bildSpel(){
    //Hämtar den första bilden i vår array
    document.autobild.src = bilder [i];

    //Kontrollerar att startpunkten 
    if(i < bilder.length - 1){
        i++; //Iterar till nästa bild
    }

    //Om bilden är på sista arrayen ska den börja om från början igen
    else { i = 0; }

    setTimeout("bildSpel()", tid);
}

window.onload = bildSpel; 
*/

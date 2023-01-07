console.log("app working")


            let number = document.getElementById("adviceNumber")
            let quote = document.getElementById("quote");
let dice = document.getElementsByTagName("img");

let randomNumber = 0;


function askAdvice() {
    console.log("Boton Presionado.")

    randomNumber = Math.random()*240;
    randomNumber = Math.floor(randomNumber);

    console.log(randomNumber);

    fetch("https://api.adviceslip.com/advice/" + randomNumber)
        .then((res) => res.json())
        .then((res) => {
            let objeto = res.slip;
            let adviceId = objeto.id;
            let adviceQuote = objeto.advice;

            number.innerText = adviceId;
            quote.innerText = adviceQuote;



        })
    



}





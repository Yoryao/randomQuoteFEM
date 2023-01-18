console.log("app working")

let initialQuote = '"It is easy to sit up and take notice, what´s difficult is getting up and taking action"'

let number = document.getElementById("adviceNumber")
let quote = document.getElementById("quote");
let dice = document.getElementsByTagName("img");

let randomNumber = 0;


function askAdvice() {
    randomNumber = Math.random()*240;
    randomNumber = Math.floor(randomNumber);


    fetch("https://api.adviceslip.com/advice/" + randomNumber)
        .then((res) => res.json())
        .then((res) => {
            let objeto = res.slip;
            let adviceId = objeto.id;
            let adviceQuote = objeto.advice;

            number.innerText = adviceId;
            quote.innerText = '"'+ adviceQuote + '"';
        }
    )
}
//  script starts here 
//  const and variables
//  API URL : http://api.quotable.io/random

const quoteText = document.querySelector(".quote")
const quoteButton = document.querySelector("button")
const authorName = document.querySelector(".name")
const speechButton = document.querySelector(".speech")
const copyButton = document.querySelector(".copy")
synth = speechSynthesis;

// random quote generator logic code
function randomQuoteGenerator() {
    quoteButton.classList.add("loading");
    quoteButton.innerText = "Loading Quote...";
    
    fetch('http://api.quotable.io/random').then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteButton.classList.remove("loading");
        quoteButton.innerText = "New Quote";
    });
}

// button - event listner 
speechButton.addEventListener("click", () => {
    if (!quoteButton.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? speechButton.classList.remove("active") : speechButton.classList.add("active");
        }, 10);
    }
});

// copy logic code
copyButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});


// 
quoteButton.addEventListener("click", randomQuoteGenerator);
// script ends here
// @mondalCodeHub(October 2022)
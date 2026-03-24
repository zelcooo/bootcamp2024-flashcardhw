const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    
    element = document.getElementById('card-content'); 

    if(showingTerm) {
        element.innerText = flashcards[currentIndex].term;
    } else {
        element.innerText = flashcards[currentIndex].definition;
    }

}



// The rest of the code you will write is apart of event listeners

let defButton = document.getElementById('flashcard')
defButton.addEventListener('click', function(){
    if(!showingTerm){
        showingTerm = true;
    } else{
        showingTerm = false;
    }
    displayCard()
})

let nextButton = document.getElementById('next-btn')
nextButton.addEventListener('click', function(){

    if(currentIndex < flashcards.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    displayCard()
})

// The prev button rotates back to the pervious card by decrementing
// the index.
let prevButton = document.getElementById('prev-btn')
prevButton.addEventListener('click', function(){

    if(currentIndex > 0){
        currentIndex--;
    } else {
        currentIndex = flashcards.length - 1;
    }

    displayCard()
})

// This is the add card Event listener, it is used to take in a new term and
// make it a new flashcard
let addCard = document.getElementById('add-card-btn')
addCard.addEventListener('click', function(){
    let term1 = document.getElementById('new-term').value
    let def1 = document.getElementById('new-definition').value
    flashcards.push({term: term1, definition: def1})
    currentIndex = flashcards.length - 1;
    displayCard();
})
// This line will display the card when the page is refreshed
window.onload = displayCard;

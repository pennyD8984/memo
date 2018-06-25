/*
 * Create a list that holds all of your cards
 
const deck = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", 
			  "fa fa-cube", "fa fa-leaf","fa fa-bicycle","fa fa-bomb"];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// When DOM is ready, shuffle cards or when restart is clicked
document.addEventListener('DOMContentLoaded', startGame);
var deck = document.getElementById('deck');
var cards = document.getElementsByClassName('card');
// Create an array from HTML Collection
var cards = Array.from(cards);
function startGame(){
// Call shuffle card function - it works, but it doesn't move stuff around
	shuffle(cards);
// change li positions
	newDeck();
	addEvt();
}





function newDeck(e){
	// loop through the card array and append the returned cards indexed el 
	for (var i = 0; i < cards.length; i++){
   		deck.appendChild(cards[i]);
	};
}
// Loop through the array and add evt listener to every card
function addEvt(){
	for (var i = 0; i < cards.length; i++){
   		cards[i].addEventListener("click", clicked, true);
	};
}

// Create a function that will toggle a class to every target clicked thanks to the 
// e parameter and e.target
function clicked(e){
	e.target.classList.toggle('show');
	e.target.classList.toggle('open');
	console.log(e.target);
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
// Iterate through deck (HTML collection)
function getCard(evt){for (var i = 0; i < deck.length; i++) {
    console.log(deck[i]); 
}}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

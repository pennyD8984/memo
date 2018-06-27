/*
 * Create a list that holds all of your cards*/
var deck = document.getElementById('deck');
var cards = document.getElementsByClassName('card');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// When DOM is ready, shuffle cards or when restart is clicked
document.addEventListener('DOMContentLoaded', startGame);
deck.addEventListener('click', clicked);
deck.addEventListener('click', (function(){
    let clicks = 0; 
    return function(){
        clicks++;
        console.log(clicks);
        if(clicks === 2){
            alert('matched');
            clicks = 0;
        }
        };
})());

// Create an array from HTML Collection
var cards = Array.from(cards);
var icons = [];








// Create a function that will toggle a class to every target clicked thanks to the 
// e parameter and e.target
function clicked(e){
	e.target.classList.toggle('show');
	e.target.classList.toggle('open');
    getI(e);
    checkMatch(icons);
}

function getI(e){
    // get target class name
    var target = (e.target.querySelector('i').className);
    // push i class names into an array
    icons.push(target);
}

function checkMatch(e){

   
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

function newDeck(){
    // loop through the card array and append the returned cards indexed el 
    for (var i = 0; i < cards.length; i++){
        deck.appendChild(cards[i]);
    };
}

function startGame(){
// Call shuffle card function - it works, but it doesn't move stuff around
    shuffle(cards);
// change li positions
    newDeck();
}


/*


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

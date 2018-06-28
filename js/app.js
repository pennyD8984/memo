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
// Create an array from HTML Collection to shuffle cards
var cards = Array.from(cards);
var icons = [];
// check for clicks/update counter
deck.addEventListener('click', clicked);

let clicks = 0; 

function getClicks(e){
    if(e.target.nodeName === 'LI')
        clicks++;
        console.log(clicks);
        if(clicks === 2){
            
            clicks = 0;
        }
};

function clicked(e){
    if (!e.target.classList.contains('open') && !e.target.classList.contains('show') ){
    	e.target.classList.toggle('show');
    	e.target.classList.toggle('open');
        getI(e);
        getClicks(e);
    }
}

function getI(e){
    // get target class name
    var target = (e.target.querySelector('i'));
    // push i class names into an array
    if (icons.length < 2){
        icons.push(target);
        if(icons.length === 2)
        {
            checkMatch();
            icons = [];
        }
    }
}

function checkMatch(){
    if(icons[0].className === icons[1].className)
    {
            icons.forEach(function(c) {      
            c.parentNode.classList.add('match');                  
        });   
    }
    else{
            icons.forEach(function(c) {   
            c.parentNode.classList.add("noMatch");                  
        });
    }
}

function match(e){
    e.target.classList.add('match');
}

function noMatch(e){

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

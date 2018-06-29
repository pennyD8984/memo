/* TODO
/* - get rid of globals
/*
 * Create a list that holds all of your cards*/
let deck = document.getElementById('deck');
let cards = document.querySelectorAll('.card');
// When DOM is ready, shuffle cards or when restart is clicked
document.addEventListener('DOMContentLoaded', startGame);
deck.addEventListener('click', clicked);
// IIFE to avoid globals
let clicks = (function(){
        let count = 0;
        return function(){
            count+=1;
            console.log(count);
        };
}());
  
// Create an array from HTML Collection to shuffle cards
cards = Array.from(cards);
let icons = [];

function clicked(e){
    if (!e.target.classList.contains('open') && !e.target.classList.contains('show') ){
       e.target.classList.toggle('show', 'open');
        getI(e);
    }
}

function getI(e){
    // get target class name
    let target = (e.target.querySelector('i'));
    // push i class names into an array only if the user doesn't click an opened card (no deck)
    if (e.target.classList.contains('card') && !e.target.classList.contains('open') && icons.length < 2){
        icons.push(target);
        if(icons.length === 2)
        {
            clicks();            
            checkMatch();
            icons = [];
        }
    }
}

function checkWin(matched){
    let matchedCards = document.querySelectorAll('.match');
        if (matchedCards.length === cards.length){
            console.log('you won');
        }
}

function checkMatch(){
    if(icons[0].className === icons[1].className)
    {
        let matched = icons.map(function(el){
            el.parentNode.classList.add('match');  
        });
        console.log('matched.length = ' + matched.length);
        checkWin(matched);
      }

    else{
        let unMatched = icons.map(function(el){
            el.parentNode.classList.add("noMatch");
            setTimeout(function removeClass() {
                el.parentNode.classList.remove("open", "show", "noMatch");
            }, 1000);
            return el;
            });
    }
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

// Create a list that holds all the cards*/
const deck = document.getElementById('deck');
deck.addEventListener('click', function(e){
        clicked(e);
});

let cards = document.querySelectorAll('.card');
// When DOM is ready or when restart is clicked shuffle cards
document.addEventListener('DOMContentLoaded', function(){
    start();
});

let icons = [];
// Create an array from HTML Collection to shuffle cards
cards = Array.from(cards);
// prepare the starting game
let start = function startGame(){
    checkOpen();
// Call shuffle card function - it works, but it doesn't move stuff around
    shuffle(cards);
// change li positions
    newDeck();
    timer();
    restart();
};

function restart(){
    let restartB = document.querySelectorAll('.restart, .play');
    for (let i = 0; i < restartB.length; i++){
        restartB[i].addEventListener('click', function(){
            let modal = document.querySelector('.modal');
            modal.style.visibility = 'hidden';
            location.reload();
        });
    }
}

function lostStar(){
    let star = document.querySelectorAll('.stars li');
    for(let i = 0; i < star.length; star++){
        star[i].remove();
        if(star.length === 2){
            gameOver();
        }
    }
}

let gameOver = function(){
    let gOver = document.querySelector('.congrats');
    gOver.innerHTML = 'Game over';
    modal();
};

function modal(){
    let s = 100;
    let modalShow = document.querySelector('.modal');
    setInterval(function(){
        modalShow.classList.add('visible');
    }, s);
    stats();
}

function stats(){
    let innerTime = document.querySelector('#timer').innerHTML;
    document.querySelector('.time-stat').innerHTML = 'Time:&nbsp;&nbsp;&nbsp;' + innerTime;
    let innerStar = document.querySelector('.stars').innerHTML;
    document.querySelector('.stats .stars').innerHTML = 'Rating:&nbsp;&nbsp;' + innerStar;
}

let checkOpen = function(){
    let opened = Array.from(document.querySelectorAll('.show', 'open', 'match'));
    if(opened.length >= 0){
        opened.forEach(function(x){
            x.classList.remove('show', 'open', 'match', 'noMatch');
        });
    }
};

let shuffle = function(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

let newDeck = function(){
    // loop through the card array and append the returned cards indexed el
    for (let i = 0; i < cards.length; i++){
        deck.appendChild(cards[i]);
    }
};

function timer(){
    let s = 0, m = 0;
        setInterval(function(){
        s+=1;
        let t = document.querySelector('#timer');
        t.innerHTML = m + 'm : ' + s + 's';
        if(s < 10){
        t.innerHTML = m + 'm : ' + '0' + s + 's';
        }
        if(s === 60){
            m++;
            s = 0;
        }
    }, 1000);
}

let moves = function(){
        let count = 0;
        let mCount = document.querySelector('.moves');
        return function(){
            count+=1;
        mCount.innerHTML = 'Moves: ' + count;
            return count;
        };
}();

let clicked = function(e){
    if (!e.target.classList.contains('open') && !e.target.classList.contains('show')){
        e.target.classList.toggle('show', 'open');
        getI(e);
    }
};

let getI = function(e){
    // get target class name
    let target = (e.target.querySelector('i'));
    // push i class names into an array only if the user doesn't click an opened card (no deck)
    if (e.target.classList.contains('card') && !e.target.classList.contains('open') && icons.length < 2){
        icons.push(target);
        if(icons.length === 2){
            moves();
            checkMatch();
            icons = [];
        }
    }
};


let addStar = function(){
    var star = document.querySelector('.stars').firstElementChild;
    var newStar = star.cloneNode(true);
    var stars = document.querySelector('.stars');
    stars.appendChild(newStar);
};

let checkMatch = function(){
    if(icons[0].className === icons[1].className){
        let matched = icons.map(function(el){
            el.parentNode.classList.add('match');
        });
        checkWin(matched);
        addStar();
    }
    else{
        icons.map(function(el){
            el.parentNode.classList.add('noMatch');
            setTimeout(function removeClass(){
                el.parentNode.classList.remove('open', 'show', 'noMatch');
            }, 1000);
        });
        lostStar();
    }
};
// change 2 to cards.length
let checkWin = function(matched){
    let matchedCards = document.querySelectorAll('.match');
        if (matchedCards.length === cards.length){
            modal();
        }
};
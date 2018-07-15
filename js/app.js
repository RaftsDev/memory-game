/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

//listener for create Deck

var deck = document.getElementsByClassName("deck")[0];
var movesEl = document.getElementsByClassName("moves")[0];
var starsEl = document.getElementsByClassName("fa-star");
movesEl.innerHTML=0;
var clickNum = 0;
var match = 0;
var stars = 0;
deck.addEventListener("click",flipOver);
var flipMap = new  Map();
var repeatButton = document.getElementsByClassName("restart")[0];
repeatButton.addEventListener("click",restart);


function restart(){
  deck.innerHTML = "";
  createDeck(4);
  movesEl.innerHTML=0;
  match = 0;
}


function flipOver(evt) {
  if (flipMap.size>1) return false; //deny open more than cards
  clickNum++;//Counting clicks
  movesEl.innerHTML++;//number of moves;
  var cardNum = clickNum;
  flipMap.set(cardNum,evt.target);

  console.log("num:"+clickNum+"flipMap:"+flipMap.get(cardNum).outerHTML+" of:"+cardNum);
  flipMap.get(cardNum).classList.add("show","open");
  console.log("num:"+clickNum+"flipMap size:"+flipMap.size+" symbol:"+flipMap.get(cardNum).children[0].classList[1]);
   setTimeout(function(){ //start function to flip over back a card
     console.log("num:"+clickNum+" flipMap.get:"+flipMap.get(cardNum).outerHTML);
     flipMap.get(cardNum).classList.remove("show","open");
     flipMap.delete(cardNum);
   },3000);
  if (flipMap.size>1) {

    if (flipMap.get(cardNum).children[0].classList[1] === flipMap.get(cardNum-1).children[0].classList[1]) {
      flipMap.get(cardNum).classList.add("match");
      flipMap.get(cardNum-1).classList.add("match");
      flipMap.clear();
      match++;
      
      if (match == 8) {
        stars++;
        starsEl[stars-1].setAttribute("style", "color: yellow;");
        alert("You win!!!");

      }
      console.log("num:"+clickNum+"flipMap>1 symbol:"+flipMap.get(cardNum).children[0].classList[1]+" "+flipMap.get(cardNum-1).children[0].classList[1]+" array size:"+flipMap.size);
    }
  }

}



function createCardsArray(n){
  // alert("createCardsArray"+n);
  var symbolsArray = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-leaf','fa-bicycle','fa-bomb'];
  var cardsArray = [];
  var j=0;
  for (var i = 0; i < n*n; i++) {
    var iElement = document.createElement("i");
    iElement.classList.add("fa");
    j++;
    if (j>7){
      j=0;
    }
    iElement.classList.add(symbolsArray[j]);
    var li = document.createElement("li");
    li.appendChild(iElement);
    li.classList.add("card");
    cardsArray[i] = li;

  }
  shuffle(cardsArray);
  return cardsArray;
}

function createDeck(n){
  //alert("createDeck"+n);
  deck.innerHTML = "";
  var array = createCardsArray(n);
  var fragment = document.createDocumentFragment();
  for (var i=0;i<array.length;i++) {
    fragment.appendChild(array[i]);
  }
  //alert("innerHTML"+);
  deck.appendChild(fragment);
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
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

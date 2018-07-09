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
deck.addEventListener("click",flipOver);
// var restartButton = document.getElementsByClassName("restart")[0];
// restartButton.addEventListener("click",createDeck(4));
var previousSymbol = "";
var previousEl = {};

function flipOver(evt) {
  var target = evt.target;

  iTagTarget = target.children[0];
  // console.log(iTagTarget);
  symbol = iTagTarget.classList[1];
  // alert("symbol="+symbol);
  target.classList.add("show","open");
  // alert("previousSymbol="+previousSymbol);
  setTimeout(function(){
    if (symbol === previousSymbol){
      target.classList.add("match");
      // alert("matched symbol="+symbol+" preSymbol="+previousSymbol);
      previousSymbol = symbol;
      previousEl.classList.add("match");
      previousEl = {};


    }
    else {
      // alert("not Matched");
      target.classList.remove("show","open");
      previousSymbol = symbol;
      previousEl = target;
    }},1000);

  // alert("symbol="+symbol);
};

function createCardsArray(n){
  alert("createCardsArray"+n);
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

    // <li class=&#34card&#34><br><i class=&#34fa fa-"+symbolsArray[j]+"></i><br></li>";

    //cardsArray[i]="<li>"+symbolsArray[j]+"</li>"
    //alert(cardsArray[i]);


  }
  shuffle(cardsArray);
  return cardsArray;
}

function createDeck(n){
  //alert("createDeck"+n);

  var array = createCardsArray(n);
  var deck = document.getElementsByClassName("deck")[0];
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

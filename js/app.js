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
// var match = false;
var clickNum = 0;
deck.addEventListener("click",flipOver);
var restartButton = document.getElementsByClassName("restart")[0];
restartButton.addEventListener("click",createDeck(4));
var flipMap = new  Map();

function flipOver(evt) {
  if (flipMap.size>1) return false; //deny open more than cards
  clickNum++;//Counting clicks
  var cardNum = clickNum;
  flipMap.set(cardNum,evt.target);
  console.log("flipMap:"+flipMap.get(cardNum)+" of:"+cardNum);
  flipMap.get(cardNum).classList.add("show","open");
  console.log("flipMap size:"+flipMap.size+" symbol:"+flipMap.get(cardNum).children[0].classList[1]);
  // if(flipArr.length===1){
  //   return false;
  // }
   setTimeout(function(){
     flipMap.get(cardNum).classList.remove("show","open");
     flipMap.delete(cardNum);
   },3000);
  if (flipMap.size>1) {
    // var firstCard = flipArr[0];
    // var secondCard = flipArr[1];
    // var iTagFirstCard = firstCard.children[0];
    // var symbolFirstCard = iTagFirstCard.classList[1];
    // var iTagSecondCard = secondCard.children[0];
    // var symbolSecondCard = iTagSecondCard.classList[1];

    if (flipMap.get(cardNum).children[0].classList[1] === flipMap.get(cardNum-1).children[0].classList[1]) {
      flipMap.get(cardNum).classList.add("match");
      flipMap.get(cardNum-1).classList.add("match");
      flipMap.clear();
      console.log("flipMap>1 symbol:"+flipMap.get(cardNum).children[0].classList[1]+" "+flipMap.get(cardNum-1).children[0].classList[1]+" array size:"+flipMap.size);
    }
    // else{
    //   // setTimeout(function(){
    //   //   flipArr[0].classList.remove("show","open");
    //   //   flipArr[1].classList.remove("show","open");
    //   //   flipArr=[];
    //   // },3000);
    //     //remove earliest card
    // }
  }

    // setTimeout(function(){
    //   if (flipArr.length===2){
    //     console.log("array size:"+flipArr.length+" symbol:"+evt.target.children[0].classList[1]);
    //     evt.target.classList.remove("show","open");
    //     flipArr.shift();//remove earliest card
    //     console.log("array size after shift:"+flipArr.length);

    //   }
    //   console.log("avoided condition array size:"+flipArr.length+" symbol:"+evt.target.children[0].classList[1]);
    // },5000);

   //avoid run code if cards already matched


}



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

// General functions
function getRnd(min, max) {
   var minRnd = min;
   var maxRnd = max - minRnd + 1;
   var rnd1 = Math.floor(Math.random() * maxRnd) + minRnd; 
   return rnd1;
}

// ES #1
//Una funzione per capire se la parola è palindroma.


function palindrome(word){

   var userWord         = word;
   var splitWord        = userWord.split("");
   var reverseArrayWord = splitWord.reverse();
   var reverseWord      = reverseArrayWord.join("");

   if (reverseWord === userWord) {
      
      return true;
   } else {

      return false;
   }
};

var word = "radar";

function es1(){

   if (palindrome(word)) {
      
      console.log("La parola è palindroma.");
   } else {

      console.log("La parola non è palindroma.");
   }
}


// ----------------------------------


// ES #2
// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

function evenOrOdd(evenOrOdd, number){

   var userChoice = evenOrOdd;
   var userNumber = number;
   var pcNumber   = getRnd(1, 5);
   var sum = pcNumber + userNumber;
   
   if (userChoice == "even" && sum % 2 == 0 || userChoice == "odd" && sum % 3 == 0) {
      
      return true;
   } else {
      
      return false;
   }
}

var userChoice = "even";
var userNumber = 5;

function es2(){

   if (evenOrOdd(userChoice, userNumber)) {
      
      console.log("Numero giocatore: " + userNumber, "-",  "Scelta del giocatore: " + userChoice, "-", "Il giocatore ha vinto.");
   } else {

      console.log("Il pc ha vinto");
   }
}


// ----------------------------------


// Attiva / disattiva esercizio

// es1();
es2();
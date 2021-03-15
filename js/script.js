// General functions
function getRnd(min, max) {
   var minRnd = min;
   var maxRnd = max - minRnd + 1;
   var rnd1   = Math.floor(Math.random() * maxRnd) + minRnd;
   return rnd1;
}

// ES #1
//Una funzione per capire se la parola è palindroma.


function palindrome(word){

   var splitWord        = word.split("");
   var reverseArrayWord = splitWord.reverse();
   var reverseWord      = reverseArrayWord.join("");

   if (reverseWord === word) {
      
      return true;
   } else {

      return false;
   }
};

function es1(){

   if (palindrome("anno")) {
      
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

var userChoice  = "odd";
var userNumber  = 5;
var extSum      = 0;
var extPcNumber = 0;

// !Need refactoring
function evenOrOdd(evenOrOdd, number){

   var userChoice   = evenOrOdd;
   var userNumber   = number;
   var pcNumber     = getRnd(1, 5);
   var sum          = pcNumber + userNumber;
       extSum      += sum;
       extPcNumber += pcNumber;

   if ((userChoice == "even" && sum % 2 == 0) || (userChoice == "odd" && sum % 2 == 1)) {
      
      return true;
   } else {
      
      return false;
   }
}

function es2(){

   if (evenOrOdd(userChoice, userNumber) == true) {
      
      console.log("Numero giocatore: " + userNumber, "-", "Numero PC: " + extPcNumber, "-","Numero totale: " + extSum, "-", "Scelta del giocatore: " + userChoice, "-", "Il giocatore ha vinto.");
   } else {

      console.log("Numero giocatore: " + userNumber, "-", "Numero PC: " + extPcNumber, "-","Numero totale: " + extSum, "-", "Scelta del giocatore: " + userChoice, "-", "Il PC ha vinto.",);
   }
}


// ----------------------------------


// Attiva / disattiva esercizio

es1();
// es2();
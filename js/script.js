// General functions
function getRnd(min, max) {
   var minRnd = min;
   var maxRnd = max - minRnd + 1;
   var rnd1   = Math.floor(Math.random() * maxRnd) + minRnd;
   return rnd1;
}

// ES #1
// Una funzione per capire se la parola è palindroma.

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

   if (palindrome("radar")) {
      
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

function evenOrOdd(userChoice, userNumber){

   console.log(userNumber);
   var pcNumber  = getRnd(1, 5);
   var sum       = pcNumber + userNumber;
   var sumIsPair = sum % 2 == 0;
   var sumIsOdd  = sum % 2 == 1;
   var results   = {
      winner: false,
      sum: sum,
      pcNumber: pcNumber,
      userChoice: userChoice,
      userNumber: userNumber
   };

   if ((userChoice == "even" && sumIsPair) || (userChoice == "odd" && sumIsOdd)) {
      
      results.winner = true;

      return results;
   } else {
      
      return results;
   }
}



function es2(){

   var finalResults = Object.assign({}, evenOrOdd("odd", 1));
   
   if (finalResults.winner) {
      
      console.log("Scelta del gicoatore: " + finalResults.userChoice, "-", "Numero del giocatore: " + finalResults.userNumber, "-", "Numero del pc: " + finalResults.pcNumber, "-", "Somma: " + finalResults.sum, "Il giocatore ha vinto!");
   } else {

      console.log("Scelta del gicoatore: " + finalResults.userChoice, "-", "Numero del giocatore: " + finalResults.userNumber, "-", "Numero del pc: " + finalResults.pcNumber, "-", "Somma: " + finalResults.sum, "Il giocatore ha perso!");
   }
}


// ----------------------------------


// Attiva / disattiva esercizio

// es1();
es2();
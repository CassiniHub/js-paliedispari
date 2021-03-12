// ES #1
//Una funzione per capire se la parola è palindroma.


function palindrome(word){

   var userWord             = word;
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

es1();
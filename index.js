function isPalindrome(word) {
  // Write your algorithm here
   let wordArray = Array.from(word);
   
   let arr1 = wordArray.slice().reverse();
    
     for(let i = 0; i <= wordArray.length ; i++){
      if(arr1[i] === wordArray[i]){
        return true
      } else {
        return false
      }
     }
}

/* 
  Add your pseudocode here
  initialize a function called isPalindrome(variables : word) {
    initialize a new array called wordArray 
       give wordArray the characters of the variable word
    initialize a new array called arr1
       assign the values of wordArray reversed
   iterate over each item in the input wordArray:
     if the values of wordArray equal the values of arr1
        return true
     else
        return false
  }
*/

/*
  Add written explanation of your solution here

  To be able to go through all the characters(letters) of the given word(string), 
  we put them in an array.
  To check if it is a palindrome, we would have to compare value(i) with value(-i). 
  Therefore, we would have to put the reversed values in another array.
  To prevent the wordArray from changing, we use the slice() function.
  after ensuring we have two arrays containing the same values but reversed, we start comparing.
  if the values are identical, it means our original word is indeed a palindrome, otherwise, it is
  not. 
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));


  console.log("Expecting: false");
  console.log("=>", isPalindrome("night"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("111100001111"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Anna"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

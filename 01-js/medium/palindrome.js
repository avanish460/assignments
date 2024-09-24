/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase().replace(/[^\w]/g, "").split("");
  let i=0; 
  let j=newStr.length - 1;
  while(i<j){
    if(newStr[i] === newStr[j]){
      i++;
      j--;
    }else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

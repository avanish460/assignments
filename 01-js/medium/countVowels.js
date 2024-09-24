/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const lowerStr = str.toLowerCase().split("");
    let vowelCounts = 0;
    for(let i=0; i<lowerStr.length; i++){
      switch (lowerStr[i]) {
        case 'a':
          vowelCounts++;
          break;
        case 'e':
          vowelCounts++;
          break;
        case 'i':
          vowelCounts++;
          break;
        case 'o':
          vowelCounts++;
          break;
        case 'u':
          vowelCounts++;
          break;    
      
        default:
          break;
      }
    }
    return vowelCounts;
}

module.exports = countVowels;
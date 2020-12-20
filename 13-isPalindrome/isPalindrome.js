function isPalindrome(word) {
  let counter = word.length - 1;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[counter]) return false;
    counter--;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
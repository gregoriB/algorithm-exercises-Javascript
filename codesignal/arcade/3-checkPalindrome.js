function checkPalindrome(inputString) {
  let newString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    newString += inputString[i];
  }

  return newString === inputString ? true : false;
}
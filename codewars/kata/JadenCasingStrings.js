String.prototype.toJadenCase = function () {
  let isSpace = true,
      newStr  = "";
  for (let char of this) {
    newStr += isSpace ? char.toUpperCase() : char;
    isSpace = char === " " ? true : false;
  }
  
  return newStr;
};
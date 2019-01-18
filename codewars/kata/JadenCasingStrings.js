String.prototype.toJadenCase = function () {
  let isSpace = true;
  let newStr = "";
  for (let char of this) {
     newStr = isSpace ? newStr + char.toUpperCase() : newStr + char;
     isSpace = char === " " ? true : false;
  }
  
  return newStr;
};
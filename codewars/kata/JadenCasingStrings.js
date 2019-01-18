String.prototype.toJadenCase = function () {
  let isSpace;
  let newStr = "";
  for (let char of this) {
     newStr = isSpace ? newStr + char.toUpperCase() : newStr + char;
     isSpace = char === " " ? true : false;
  }
  
  return newStr.slice(0, 1).toUpperCase() + newStr.slice(1);
};
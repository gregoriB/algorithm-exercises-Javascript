function isCryptSolution(crypt, solution) {
  let cryptSolution = {}
  let decrypted = [];
  solution.forEach(arr => cryptSolution[arr[0]] = arr);
  crypt.forEach(string => {
      let tempNum = "";
      for (let i = 0; i < string.length; i++) {
          if (cryptSolution[string[i]]) tempNum += cryptSolution[string[i]][1];
          if (tempNum === '0' && string.length > 1) return false;
          
      }
      decrypted.push(Number(tempNum));
  });
  
  return decrypted[0] + decrypted[1] === decrypted[2];
}
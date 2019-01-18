function firstNotRepeatingCharacter(s) {
  let obj = {}
  let notRepeating = '_';
  for (let val of s) {
      obj[val] = (obj[val] || 0) + 1;
  }
  for (let val in obj) {
      notRepeating = obj[val] < 2 && notRepeating === '_' ? val : notRepeating;
      console.log(obj[val])
  }
  
  return notRepeating;
}

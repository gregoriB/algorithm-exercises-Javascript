function firstDuplicate(a) {
  let obj = {}
  let duplicate = -1;
  for (let num of a) {
      obj[num] = (obj[num]|| 0) + 1;
      duplicate = obj[num] > 1 && duplicate < 0 ? num : duplicate;
  }
  
  return duplicate;
}
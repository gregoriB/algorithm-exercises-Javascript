function rotateImage(a) {
  const newArray = [];
  for (let i = 0; i < a.length; i++) {
      const tempArray = [];
      for (let j = a.length - 1; j >= 0; j--) {
          tempArray.push(a[j][i])
      }
      newArray.push(tempArray)
  }
  
  return newArray;
}
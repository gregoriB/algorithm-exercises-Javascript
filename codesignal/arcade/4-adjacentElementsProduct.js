function adjacentElementsProduct(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
      largest = arr[i] * arr[i - 1] > largest ? largest = arr[i] * arr[i - 1] : largest;
  }
  
  return largest;
}
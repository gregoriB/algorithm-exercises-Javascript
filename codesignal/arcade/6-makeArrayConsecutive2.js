function makeArrayConsecutive2(statues) {
  const newArray = statues.sort((a, b) => a - b);
  let statuesNeeded = 0;
  for (let i = 0; i < newArray.length; i++) {
      if (newArray[i + 1] - newArray[i] > 1) {
          statuesNeeded += (newArray[i + 1] - newArray[i]) - 1;
      }
  }
  
  return statuesNeeded;
}
function getCharacters(obj, key, val) {
  var foundCharacters = [];
  obj.characters.forEach(character => {
    if (character[key] && character[key].toLowerCase() === val.toLowerCase()) {
      foundCharacters.push(character);
    }
  });
    
  return foundCharacters;
}
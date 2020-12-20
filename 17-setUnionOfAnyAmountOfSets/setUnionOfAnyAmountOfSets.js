function setUnionOfAnyAmountOfSets(...args) {
  let finalSet = new Set()
  for(let i = 0; i < args.length; i++){
    for(let element of args[i]){
      finalSet.add(element);
    }
  }
  return finalSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
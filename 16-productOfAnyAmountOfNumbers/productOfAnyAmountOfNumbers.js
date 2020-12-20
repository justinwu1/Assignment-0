function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
  let i;
  for(i = 0; i < args.length;i++){
    if(typeof args[i] === "number"){
      product *= args[i];
    }else if(typeof args[i] === "object"){
      for(let j = 0; j < args[i].length; j++){
        product *= args[i][j];
      }
    }
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
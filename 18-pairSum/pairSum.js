function pairSum(nums, target) {
  if(nums.length <= 1){
    throw "num is only one number"
  }
  try{
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length;j++){
        if(nums[i] + nums[j] === target) return true;
      }
    }
    return false;
  }catch(err){
    console.log(err)
  }
}

// Do not edit this line;
module.exports = pairSum;
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// nums = [2,7,11,15], target = 9


// this function is O(n^2)
const twoSum = (nums, targetNumber) => {
  // for the first iteration
  for (let i = 0; i < nums.length; i++) {
    // 2nd iteration to compare with the first
    for (let j = i+1; j < nums.length; j++) {
      // if nums index + nums index is equal to our target number
      if(nums[i] + nums[j] === targetNumber)  {
        // we return the index that equaled to our target number
        return [i,j];
      }
    }
  }
};
console.log(twoSum)


const twoSum2 = (nums, target) => {
  let map = {}; // Stores seen numbers: {seenNumber: indexItOccurred}
  for (let i = 0; i < nums.length; i++) { // loop through all numbers
      let value = nums[i];
      // we use this to compare the target and the value inside our hashmap
      let complimentPair = target - value;
      if (map[complimentPair] !== undefined) { // check if the number we need to add to `n` to reach our target has been seen:
          return [map[complimentPair], i];   
      }
      else {
          map[value] = i;  // update our hash to include the. number we just saw along with its index.
      }
  }
};




// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// nums = [2,7,11,15], target = 9



const twoSum3 = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complimentPair = target - value;
    if(map[complimentPair] !== undefined) {
      return [map[complimentPair], i];
    }
    map[value] = i;
  }
}

console.log(twoSum3([2,15,11,7],9))
// {0:2, 1:7 }
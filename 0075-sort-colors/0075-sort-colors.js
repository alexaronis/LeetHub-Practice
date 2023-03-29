/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let endInd = nums.length - 1
    let startInd = 0

    for (let i = 0; i <= endInd; i++){
          if(nums[i] === 0){
              [nums[i], nums[startInd]] = [nums[startInd], nums[i]]
                startInd++
          } else if(nums[i] === 2){
              [nums[i], nums[endInd]] = [nums[endInd], nums[i]]
              endInd--
              i--
          }
    }

};
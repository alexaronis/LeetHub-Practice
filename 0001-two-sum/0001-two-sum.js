/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const result = []
    
    for(let i = 0; i < nums.length; i++){
        let compliment = target - nums[i]
        
        if(nums.includes(compliment) && nums.indexOf(compliment) !== i){
            result.push(i)
            result.push(nums.indexOf(compliment))
            break
        }
    }
    return result

};
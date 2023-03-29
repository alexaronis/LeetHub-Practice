/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let counter = 0
    let decrementer = nums.length - 1

    while(counter <= decrementer){
        if(nums[counter] === 0){
            console.log(nums[counter])
            nums.splice(counter, 1)
            nums.splice(0, 0, 0)
            
            //counter++
            if(nums[counter] === 0){
                counter++
            }
        }else if(nums[counter] === 2){
            console.log(nums[counter])
            nums.splice(counter, 1)
            nums.splice(nums.length, 0, 2)
            
            //counter++
            if(nums[decrementer] === 2){
                console.log(nums[counter])
                decrementer--
            }
        }else if(nums[counter] === 1){
            console.log(nums[counter])
            //nums.splice(counter, 1, 1)
            counter++
        }
    }

};
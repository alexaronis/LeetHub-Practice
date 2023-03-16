/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {   
    const numSort = nums.sort((a, b) => a - b)
    const result = []
    
    for (let i = 0; i < numSort.length; i++){
        let midPoint = i + 1
        let rightPoint = nums.length - 1

        if(midPoint === rightPoint || i === midPoint || i === rightPoint){
            break
        }
        if(numSort[i - 1] === numSort[i]){
            continue
        }

        while(midPoint < rightPoint){
            if(numSort[i] + numSort[midPoint] + numSort[rightPoint] === 0){
                result.push([numSort[i], numSort[midPoint], numSort[rightPoint]])
                midPoint += 1
                while(numSort[midPoint] === numSort[midPoint - 1]){
                    midPoint +=1
                }
            } else if (numSort[i] + numSort[midPoint] + numSort[rightPoint] > 0){
                rightPoint -= 1
            } else if (numSort[i] + numSort[midPoint] + numSort[rightPoint] < 0){
                midPoint+= 1
            }
        }
    }  
    return result
};
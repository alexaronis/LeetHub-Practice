/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num, output = '') {

    if (num === 0) return output
    const romanNum = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    }
   if(num >= 1000){
       function minusThousand(num){
           if (num < 1000 ) return intToRoman(num, output)
            output += romanNum['1000']
            num -= 1000
            return minusThousand(num)
       }
        return minusThousand(num)
   }else if(num >= 100 && num < 1000){
       function minusHundred(num){
           if (num < 100) return intToRoman(num, output)
           if (num >= 900){
               output += romanNum['100'] + romanNum['1000']
               num -= 900
                return intToRoman(num, output)
           } else if(num >= 500 && num <= 899){
               output += romanNum['500']
               num -= 500
                return minusHundred(num)
           }else if(num >= 400 && num <= 499){
               output += romanNum['100'] + romanNum['500']
               num -= 400
                return intToRoman(num, output)
           } else if(num <= 399){
               output += romanNum['100']
               num -= 100
               if(num < 100) return intToRoman(num, output)
                return minusHundred(num)
           }
        
       }
       return minusHundred(num)
   } else if (num < 100 && num >=10){
       function minusTens(num){
           if (num < 10){
            return intToRoman(num, output)
           } 
           if(num >= 90){
               output += romanNum['10'] + romanNum['100']
               num -= 90
                return intToRoman(num, output)
           }else if(num >= 50 && num <= 89){
               output += romanNum['50']
               num -= 50
                return minusTens(num)
           } else if(num >=40 && num <= 49){
               output += romanNum['10'] + romanNum['50']
               num -= 40
                return intToRoman(num, output)
           } else if (num <= 39){
               if(num < 10 ) {return intToRoman(num, output)}
               output += romanNum['10']
               num -= 10
               
                return minusTens(num)
           }
       } 
      return minusTens(num, output)
   } else if(num < 10){
       function minusOnes(num){
       if (num === 0) return output
       if(num === 9){
           output += romanNum['1'] + romanNum['10']
           return output
       }else if (num >=5){
           output += romanNum ['5']
           num -= 5
           return minusOnes(num, output)
       } else if(num === 4){
           output += romanNum['1'] + romanNum['5']
           return output
       } else if(num < 4){
           output += romanNum['1']
           num -= 1
           if (num === 0) return output
        return minusOnes(num)
       }
       }
      return  minusOnes(num)
   }  

};
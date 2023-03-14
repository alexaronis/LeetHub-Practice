/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let string = ""
    const ones = ["","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    const specialInt = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    const hundreds = ["","One Hundred", "Two Hundred", "Three Hundred", "Four Hundred", "Five Hundred", "Six Hundred", "Seven Hundred", "Eight Hundred", "Nine Hundred"]

    if (num === 0){
        return "Zero"
    }
    if(999999999 < num){
        string += ones[Math.floor(num/1000000000)] + " Billion"
        num = num % 1000000000
        }

    if(999999 < num && num < 1000000000){
        if(num > 99999999){
            string += " " + hundreds[Math.floor(num/100000000)]
            num = num % 100000000
            }
        if(num > 19999999 && num < 100000000){
            string += " " + tens[Math.floor(num/10000000)]
            Math.floor(num/1000000 % 10) === 0 ? string : string += " " + ones[Math.floor(num/1000000 % 10)]
            } else if(num > 9999999 && num < 20000000){
            string += " " + specialInt[((Math.floor(num/1000000)) % 10)]
            } else if(num < 10000000 && num > 999999){
                string += " " + ones[Math.floor(num/1000000)]
            }
            string += " Million"
            num = num % 1000000
        }


    if(999 < num && num < 1000000){
        if(num > 99999){
            string += " " + hundreds[Math.floor(num/100000)]
            num = num % 100000
            }
        if(num > 19999 && num < 100000){
            string +=  " " + tens[Math.floor(num/10000)] 
            Math.floor(num/1000 % 10) === 0 ? string : string += " " + ones[Math.floor(num/1000 % 10)]
        } else if(num > 9999 && num < 20000){
            string += " " + specialInt[((Math.floor(num/1000)) % 10)]
        } else if( num < 10000 && num > 999) {
            string += " " + ones[Math.floor(num/1000)]
        }

            string += " Thousand"
            num = num % 1000
    }

    if (num < 1000) {
        if(num < 1000 && num > 99){
        string +=  " " + hundreds[Math.floor(num/100)] 
            num = num % 100
        }
    
        if(num > 19){
            string += " " + tens[Math.floor(num/10)]
            Math.floor(num%10 === 0) ? string : string +=  " " + ones[Math.floor(num%10)]
            num = num % 10
        } else if(num > 9 && num < 20){
            string += " " + specialInt[Math.floor(num%10)]
        } else if (num > 0){
        string += " " + ones[Math.floor(num/1)]
        }
    }
    

   
    return string.trim()
   
};
/**
 * @param {number[]} nums
 * @return {string}
 */
/*
3024. Type of Triangle
*/
var triangleType = function(nums) {
    [a, b, c]=nums.sort(function(a, b){return a - b});
    if ( a + b > c){
        var lados = [...new Set(nums)].length;
        if (lados == 1){
        return "equilateral"
    }else{
        
        if (lados == 2){
            return "isosceles"
        }else{
            return "scalene"
        }
    }
    }else{
        return "none"
    }
    
};

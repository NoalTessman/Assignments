var assert = function(actual, expected){
    if(actual === expected){
        console.log({
            type :Success,
            details:{
                actual:actual,
                expected:expected},
         } );
        } else {throw new{
            type: "Fail",
            details:{
                actual:actual,
                expected: expected,
            }
        }

        }
    }


function checkForValue(arr,item){
    return arr.includes(item);
}
var testcases =[
    {arry:[1,2,3,4,5], item:8},
    {arr:[6,7,8,9,10], item:8}, ]
    console.log(assert( checkForValue(testcases[0].arry, testcases[0].item) ));
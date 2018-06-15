function filter(callBack, array) { // we use the callback to filter the array
    //callback is designed to take a single item from the array, and its index as arguments
    //its also designed to return true or false
    let output = [];
    for ( let i = 0; i < array.length; i ++) {
        let element = array[i];
        let passesTest = callBack(element, i);
        if(passesTest) output.push(element);
    }
    return output;
}

let ints = [1,2,3,4,5,6,7,8,9,10];

function testForEven(int) {
    return int % 2 === 0;
}

function testForOdds(int) {
    return int % 2 !== 0;
}

let evens = filter(testForEven, ints);
let odd = filter(testForOdds, ints);

console.log(evens);
console.log(odd);
input = "Hello How are you won't you tell me your name";
var strcopy = function(){
var output = {
    Dupes:"",
    extras:""
};
inputsplit = input.split("");
for (i = 0; i < inputsplit.length; i++ ){
    if(output.extras.indexOf(inputsplit[i]) > -1){
    output.Dupes += inputsplit[i];
    } else {
    output.extras += inputsplit[i];
    }
}
return output;
};

console.log(strcopy());


//  console.log(output);
///////////COIN FLIP THING ////////////
// var coinFlip = function(){
//     return Math.random() < .5 ? "Heads": "Tails";
// }

// console.log(coinFlip())

// var test="Hello, how are you";
// for(i=0; i<100; i++){
    //     console.log(coinFlip());
    // }

// var test = [];
// test.push(1,2,33,4,56,7,8,9,7,5,5,3,3,2,2,11,2);
// console.log(test);

// console.log(test.slice(0,4));
// test2= test.slice(0,4);
// console.log(test2, test);
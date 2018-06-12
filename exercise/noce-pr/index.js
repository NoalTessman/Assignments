//From project folder: npm init -y
//npm install --save <>
// import package into project
var rs = require("readline-sync");

// var what =   rs.keyInYN('What is your quest?');
// if (what === true){
//     console.log("well done");
// } else {
//     console.log("...")
// }
var test = [
    "Sword",
    "Big sword",
    "tiny sword",
    "Another sword",
    "Sword"
]
// var Sword = rs.keyInSelect(test, "Choose");
// if (Sword == 1){
//     console.log("the sword is too big, You die");
// } else if (Sword == 2){
//     console.log("This swoed is too small, you die")
// } else{
//     console.log("Good choice")
// }
var favColor = rs.question("What is your favorite color?");
console.log("So your favorite color is " + favColor.toUpperCase() + " ?")
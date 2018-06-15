// var str = "cowecodeibadlsiblbadbflibnsdlifbildsbfilsacofe";
// var regEx = /(co\we)/gi;
// console.log(str.match(regEx));
// function sum(x, y){  
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw new TypeError("inputs must be number");
//     } else{
//     return x + y;};
// };
// try {
//     sum(5, 5);
// }
// catch (err){
//     console.log(err.message);
// }

username ="Egg";
password ="Man";
login = function(user,pass){
    if (user !== username || pass !== password){
        throw new TypeError("Username and Password must match");
    } else {
        console.log("You have Succesfully logged in");
    }
}
try {
    login("Egg", "Man");
}
catch(err){
    console.log(err.message);
}
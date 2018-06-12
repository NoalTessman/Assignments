var rs = require('readline-sync');
upper=rs.question("What would you like to be uppercase?");
console.log(upper.toUpperCase());
anoda=rs.question("One more pls");
console.log(`character count is ${upper.length}`);
console.log(anoda.concat(upper));
var half = upper.slice(upper.length/2, upper.length);
console.log("half of the first is " + half)
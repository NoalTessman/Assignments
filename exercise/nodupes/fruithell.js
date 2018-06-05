var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

var log = function(){
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 
};

fruit.splice(3,1);
log();
fruit.splice(0,1);
 fruit.splice(3,0,fruit.indexOf("orange"));
console.log(fruit.length);
vegetables.splice(4,0,fruit.length);
Fruit = fruit.concat(vegetables);
Fruit.splice(4,2);
Fruit = Fruit.reverse();
console.log(Fruit);
Fruit = Fruit.toString();
console.log(Fruit);
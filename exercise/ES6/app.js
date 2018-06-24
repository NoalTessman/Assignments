const PI = 3.141592
//cannot be reassigned to a new value.
const friends = ["Adam", "Nathan", "Dane"]
friends.push("What")
console.log(friends)

for (let x = 0; x< 10; x++){
}
//let lets x be something temporarily in the scope of the function
// scoped to that block, this will return undefined unless you return, while if you for loop and and define x with x =, it can escape the block. 

function blank(){
};

//no parameters
const arrowFunc = ()=>{
}
//one paramter
const oneParam = param => {
}
//more than  one param
const manyParam = (a,b) => {
}
//for single line
const singleLine = (a,b) => a + b;
function seeThis(){
    console.log(this);
}
const car = {
    model: "WRX",
    year: 1980,
}
// const button = document.querySelector("button");
// button.addEventListener("click", function(){
//     console.log(this)
// })
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Enemy(name, hp){
    this.name = name;
    this.hp = hp || 100;
}
console.log(new Enemy("Toto"))

//REALLY FUCKING COOL
//AUTOMATICALLY DEFAULTS PERAMETERS, GOOD SHIT

//arguments.length stuff
function func(a){
    for(let i = 0; i<arguments.length; i++){
        console.log(arguments[i])
    }
func("a", "b","f")}
//(...arr)= loops through the args?
let spreader = (...arr)=>{
    console.log(arr);
}
spreader(1,2,3,4,5)

const outer = [1,2,3,7,8,9];
const inner = [4,5,6];
outer.splice(3,0, ...inner)
console.log(outer);
// turns arrays into their data pretty much.
const beg = [1,2,3];
const end = [4,5,6];

const combined = [-3,-2,-1,...beg, ...end]
console.log(combined);
//It's called the spread operator, very very useful.
const copy = {...car};
car.sold = true;
const copy2 = {...car};
console.log(copy, copy2);

// const year = country.us.state[43].dealership.location[2].zip[4].county.utah.make.subaru.model.wex.year
class Animal{
    constructor(name){
        this.name = name;
        this.hasCellWall = false;
    }
}
class Mammal extends Animal{
    constructor(name){
        super(name);
        this.hasFur = true;
    }
}
// Mammal.prototype = Object.create(Animal.prototype);

// const dog = new Mammal("EdBoi");
// dog.makesound("I have fallen and I can't get up");

class backWards{
    reverse(str){
        return str.split("").reverse().join("")
    }
}
backWards("What the hell is going on")
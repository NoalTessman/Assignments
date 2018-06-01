if(5>3){
    console.log("is greater than")
}
if("cat".length === 3){
    console.log("is the length")
}
if("cat" === "dog"){
    console.log("Neat")
} else {
    console.log("not the same")
}
var person = {
    name:"Bob",
    age:17
}
console.log(person.name[0])
if (person.age >= 18 && person.name[0]=="B"){
    console.log(person.name +"Is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movies")
}

if (1 == "1"){
    console.log("abstract")
} else if (1 === "1"){
    console.log("strict")
} else {
    console.log("not equal at all")
}
if (1<=2 && 2 === 4){
    console.log("yes")
}else{
    console.log("No")
}
var dog = "dog";
if (typeof dog === 'string'|| dog instanceof String){
    console.log("this is a string");
}else{
    console.log("This code doesn't work")
}

if (typeof "true" == 'boolean'){
    console.log("This code is a Boolean")
} else {
    console.log("No bool")
}
var variable;
if (variable === undefined){
    console.log("this variable has not been defined")
} else {
    console.log("This variable has been defined")
}
console.log(f.charCode)
if ("f".charCode <= 12){
    console.log("how does this work?")
}
var str = "Hello my name is Albert"
var albertremover = function(string){
    string = string.split(" ");
 return string.splice(0,4); } 
console.log(albertremover(str));

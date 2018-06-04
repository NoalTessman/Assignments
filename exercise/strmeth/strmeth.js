
var name = "Hello, How are you won't you tell me your name.";
var name2 = name.toLowerCase();
console.log(name2);
name3 = name2.indexOf('hello');
console.log(name3);

var n = function(str){
    console.log(str.lastIndexOf("o"));
};
n(name2);
console.log(name3);
var name4 = name2.match('ou');
console.log(name4);
var nameReplace = function(fupp){
    return fupp.replace(" ","Wow this function is stupid, not the 'replace' function, but the one I'm currently writing. ");
};
name5 = nameReplace(name);
console.log(name5);
enam2 = name2.toUpperCase();
console.log(enam2);
var nohello = function(str){
    return str.substr(5, str.length);
};
console.log(nohello(name));
name6 = name.slice(1,15);
console.log(name6);
name7 = name.split(" ");
console.log(name7);
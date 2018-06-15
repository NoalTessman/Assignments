var test ="In the days of my youth I was told what it means to be a man";
var counter = function(string){
    storage ={};
    for(var i = 0;i < string.length; i++){
        var currchar = string.charAt(i)
        if (storage[currchar] >=1){
            storage[currchar]++;
        }else{
            storage[currchar] = 1;
        };
    return storage;
        
    };
    // storage = Object.keys(storage).sort(function(a,b){return storage[a]-storage[b]});
    var sorted = [];
    for (var x in storage){
        sorted.push([x, storage[x]]);
    };
    sorted.sort(function(a,b){
        a[1] - b[1];
    });
    return sorted

return storage;
console.log(counter(test));
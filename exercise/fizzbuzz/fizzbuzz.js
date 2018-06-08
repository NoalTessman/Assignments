var fizzbuzz = function(){
    fizzbuzz2 = [];
    for(var i = 1; i <= 50; i++){
        if (i % 3 == 0 && i % 5 == 0){
            fizzbuzz2.push("fizzbuzz");
        } else if(i % 3 == 0){
            fizzbuzz2.push("fizz");
        } else if(i % 5 == 0){
            fizzbuzz2.push("buzz");
        } else {
            fizzbuzz2.push(i);
        }
    }
    return fizzbuzz2;
};
console.log(fizzbuzz());
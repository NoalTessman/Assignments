//From project folder: npm init -y
//npm install --save <>
// import package into project
var rs = require("readline-sync");
var gameActive = 0;
var keyLocker = Math.floor(Math.random() * 5);
console.log(keyLocker)
var guess= [
    1,2,3,4,5
]
var guesscount = 0;
while (gameActive == 0){
    var handinhole = function(){
        gameActive = 3;
    };
var options = [
    "Put in your hand in the hole, even though we don't reccomend that",
    "Guess a locker",
]

console.log("You are in a dark room and you probably want to leave, there are 5 lockers that you can try to open,");
console.log("if you guess it wrong 3 times in a row, you die. There is also a hole labeled 'The hole of mystery'");
console.log("it is highly advised by the ministry of suspiscious and deadly holes not to do this.");
var turn = rs.keyInSelect(options, "What do you do?")
if(turn == 0){
    handinhole();
} else {
    var guess = rs.keyInSelect(guess, " Which locker do you think the key is in?");
    if (guess == keyLocker){
        gameActive = 1;
    }else{
        guesscount +=1;
        console.log("You guessed the wrong hole, you have" + guesscount + " guesses left.");
    }
}
}
if(gameActive == 1){
    console.log("You win!");
} else if(gameActive == 2){
    console.log("You guessed too many times... so you died")
} else{
    console.log("You put your hand in a hole and died");
};

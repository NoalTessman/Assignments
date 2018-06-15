//From project folder: npm init -y
//npm install --save <> 
// import package into project
var rs = require("readline-sync");
var gameActive = 0;
var keyLocker = Math.floor(Math.random() * 5);
var guess= [
    1,2,3,4,5
]
var guesscount = 0;
console.log("You are in a dark room and you probably want to leave, there are 5 lockers that you can try to open,");
console.log("if you guess it wrong 3 times in a row, you die. There is also a hole labeled 'The hole of mystery'");
console.log("it is highly advised by the ministry of suspiscious and deadly holes not to do this.");
while (gameActive == 0){
    var handinhole = function(){
        gameActive = 3;
    };
var options = [
    "Put in your hand in the hole, even though we don't reccomend that",
    "Guess a locker",
    "Speak to the goblin named 'rebmun modnar' he might help!(Also not highly advised)"
]
var turn = rs.keyInSelect(options, "What do you do?")
if(turn == 0){
    handinhole();
} else if(turn == 2){
    console.log("the goblin, named 'REBMUN MODNAR' looks at you and says");
    console.log("The number is " + Math.floor(Math.random()* 5+1));
    }else{
    var lockerguess = rs.keyInSelect(guess, " Which locker do you think the key is in?");
    guessesleft = 2-guesscount;
    if (lockerguess == keyLocker){
        gameActive = 1;
    }else if(guessesleft==0) {
        gameActive = 2;
    }else{
        guesscount +=1;
        console.log("You guessed the wrong hole, you have " + guessesleft + " guesses left.");
    }
}
}
if(gameActive == 1){
    console.log("You found the key!,The door was unlocked to begin with.");
} else if(gameActive == 2){
    console.log("You guessed too many times... so you died")
} else{
    console.log("You place your hand in the hole, you die");
};

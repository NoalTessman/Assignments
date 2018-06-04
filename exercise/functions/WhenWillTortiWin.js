var HareWin = 0;
var TortWin = 0;
while (TortWin<1){
var startRace = function() {
    

var story = "Tortoise and the Hare";


var tortoise = {
   name: "Tortoise",
   distanceRun: 0
}

var hare = {
  name: "Hare",
  distanceRun: 0
}
var hasRaceBegun = true;

var lengthOfRace = 100;
var whosAhead;

while (hasRaceBegun && tortoise.distanceRun < lengthOfRace && hare.distanceRun < lengthOfRace) {
    hare.distanceRun += Math.floor(Math.random() * 10);
    tortoise.distanceRun += Math.floor(Math.random() * 2);
}

if(tortoise.distanceRun >= 100) {
    console.log(tortoise.name + " won!");
    TortWin++;
}

if(hare.distanceRun >= 100){
    if (HareWin % 10000000 == 0){
    console.log(HareWin);
    }
    HareWin++;
}

}

startRace();
}
console.log("The Hare won " + HareWin + " Times before the little tort won");
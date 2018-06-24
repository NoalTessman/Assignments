class Player{
    constructor(name){
        this.name = name;
        this.totalCoins = 0;
        this.status = 1;
        this.gameActive = true;
        // this.gameActive = true;
        //set the other static properties
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        this.status--;
    }
    gotPowerUp(){
        this.status = 2;
    }
    gameOver(){
        this.gameActive = false;

    }
    print(){
        document.body.innerHTML +=`You ${this.name} have this many coins ${this.totalCoins} and have ${this.status} life points left`;
    }
    addcoin(){
        this.totalCoins++;
    }
    //continue with methods
    }

    function gameStart(){
    const Player1 = new Player(selectedName.value)
    var randRange= Math.floor(Math.random()* 3)
    Player1.print();
    if (randRange == 0){
        Player1.gotHit();
        document.body.innerHTML +=(`<br>You got hit :c and have ${Player1.status} life points left`)
    } else if (randRange == 1){
        Player1.gotPowerUp();
        document.body.innerHTML +=("<br>You got a Power Up and have full health!")
    } else {
        Player1.addcoin();
        document.body.innerHTML +=("<br>You got a coin!");
    }
    if (Player1.status <= 0){
    Player1.gameOver()
    }

    if (Player1.gameActive == false){
    document.body.innerHTML +=(`<br>The game is over!, You, ${Player1.name} have died with ${Player1.totalCoins} coins, Good job?`)
    clearInterval(Timer);
    }
}
    const selectedName = "Mario" || document.getElementById("NameBox");
    document.getElementById("startButton").addEventListener("click", gameStartTimer);
    function gameStartTimer(){
        var Timer = setInterval(gameStart, 100);
    }
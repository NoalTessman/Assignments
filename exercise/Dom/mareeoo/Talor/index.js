const goomba = Number(document.goomba.getElementById("bounty").value);
const bomb = Number(document.getElementById("bounty1").value);
const cheep = Number(document.getElementById("bounty2").value);
console.log(goomba, bomb, cheep);
document.getElementById("submit").addEventListener("click", calculateBounty);

function calculateBounty(goomba, bomb, cheep){

    var coins = goomba + bomb + cheep;

    document.getElementById(total).innerHTML = coins;
}

console.log(calculateBounty());
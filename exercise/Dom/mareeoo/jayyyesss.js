document.getElementsByClassName('baddie').value = 0;
math = function(a,b,c){
    var price =[5,7,3];
    return +a * price[0] + +b * price[1] + +c * price[2];
};


document.mar.addEventListener("submit",function(e){
    e.preventDefault();
    var Goombas = document.mar.Goomba.value;
    var Bobombs = document.mar.Bobombs.value;
    var Cheepcheeps = document.mar.CheepCheeps.value;
    var total = math(document.mar.Goomba.value, document.mar.Bobombs.value, document.mar.CheepCheeps.value);
    document.getElementById('total').innerHTML = total;
});
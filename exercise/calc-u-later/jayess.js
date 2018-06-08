var functions = ["+", "-", "/", "*"];
var currentFunction = 0;
console.log(document.getElementById("input2").value);
var changeFunct = function(num){
    currentFunction = num;
    document.getElementById("currentFunction").innerHTML = functions[currentFunction];
};
window.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        var a = document.getElementById("input1").value;
        switch(currentFunction){
            case 0:
            document.getElementById("result").innerHTML = +document.getElementById("input1").value + +document.getElementById("input2").value;;
            break;
            case 1:
            document.getElementById("result").innerHTML = document.getElementById("input1").value - document.getElementById("input2").value;;
            break;
            case 2:
            document.getElementById("result").innerHTML = document.getElementById("input1").value / document.getElementById("input2").value;;
            break;
            case 3:
            document.getElementById("result").innerHTML = document.getElementById("input1").value * document.getElementById("input2").value;;
        }
    }
})
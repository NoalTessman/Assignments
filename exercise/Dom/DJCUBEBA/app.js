var body = document.body;
var cuBe = document.getElementById('cube');

cuBe.addEventListener("mouseover",function(){
    cuBe.style.backgroundColor = "blue";
});
cuBe.addEventListener("mousedown",function(){
    cuBe.style.backgroundColor = "red";
});
cuBe.addEventListener("mouseup",function(){
    cuBe.style.backgroundColor = "yellow";
});
cuBe.addEventListener("dblclick",function(){
    cuBe.style.backgroundColor = "green";
});
window.addEventListener("scroll",function(){
    cuBe.style.backgroundColor = "orange";
});


test = window.addEventListener("keydown");
switch(test){
    case 66:
    cuBe.style.backgroundColor = "blue";
    break;
    case 82:
    cuBe.style.backgroundColor = "Red";
    break;
    case 89:
    cuBe.style.backgroundColor = "Yellow";
    break;
    case 71:
    cuBe.style.backgroundColor = "Green";
    break;
    case 79:
    cuBe.style.backgroundColor = "Orange";
    break;
}
// var coob = function(){
//     cuBe.style.backgroundColor = "blue";
// };
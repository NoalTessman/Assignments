var header = document.createElement("header");
var body = document.querySelector("body");
var title = document.createElement("h1");
title.innerText = "This website bruh";

header.appendChild(title);
header.style.textAlign = "center";
body.appendChild(header);
header.style.color = "red";
header.style.margin = "100px";
var button = document.createElement("button");
button.innerText = "press me yo";
var x= 0;

window.addEventListener("keyup",function(event){
    console.log(event);
    x++;
    if(x % 2 == 0){
        header.style.color = "red";
        body.style.backgroundColor = "blue";
    }else{
        body.style.backgroundColor = "red";
        header.style.color = "blue";
    }
})
body.appendChild(button);
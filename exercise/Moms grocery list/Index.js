var add = document.querySelector("button");
var List = document.querySelector("section");

add.addEventListener("click", function(){
    var parent = document.createElement("div");
    var p = document.createElement('p');
    p.innerHTML = document.getElementById("newItem").value;
    var button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", function(){
    List.removeChild(parent);
    });
    parent.appendChild(p);
    parent.appendChild(button);
    List.appendChild(parent);
});
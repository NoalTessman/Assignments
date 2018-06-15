var getBtn = document.getElementById("get");

getBtn.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 1) {
            console.log("...Loading");
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = xhr.responseText;
            var jsData = JSON.parse(jsonData);
            pokemon = jsData.objects[0].pokemon;

            pokemon.forEach(function(pokemonObj){
                var li = document.createElement("li");
                li.innerHTML = pokemonObj.name;
                document.getElementById("pokemonNames").appendChild(li);
            });



        }
    }
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    xhr.send();
})
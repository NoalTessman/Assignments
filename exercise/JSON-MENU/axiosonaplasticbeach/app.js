// Looke = axios.get('https://swapi.co/api/people/1').then(function(response){
//     console.log(response.data);
// }).catch(function(err){
//     console.log(err);
// })
var section = document.querySelector('section');
url = ('https://api.vschool.io/noal/todo/')
refresh = function () {
    axios.get(url)
        .then(function (response) {
            section.innerHTML = "";
            var todos = response.data;
            todos.forEach(function (todo) {
                var wrapper = document.createElement("div");
                var h3 = document.createElement("h3");
                h3.innerHTML = todo.title;
                var descP = document.createElement("p");
                descP.innerHTML = todo.description;
                var label = document.createElement("p");
                var input = "";
                if (todo.completed === true) {
                    input = "Yes"
                } else {
                    input = "No"
                };
                label.innerHTML = "Completed?: " + input;
                wrapper.appendChild(h3);
                wrapper.appendChild(descP);
                wrapper.appendChild(label);
                section.appendChild(wrapper);
            })
        })
        .catch(function (err) {
            console.log(err);
        })
}
document.getElementById('createItem').addEventListener('click', function () {
    section.innerHTML = "<form> Name =<input id='createdName' required><br></input> Description = <input id='createdDesc' required></input><br>Price =<input id=createdPrice type = 'number' required></input><br>Completed?<input id='createdCompleted' type = 'checkbox'></input><button id='createdSumbit'required>Submit new item</button></form>";
    document.getElementById('createdSumbit').addEventListener('click', function (e) {
        e.preventDefault();
        newItem = {
            "title": document.getElementById('createdName').value,
            "description": document.getElementById('createdDesc').value,
            "price": +document.getElementById('createdPrice').value,
            "completed": document.getElementById('createdCompleted').value
        }
        console.log(newItem);
        axios.post(url, newItem)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
        refresh();
    });
});

window.addEventListener("", refresh())

// function editTodoById(id, EditedToDo){
//     axios.put(url + id, EditedToDo)
//     .then(function(response){
//         console.log(response.data);
//     })
//     .catch(function(error){
//         console.log(err);
//     })}

// function assignResponse(response){
//     console.log(response.data)
// }
//     axios.get('https://api.vschool.io/noal/todo');


// getTodobyId("noal");
var toggled = false;
var test = document.getElementById("test");
test.style.display = toggled ? "initial" : "none";
var toggler = document.getElementById("toggle");
toggler.addEventListener("click", function () {
    toggled = !toggled;
    test.style.display = toggled ? "initial" : "none";
})
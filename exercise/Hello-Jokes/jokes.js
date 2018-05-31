var jokes =[
    "What's the difference between a dirty bus station and a lobster with boobs? One's a crusty bus station and the other is a busty crustacean.",
    "Why did the lobster fall into the well, because he didn't see that well. ",
    "I have no more jokes to offer so IO don't really know what to write here",
    "Bad pick up lines when executed at all really",
]
function jokeloader(){
    document.body.innerHTML += "<h1> List of jokes" + "<br>" + "<ol>";
    for(var i = 0; i < jokes.length; i++){
        document.body.innerHTML += "<li>" + jokes[i] + "<br>";

    }
    document.body.innerHTML += "</ol>";
}
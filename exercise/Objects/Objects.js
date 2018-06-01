var Jimmy ={
    name:'jim',
    age:30,
    habbies:['running','hiking'],
    speak: function(){
        console.log("hello");
        this.age++
    }
}
Jimmy.speak();
console.log(Jimmy);

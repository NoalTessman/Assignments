// for(var x=0; x<10; x++){
//     console.log(x)
// }
// for(var x=10; x>0; x--){
//     console.log(x)
// }
// var arr= [
//     "banana", "orange", "apple", "kiwi"
// ]
// for(var y=0; y<=3; y++){
//     console.log(arr[y])
// }
// arrg= [];
// for(var x=0; x<10; x++){
// arrg[x]=x;
//  }
//  console.log(arrg);
// var peopleArray = [  
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]
// for(x=0; x<peopleArray.length ;x++){
//    console.log(peopleArray[x].name)
// }
// var names = [];
// var occupations = [];
// for(x=0; x<peopleArray.length ;x++){
//     names[x]= (peopleArray[x].name)
//  }
//  for(x=0; x<peopleArray.length ;x++){
//     occupations[x]= (peopleArray[x].occupation)

//  }
// console.log(occupations)
array1 = [];
for (y = 0; y < 3; y++) {
    array1[y]= [];
    for (x = 0; x < 3; x++) {
        array1[y][x]= 0;
    }
}
array1 = [];
for (y = 0; y < 3; y++) {
    array1[y]= [];
    for (x = 0; x < 3; x++) {
        array1[y][x]= y;
    }
}
array1 = [];
for (y = 0; y < 3; y++) {
    array1[y]= [];
    for (x = 0; x < 3; x++) {
        array1[y][x]= "x";
    }
}
console.log( array1)
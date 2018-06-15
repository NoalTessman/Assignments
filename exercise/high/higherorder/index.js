const companies =[
    {name : "company one", category: "Tech", start: 1981, end:2018},
    {name : "company two", category: "Finance", start: 1991, end:2014},
    {name : "company three", category: "Tech", start: 1912, end:2013},
    {name : "company Four", category: "Art", start: 1983, end:2012},
    {name : "company Five", category: "Finance", start: 1967, end:2020},
    {name : "company Six", category: "Retail", start: 1947, end:1950},
    {name : "company Seven", category: "Pets", start: 1999, end:2010},
]
const ages = [33,25,25,24,25,26,26,27,2,5,23,4,6,23,6,7,86,58,8,32];
// for(let i= 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

//forEach
// companies.forEach(function(company){
//     console.log(company.name);
// });

//filter

// let canDrink = [];
// for(let i = 0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >=21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(company){
//     if(company.category === "Retail"){
//         return true;
//     }
// });
// const retailCompanies = companies.filter(company => company.category ==="Retail");

// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(arg => arg.start >1979 && arg.start<1990)
// console.log(eightiesCompanies);

// const successstories = companies.filter(company => company.end - company.start > 10)
// console.log(successstories);

////////////////MAP////////////////////////
// const test = companies.map(function(arg){
//     return arg.name + (arg.start - arg.end);
// });
// console.log(test);

// const test = companies.map(arg => arg.name);
// console.log(test);

// const agesSquared = ages
//     .map(arg => Math.sqrt(arg))
//     .map(arg => arg * 2);
// console.log(agesSquared);

//sort//

// const sortedCompanies = companies.sort(function(c1,c2){
// if (c1.start>c2.start){
//     return 1;
//     }else{
//     return -1;
// }
// });
// console.log(sortedCompanies)

// const sortedCompanies = companies.sort(((a,b) => (a.start>b.start) ? 1: -1));
// console.log(sortedCompanies)
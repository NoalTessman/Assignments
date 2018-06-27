// const printInfo = (fName = "jane",lName = "Austin", age = 42) => {
//     console.log(`Hi ${fName} ${lName} how does it feel to be ${age}`)
// }
// printInfo("Ed","Sheeran",42);
// printInfo()

const product = (...args) => args.reduce((acc, number) => acc * number,1)
console.log(product(4,2,4));
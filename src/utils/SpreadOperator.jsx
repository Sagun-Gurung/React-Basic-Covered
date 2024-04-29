// let fun1 = () => {
//     console.log(a)
// }

// fun1()


// destructuring
let [name, ...other] = ["momo", "chowmein", 23232, true, "asdbjsa"]

console.log(name)
console.log(other)



let { school, ...otherInfo } = { location: "Sifal", school: "Deerwalk", college: "Texas" }
console.log(school)
console.log(otherInfo)
//1
const NAME_ARR=["sname1","name2","name3","name4","name5"]
NAME_ARR.forEach((anyName)=>{console.log(anyName)})
//2
const AGE_ARR=[15, 32, 47, 58, 69, 74, 83, 91, 5, 10];
AGE_ARR.forEach((anyAge)=>{if(anyAge>25){console.log(anyAge)}})
//3
const LNAME_ARR=["Smith", "Johnson", "Brown", "Davis", "Jones", "Wilson"];
console.log(LNAME_ARR)

let lNUpperCaseArr=[]
LNAME_ARR.forEach((anyLastName)=>{lNUpperCaseArr.push(anyLastName.toUpperCase())})
console.log(lNUpperCaseArr)
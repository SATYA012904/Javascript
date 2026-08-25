// const regularUser={
//     email: "sat@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"satya",
//             lastname:"Sahu"
//         }
//     }
// }


// console.log(regularUser.fullname.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj3)
console.log(obj4)


const {2:g} =obj1;
console.log(2);
// let sum = function( a){
//     return function( b){

//         if(b!==undefined){
//             return sum(a+b);
//         }
//         return a;
//     }

// }
// console.log(sum(1)(2)(3)());


// let sum = (a)=>{
//   return  (b)=>{
//         return b?sum(a+ b):a;
// }
// }
// console.log(sum(1)(2)(3)());


let sum = a=>b=> b?sum(a+b):a;
console.log(sum(1)(2)(3)());




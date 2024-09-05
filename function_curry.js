let multiply = function(x,y){
    console.log(x*y);
}

//we make copy of multiply method and we create more method out of it is fun CURRY
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);



//function closure
// let multiply=function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }


// let multiplyByTwo = multiply(2);
// multiplyByTwo(5);


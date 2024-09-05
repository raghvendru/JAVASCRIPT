
// let object ={
//     fname :"raghu",
//     place:"bgk",
//     getIntro:function(){
//         console.log(this.fname+ "from "+this.place);
//     }
// }

// let object2={
//     fname:"ramesh"
// }


// //now obj2 pointing obj,but if u do object2.name==>it finds in object2 ,so output is ramesh,if obj2.place its not in ob2 so it prints object place
// object2.__proto__=object;



Function.prototype.mybind=function(){
    console.log("raghu");
}


//if u do fun.mybind its points to "raghu"
function fun(){

}

function fun2(){

}
//if nothing passed it showes c--p--gp(bubbling)
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("gp clicked");
// });

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("p clicked");
// });

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("c clicked");
// });


//bubbling
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("gp clicked");
// },false);

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("p clicked");
// },false);

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("c clicked");
// },false);

//capturing
document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("gp clicked");
},true);

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("p clicked");
},true);

document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("c clicked");
},true);
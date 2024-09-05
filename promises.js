//const cart=["shoes","pants","kurta"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// }); //orderId


// const promise = createOrder(cart);

// //{data:undefined}
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

const GITHUB_API ="https://api.github.com/users/akshaymarch7" ;
const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data){
    console.log(data);
});

//promise chaining to overcome callback hell
// console.log(user);

// user.then(function(orderId){
//     return proceedPayment(orderId);
// })
// .then(function(paymentInfo){
//     return  showOrderSummary(paymentInfo);
// });


const cart=["shoes","pants","kurta"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
    return orderId;

})
.then(function(orderId){
   return proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
});

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //create orde
        //validatecart
        //orderId
        if(!validateCart(cart)){
           const err = new Error("cart is not valid"); 
            reject(err);


        }
        //logic for create order
        const orderId = "123";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },50000);
            
            //resolve(orderId);
        }

    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve ("payment successfull");

    })

}

function validateCart(cart){
    return true;
}



//types of promises
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 success"),3000);
})

const p2 = new Promise((resolve,reject)=>{
  //  setTimeout(()=>resolve("p2 success"),1000);
    setTimeout(()=>reject("p2 fail"),1000);

})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 success"),2000);
})


Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});


Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});

Promise.race([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});

Promise.any([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});






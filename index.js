console.log("raghu");

setTimeout(function ab(){
    console.log("callback");
},5000);

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate<startDate+10000){
endDate=new Date().getTime();
}

console.log("while expires");
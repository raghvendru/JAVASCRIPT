let name={
    fname:"raghu",
    lname:"uppar"

}

let printName=function(hometown,state,country){
    console.log(this.fname+ "" +this.lname+hometown +state + country);
}

let printMyName = printName.bind(name,"bgk");
printMyName("karnataka","india");

Function.prototype.mybind=function(...args){
    let obj = this;
    params=args.slice(1); //to get place name
return function(...args2){
    obj.apply(args[0],[...params,...args2]);
}
}

let printMyName2 = printName.mybind(name,"bgk");
printMyName2("karnataka","india");
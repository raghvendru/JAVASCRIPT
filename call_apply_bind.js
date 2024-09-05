let name1 = {
    fname:"raghu",
    lname:"uppar",
}

   let printFullName=function(hometown,state){
        console.log(this.fname+" "+this.lname + "from"+hometown+","+state);
    }

printFullName.call(name1,"bilgi","karnataka");

let name2 ={
    fname:"sachin",
    lname:"tendul",

}

//call
printFullName.call(name2,"mumbai","maharastra");

//in call we pass remaining paramneter individually but in apply it pass as second parameter as array list
printFullName.apply(name2,["mumbai","maharastra"]);

//bind[invoke copy of method and use it later but call is invoke directly]
let printMyName = printFullName.bind(name2,"mumbsi","msharastra");
// it invoke only function like "ƒ (hometown,state){
//     console.log(this.fname+" "+this.lname + "from"+hometown+","+state);
// }"
console.log(printMyName);

//to invoke value
printMyName();

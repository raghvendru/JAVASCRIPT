const arr = [5  ,1 ,3 ,2 ,6];


//Double-[10,2,6,4,12]
function double(x){
    return x*2;
}

//triple-[15,3,9,6,18]
function trip(x){
    return x*3;
}

//binary-["101","1",11,"10",110]
function binary(x){
    return x.toString(2);
}


const output = arr.map(double);
console.log(output);

const outpu=arr.map(trip);
console.log(outpu);

const outu=arr.map(binary);
console.log(outu);


//filter odd values
function isOdd(x){
    return x%2;
}

const ans  = arr.filter(isOdd);
console.log(ans);


//reduce --sum or max

//usual method
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum =sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));


//reduce
const ans1 = arr.reduce(function (acc,curr){
    acc=acc+curr;
    return acc;
},0);

console.log(ans1);



//max
//usual
function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//by reduce
const max1= arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;

},0);
console.log(max1);




const users=[
    {fname:"r1",lname:"u1",age:1},
    {fname:"r2",lname:"u2",age:2},
    {fname:"r3",lname:"u3",age:3},
];

//list of full name ex:["r1 u1","r2 u2",....]

const fn = users.map(x => x.fname+" "+x.lname);

console.log(fn);

//people with same age[reduce because need one object]
const ag = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];

    }
    else{
        acc[curr.age]=1;
    }
    return acc;

},{});
console.log(ag);


//find first name of people age <3
const age1 = users.filter((x) => x.age<3).map((x)=> x.fname);
console.log(age1);




// Things learned:
// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
// 5. Homework:
// const output = user.reduce(function(acc, curr){
//     if (curr.age < 30){
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, [ ])

// console.log(output);


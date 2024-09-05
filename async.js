
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value!!!")

    },100000);
});

//always return a promises
async function getData(){
  return p;

}

const dataPromise =getData();
dataPromise.then((res)=>console.log(res));

async function handlePromise(){
    const val=await p;
    console.log(val);
}
handlePromise;

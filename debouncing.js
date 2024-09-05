const getData = ()=>{
    let counter=0;
    //call api to gets data
    console.log("fetching data",counter++);
}
const debounce = function(fn,d){
    let timer;
    return function(){
        let context = this,
        args=arguments;
        clearTimeout(timer);
         timer= setTimeout(()=>{
            getData.apply(context,arguments);
        },d);
    }
}

const betterFunction = debounce(getData,300);
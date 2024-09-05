const rad = [3,1,2,4];

const calculateArea = function (rad){
    const output = [];
    for(let i=0;i<rad.length;i++){
        output.push(Math.PI*rad[i]*rad[i]);
    }
    return output;
};

console.log(calculateArea(rad));


//method 2
const area = function (rad){
    return Math.PI*rad*rad;
}


const circumf = function (rad){
    return 2*Math.PI*rad;
}


const calculate = function (rad,logic){
    const output=[];
    for(let i = 0;i<rad.length;i++){
        output.push(logic(rad[i]));
    }
    return output;
};


rad.map(area);


console.log(calculate(rad,area));
console.log(calculate(rad,circumf));
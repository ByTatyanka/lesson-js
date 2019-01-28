let range = (start, end, step = 1) => {
    let result = [];

    for (let i = start; i<=end; i += step){
        result.push(i)
    }
    console.log(result);
    return result
};
let sum = (arrSum) => {
    return arrSum.reduce((sum, current) => {
        return sum + current
    });
};


let arr = range(5, 2,-1);
console. log(sum (arr));
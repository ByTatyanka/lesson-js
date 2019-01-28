let number = (val)=>{
    if ((val < 0 && val >= 1000) || (typeof (val) === "string")) return 'некорретое значение';
    let i = String(val);
    return {
        'sot': i[0],
        'des': i[1],
        'ed': i[2]
    }
};
console.log(number('swg'));
console.log(number('123123'));
console.log(number('123'));
console.log(number(123));
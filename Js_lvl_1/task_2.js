for(let i = 0; i<=100; i++) {
    if ((i%3 === 0) && (i%5 !== 0)) {
        console.log('Fizz ', i);
    } else if  ( (i%3!== 0) && (i%5 === 0) ) {
        console.log('Bizz ', i)
    } else if ( (i%3 === 0) && (i%5 === 0) ){
        console.log('FizzBizz ', i)
    } else {
        console.log(i)
    }
}

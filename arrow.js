// function doubleIt(num) {
//     return num*2;
// }

// const doubleIt=function myFun(num) {
//     return num*2;
// }

const doubleIt = num =>num*2;
const result1 = doubleIt(80);

const add = (num1,num2) => num1+num2;
const result2 = add(15,13);

const doMath = (x,y) =>{
    const sum =x+y;
    const sub =x-y;
    const result = sum*sub;
    return result;
}
const result3 = doMath(7,5);
console.log(result1);
console.log(result2);
console.log(result3);
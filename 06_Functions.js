// no access modifier no method overloading
function add(a, b) {
  console.log("total is: " + (a + b));
}
add(10, 20);

//return type fn
function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 20));//200
console.log(multiply(10, 20, 222, 444));//200  //ignores after second parameter ~~!!!!!!!!!!!!!!!!



/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * functions are !!!first class citizens of javascript!!!
 */
let divide = function (a,b) {
    return a/b;
}

console.log(divide(6,3));

let anyFunction = divide;
console.log(anyFunction(30,5));

//pass a function as a argument to other functions

function sum(a,b) {
  return a+b;
}
console.log(sum);

function avarage(a,b,fn) {
  return fn(a,b)/2;
}

let avrgRes = avarage(10,20,sum);
console.log(avrgRes);

avrgRes = avarage(10,20,multiply);
console.log(avrgRes);


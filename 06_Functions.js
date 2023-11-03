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







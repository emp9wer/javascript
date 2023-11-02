// loops same as in java for loop , while, do while

for(let i = 0; i<5; i++){
    console.log(i);
}
//console.log(i); //error //              !!!!let -> local scope - var -> global scope!!!!

console.log("var-------old type of declaring variables before ES6 -> use let!!!  do not use var!!!------problem with loop");
for(var j = 0; j<5; j++){
    console.log(j);
}
console.log(j); //no error - variable //global and function scope



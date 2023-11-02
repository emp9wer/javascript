console.log("loops same as in java for loop , while, do while---------------------");

for(let i = 0; i<3; i++){
    console.log(i);
}
//console.log(i); //error //              !!!!let -> local scope - var -> global scope!!!!

console.log("var-------old type of declaring variables before ES6 -> use let!!!  do not use var!!!------problem with loop");
for(var j = 0; j<3; j++){
    console.log(j);
}
console.log(j); //no error - variable //global and function scope


console.log("while loops----------");
let n1 = 0;
while (n1<3) {
    console.log(n1++);
}

console.log("do while loops----------");

let n2 = 0;
do {
    console.log(n2);
    n2++
} while (n2<3);


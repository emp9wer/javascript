/**
 * there is no Collection in js -> only array and map
 * not fixed size
 * 2 important brackets [] -> array  /  {} -> object
 */

let scores = new Array(); // creates empty array
console.log(scores);//[]

let emptyArray = [];// creates empty array
console.log(emptyArray);//[]

let nums = new Array(10); // creates empty array with size.
console.log(nums);//[ <10 empty items> ]

let myNums = new Array(1,2,3,4,5,8);
console.log(myNums);//[ 1, 2, 3, 4, 5, 8 ]

let myNums1 = [1,2,3,4,5,8];
console.log(myNums1);//[ 1, 2, 3, 4, 5, 8 ]


let colors1 = ['red','green','blue'];
console.log(colors1);//[ 'red', 'green', 'blue' ]
console.log(colors1[1]);//green

console.log("add element to array!---------------");

let colors = new Array('red', 'green', 'blue');

colors.push("white") // push -> adds to the end!                 //push
console.log(colors);//[ 'red', 'green', 'blue', 'white' ]

colors.unshift("orange")// unshift -> adds element to beginning  // unshift
console.log(colors);//[ 'orange', 'red', 'green', 'blue', 'white' ]


console.log("----------------pop -> gets and removes");
console.log(colors);//[ 'orange', 'red', 'green', 'blue', 'white' ]
console.log(colors.pop()); //white 
console.log(colors);//[ 'orange', 'red', 'green', 'blue' ]

console.log("---------------size of array");
console.log(colors.length); //4

for(let i =0; i<colors.length; i++){
    console.log(colors[i]); // orange // red // green // blue
}

console.log('--------loop with values of array  //forof shortcut');
for (const iterator of colors) {
    console.log(iterator);
}

console.log('--------//foreach (commonly used!)');
//foreach (commonly used!)
colors.forEach(element => {
    console.log(element);
});

console.log("------------we can add multiple type of data to array (soup of data)"); 
//you can put map , objects , functions inside array

let soupOfData =[5,"Oscar",true,undefined]

soupOfData.forEach(element => {
    console.log(element+" "+typeof element);
});




















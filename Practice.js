console.log("----------------------------------");
console.log("freq of chars EX: aaabbcdddd -> a3b2c1d4");

function freqOfChars(word) {
  let res = "";
  let counter;
  for (let i = 0; i < word.length; i++) {
    counter = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === word[i]) {
        counter++;
      }
    }
    if (!res.includes(word[i])) {
      res += word[i] + counter;
    }
  }
  return res;
}

let word = "aaabbcdddd";
console.log(`word = ${word}`);
console.log(`freqOfChars -> ${freqOfChars(word)}`);



console.log("----------------------------------");
console.log("prime number");
console.log("Write a method that can check if a number is prime or not.");
console.log(
  "a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11)."
);

function primeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

num = 5;
console.log(`number = ${num}`);
console.log(`is prime -> ${primeNum(num)}`);



console.log("----------------------------------");
console.log(`Print Consecutive Numbers`);
/**
  Write a function that, given a positive integer N, prints the consecutive numbers from 1 to N, each on a separate line.
  However, any number divisible by 2, 3 or 5 should be replaced by the word Codility, Test or Coders respectively.
  If a number is divisible by more than one of the numbers: 2,3 or 5, it should be replaced by a concatenation of the respective 
  words CodilityTest and Coders in this given order.
  EX:
  Numbers divisible by both 2 and 3 should be replaced by CodilityTest and numbers 
  divisible by all three numbers, 2,3 and 5, should be replaced by CodilityTestCoders
 */

function consecutiveNums(n) {
  for (let i = 1; i <= n; i++) {
    let res = "";
    if (i % 2 === 0) {
      res += "Codility";
    }
    if (i % 3 === 0) {
      res += "Test";
    }
    if (i % 5 === 0) {
      res += "Coders";
    }
    if (res === "") {
      res = i;
    }
    console.log(res);
  }
}

//consecutiveNums(100);



console.log("----------------------------------");
console.log(`return reversed negative num`);


function reverseNegNum(num){

let numberArray = Array.from(String(num));
console.log(numberArray);
let res ='';

for(let i =numberArray.length-1; i>0; i--){
    res+=numberArray[i];
}
console.log(res*-1);
}

reverseNegNum(-123) // [ '-', '1', '2', '3' ]  // -321



console.log("----------------------------------");
console.log(`return second max number`);

function secondMax(nums){
    let temp =0;
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length-1; j++){
            if(nums[j+1]>nums[j]){
                temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    }
    console.log(nums);
    console.log(nums[1]);
}

let numbers = new Array(1,5,3,8,22,5,3,44,1);
secondMax(numbers);



console.log("----------------------------------");
console.log('freq of chars2');

function freqOfChars2(word) {
let res=''
for(let a =0; a<word.length; a++){
  let count=0
  for(let z =0; z<word.length; z++){
      
      if(word[z]==word[a]){
        count++
      }
  }
    if(!res.includes(word[a])){
      res+=word[a]+''+count
    }
}
return res
}
let a = 'aaabbddeeqqq'
console.log(freqOfChars2(a));





console.log("----------------------------");
console.log("find min");

function findMin(numbers) {
  
  let min = numbers[0]

  for(let i = 0; i < numbers.length; i++){

    if(numbers[i] < min){
      min=numbers[i]
    }

  }
return min
}


let numbers1 = new Array(1,4,63,5,2,1,-98,6,7,2,2);

console.log(findMin(numbers1));

let minimize = findMin;

let z = minimize(numbers1)
console.log(z);


console.log("----------------SECOND MAX");

function secondMax1(nums) {
  let mySet = new Set()
  let temp = 0

  for(let ea of nums){  //(1,4,63,5,2,-98,6,7,2);
      mySet.add(ea)
  }  
  for (let i = 0; i < mySet.length; i++) {
   if( mySet[i+1]>mySet[i]){
    temp=mySet[i]
    mySet[i]=mySet[i+1]
    mySet[i+1]=temp
   }
  }

  let arrrr = new Array();
 for (let e of mySet){
  arrrr.concat(e);
 }
 console.log(arrrr[1]);
return arrrr[1]

}

let arrayOfnums = new Array(1,1,2,4,6,4,7,2,7,68,25,25,25,22,22)
console.log(secondMax1(arrayOfnums))









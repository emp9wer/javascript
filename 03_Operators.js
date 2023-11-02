console.log(4+4*(-1)-8/2);

let x = 5;
x+=5;
console.log(x);

//comparison: simmilar to java with some diff

let one = 1;
let one_again = 1;
let one_string = '1';
let two_string = '2';

console.log(one == one_again);//true
console.log(one == one_string);//true == looking for value equality in js
console.log(one === one_string);//false === looking for value and data type equality
console.log(two_string === one_string);//false === looking for value and data type equality
console.log(one === one_again);//true  === looking for value and data type equality

/**
 *    The === operator in JavaScript is used to compare two values for equality.
 * It is different from the == operator in that it also checks the types of 
 * the values being compared. For example, the following code will return true:
 */



//logical operators are same only short curcuit && , ||
console.log('---------------------------------logical operators ------------------------------------');

console.log((5<2)&&(2<5));

//control flow statements if / if else / switch / break / continue   === java 

let num1 = 100;
let num2 = 10;

if(num1>num2){
    console.log('num1 bigger')
}else{
    console.log('num2 bigger');
}
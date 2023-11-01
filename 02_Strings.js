let str1 = 'Java';
let str2 = "Script"
let str3 = "awesome";
let result;

result = "the result string is: "+str1+str2+' '+str3;
console.log(result);

// diff from java: backticks for variable insertion 

result = `the result string is: ${str1}`
console.log(result);

result = `the result string is: ${str1}${str2}`
console.log(result);

result = `the result string is: ${str1}${str2}${' '+str3}`
console.log(result);

result = `the result string is: ${str1}${str2}${str3}`
console.log(result);

result = `the result string is: ${str1}${str2} ${str3}`
console.log(result);
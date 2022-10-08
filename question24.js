let str1="hello world";
let str2= "hello sky";
let str3="hello sky";
let str4="HELLO SKY";
console.log("this string comparision should be false ",str1==str2);
console.log("this string comparision should be true ",str1==str3);
console.log("this string comparision should be false ",str1==str2);
console.log("this string comparision of case sensitive should be false ",str2==str4.toLowerCase);
let a=10;
let b=50;
let arrC=[10,22,33,40];
console.log("value a",a);
console.log("value b",b);
console.log("value a equal value b",a==b);
console.log("value a not equal value b",a!==b);
console.log("value a is greater than value b",a>b);
console.log("value a is lesser than value b",a<b);
console.log("value a is greater than equal to  value b",a>=b);
console.log("value a is less than equal to  value b",a>=b);
console.log("a + b is greater than a and b - a > a",(a+b)>a &&b-a>a);
console.log("a > b or b > a",a>b || b>a);
console.log("10 is in the array",arrC.find((it)=> it ===10))
console.log("110 is not in the array",arrC.find((it)=> it ===110))
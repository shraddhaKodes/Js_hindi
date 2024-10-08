console.log("shraddha")
//variable declaration
const a = 100;
let b = 10;
b =  4;
var c = 20;
var c= 90;
console.log(a);
console.log(b);
console.log(c);

//conversion.........................
let A = "300";
console.log(typeof A);
A = Number(A);
console.log(typeof A);

let B = "300a";
console.log(typeof B);
B = Number(B);
console.log(typeof B);
console.log(B)
// if number is 1 then  type cast in the boolean is to true if 0 is to false . if string is to "" it is false and if "jjji" is true 

//operations..................
console.log(2**6);
console.log("1"+"2");
console.log(1 + "2");
console.log(1 + 2 + "2");
console.log("1" + 2 + 2);
console.log(+true);

let num1,num2,num3
num1 = num2 = num3 = 2;
console.log(++num1);
console.log(num2++);

//////////////////////////////////////stack(primitive) and heap(non - primitive);
let n1 = 100;
let n2 = n1;
n2 = 300;
console.log(n1);
console.log(n2);

let obj1 = {
    name : "maya",
    age : 30 
}
let obj2 = obj1 ;
obj2.name = "manya";
console.log(obj1.name);
console.log(obj2.name);

//all about string
str = " hello myself Shraddha";
console.log(str);
console.log(str.substring(7,13));
console.log(str.indexOf("myself"));
console.log(str.trim());
console.log(str.replace("Shraddha","sara"));
str = new String("hi always try to be the best version of yourself");
str1 = "he be the besyt version of yourself";
console.log(str);
console.log(str1.split())
console.log(str1.split(" "))
//some special charater - escape character"backward slash"
str2 = "hi  try your 100% with your all effort because \"success\" is not  just piece of cake if it is like that then you never realised that what is the happiness of the truth and hardwork those people think it is cheaper but for some it is the ideal and necessary";
console.log(str2);
str3 = "hi be happy yaara ....because zindagi ni/ milegi /dubara don't be bechara enjoy your journey"
console.log(str3)

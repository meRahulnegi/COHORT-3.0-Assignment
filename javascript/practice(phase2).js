                                                       //PHASE 2

//Q1->FUNCTIONS BASICS

//Begginer Level
//Q1->Create a function named greet that prints "Hello World".
/*function greet(){
    console.log("Hello World");
} 

greet();*/

//Q2->Create a function add(a, b) that returns the sum.
/*function add(a,b){
    return a+b;
}

console.log(add(3,4));*/

//Q3->Write a function to calculate the square of a number.
/*function sqr(a){
    return a*a;
}

console.log(sqr(4));*/

//Q4->Create a function that checks whether a number is even or odd.
/*function check(num){
    if(num%2==0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(check(4));*/

//Q5->Write a function that converts Celsius to Fahrenheit.
/*function converts(c){
    var f= 9*(c/5)+32;
    return f;
}

var celsius=Number(prompt("Enter the value in celsius:"));
console.log(`${celsius}°C: ${converts(celsius)}°F`);*/

//Q6->Create a function with default parameter "Guest".
/*function greet(name="Guest"){
    console.log("Hello,"+ name+"!");
}

greet();
greet("Rahul");*/

//Q7->Write a function that returns the greater of two numbers.
/*function big(a,b){
   if(a>b){
    return a+" is greater than "+b;
   }else{
    return b+" is greater than "+a;
   }
}

console.log(big(2,4));*/

//Q8->Create a function to calculate area of rectangle.
/*function area(l,b){
    return l*b;
}

console.log("Area of rectangle is: ",area(50,60));*/

//Q9->Write a function that returns "Adult" if age ≥ 18 else "Minor".
/*function Adult(a){
    if(a>=18){
        return "Adult";
    }else{
        return "Minor";
    }
}

console.log(Adult(17));*/

//Q10->Create a function to reverse a string.
/*function reversestr(a){
   return a.split("").reverse().join("");
}

console.log(reversestr("hello"));*/


                                                       //INTERMEDIATE LEVEL

//Q1->Write a function expression for multiplication.
/*function multy(a,b){
    return a*b;
}              

var num1= Number(prompt("Enter the first number:"));
var num2= Number(prompt("Enter the second number:"));
console.log(multy(num1,num2));*/

//Q2->Convert a normal function into an arrow function.

//NORMAL FUNCTION
/*function add(a,b){
    return a+b;
}

//IN ARROW FUNCTION
var  add = (a,b) =>{
    return a+b;
}

console.log(add(2,3));*/

//Q3->Create a function that accepts unlimited numbers and returns their sum using rest operator.
/*var sumNumbers = (...numbers)=>{
    return numbers.reduce((acc,curr)=>acc+curr,0);
}

console.log(sumNumbers(20,30,40));*/

//Q4->Write a function that counts vowels in a string.
/*function countVowels(str){
    str= str.toLowerCase();
    var vowels ="aeiou";

    return str.split("").filter(char => vowels.includes(char)).length; 
}

console.log(countVowels("Rahul Negi"));*/

//Q5-> Create a function that checks if a string is palindrome.
/*var checkPalindrome = (str) =>{
    str = str.toLowerCase().replace(/[^a-z0-9]/g,"")

    var rev = str.split().reverse().join();

    return str===rev;
}

var word=prompt("Enter the string to check palindrome:");
console.log(checkPalindrome(word));*/

//Q6->Write a callback function example using setTimeout.
/*function greetUser(callback){
    console.log("Processing...");

    setTimeout(() => {
        callback();
    },2000);
}

greetUser(()=>{
    console.log("Hello Rahul! callback function excuted after 2seconds.");
});*/

//Q7->Create a higher-order function that executes another function twice.
/*function highOrder(fxn){
    fxn();
    fxn();
}

function twice(){
    console.log("hello!How are you?");
}

highOrder(twice);*/


//Q8 ->Write a function that returns another function.
/*function outerFunction(){
  function innerFunction(){
    console.log("Hello Rahul! I'm the inner function");
  }

  return innerFunction;
}

outerFunction()();*/

//Q9-> Create a pure function for subtraction.
/*function sub(a,b){
    return a-b;
}

console.log(sub(2,3));*/

//Q10->Create an impure function using global variable modification.
/*var counter=0;

function increaseCounter(){
    counter++;
    return counter;
}

console.log(increaseCounter());
console.log(increaseCounter());*/


                                                     ///ADVANCED FUNCTIONS

//Q1->Write a recursive function for factorial.
/* function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n* factorial(n-1);
    }
 }

 console.log(factorial(5));*/


 //Q2->Write recursive Fibonacci function.
 /*function fibonacci(n){
 if(n==0) return 0;
    if(n==1)return 1;

    else{
      return fibonacci(n-1)+fibonacci(n-2);
    }
 }

 console.log(fibonacci(6));*/


//Q3->Create a function that finds power using recursion.
/*function power(base,exponent){
    if(exponent==0) return 1;

    else{
       return base*power(base,exponent-1);
    }
}


console.log(power(2,4));*/

//Q4->Create an IIFE that prints "Executed".
/*(function(){
    console.log("Executed");
})();*/

//Q5->Write a function that memoizes factorial calculation.
 /*function memoizedfactorial(){
    const cache={};

    function factorial(n){
        if(n==0 || n==1) return 1;
        if (cache[n]) return cache[n];  //will check whether the result is in cache.

        else{
            cache[n]=n*factorial(n-1);
            return cache[n];
        }
    }

    return factorial;
 }

 const factorial=memoizedfactorial();
 console.log(factorial(3));
 console.log(factorial(4));
 console.log(factorial(3));*/

//6->Create a closure counter function.
/*function createcounter(){
    let count=0;

    return function(){
        count++;
        return count;
    };
}

const counter=createcounter();
console.log(counter());
console.log(counter());
console.log(counter());*/

//7->Write a function currying example for addition.
/*function add(a){
    return function(b){
        return a+b;
    };
}

console.log(add(3)(5));*/

//8->Create debounce function logic.
/*function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    };
}

function logMessage(msg){
    console.log("Executed..",msg);
}


const debouncedLog =debounce(logMessage,1000);

debouncedLog("Hello");
debouncedLog("World");*/

//9->Create throttle function logic.
/*function throttle(fn, delay) {
  let lastCall = 0; // keeps track of last execution time

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Example usage
function logMessage(msg) {
  console.log("Executed:", msg);
}

const throttledLog = throttle(logMessage, 2000);

throttledLog("Hello"); // Executes immediately
throttledLog("World");*/

//10->Write a function that executes only once.
/*function once(fn) {
  let executed = false; // flag to track execution

  return function(...args) {
    if (!executed) {
      executed = true;
      return fn.apply(this, args); // run only first time
    }
    // After first call, do nothing (or return undefined)
  };
}

// Example usage
function greet(name) {
  console.log("Hello,", name);
}

const greetOnce = once(greet);

greetOnce("Rahul"); // Prints: Hello, Rahul
greetOnce("Negi");  // Does nothing
greetOnce("World");*/

//11->Create custom implementation of map
/*function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array)); 
    // pass element, index, and full array (like native map)
  }
  return result;
}

// Example usage
const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, function(num) {
  return num * 2;
});

console.log(doubled); */

//12->Create custom implementation of filter.
/*function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]); // include only if callback returns true
    }
  }
  return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = customFilter(numbers, function(num) {
  return num % 2 === 0; // keep only even numbers
});

console.log(evenNumbers);*/

//13->Create custom implementation of reduce.
/*function customReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

// Example usage
const numbers = [1, 2, 3, 4];

const sum = customReduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // 10

const product = customReduce(numbers, (acc, curr) => acc * curr, 1);
console.log(product);*/

//14->Create custom forEach.
/* function customForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array); 
    // pass element, index, and full array (like native forEach)
  }
}

// Example usage
const numbers = [1, 2, 3, 4];

customForEach(numbers, function(num, index) {
  console.log(`Index ${index}: Value ${num}`);
});*/


//15->Explain output:
/*function test() {
    return;
    console.log("Hello");
}
console.log(test());*/


                                               //Part-3  ARRAYS//
//beginner

//Q1->Create an array of 5 fruits.
/*let fruits=["apple","bananna","kiwi","orange","grapes"];
console.log(fruits);*/

//Q2->Print first and last element of array.
//console.log(`first element-> ${fruits[0]} and second element->${fruits[fruits.length-1]}`);

//Q3->Find length of array.
//console.log(fruits.length);

//Q4->Add element at end using push.
/*fruits.push("watermelon");
console.log(fruits);*/

//Q5->Remove last element using pop.
/*fruits.pop();
console.log(fruits);*/

//Q6->Add element at beginning using unshift.
/*fruits.unshift("guava");
console.log("fruits");*/

//Q7->Remove first element using shift.
/*fruits.shift();
console.log(fruits);*/

//Q8->Reverse an array.
/*fruits.reverse();
console.log(fruits);*/

//Q9->Sort numbers ascending.
/*let array= [3,4,1,2,5]
array.sort((a,b)=> a-b);
console.log(array);*/

//Q11->Sort numbers descending.
/*let array=[3,1,2,9,10]
array.sort((a,b)=>b-a);
console.log(array);*/

                                            //INTERMEDIATE//
//Q1->Use splice to remove elements.
/*let arr=[1,2,3,4,5]
arr.splice(1,2);
console.log(arr);*/

//Q2->Use splice to insert elements.
/*let arr=[1,2,4,5]
arr.splice(2,0,3);
console.log(arr);*/

//Q3->Use slice to copy array.
/*let names=["Rahul","Yash","ankit",'Ayush'];
slicedPart=names.slice(0,3);
console.log(slicedPart);*/

//Q4->Find index of an element.
/*let arr=[2,4,5,6];
index= arr.indexOf(5);
console.log(index);*/

//Q5->Check if array contains a value.
/*let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Guava"));*/

//Q6->Join array elements with.
/*let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let joinedFruits = fruits.join(".");
console.log(joinedFruits);*/

//Q7->Merge two arrays using spread operator.
/*let names=["Rahul","Yash","Ankit"];
let addNames=["Ayush","Sunny"];
let allNames=[...names,...addNames];
console.log(allNames);*/

//Q8->Copy array using spread operator.
/*const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// Copy using spread operator
const copiedFruits = [...fruits];
console.log(copiedFruits);*/

//Q9->Find maximum value using Math.max.
/*let arr=[1,3,4,10,15,2];
let maxValue =Math.max(...arr);
console.log(maxValue);*/

//Q10->Swap two variables using destructuring.
/*let a = 10;
let b = 20;
[a, b] = [b, a]; 
console.log("a:", a); 
console.log("b:", b);*/ 

                                              ////Array iteration methods
//Q1->Use forEach to print all numbers doubled.c
/*let arr=[1,2,3,4,5];
let doubled=arr.forEach(function(num){
    console.log(num*2);
})*/

//Q2->Use map to square all numbers.
/*let arr=[1,2,3,4,5];
let squared=arr.map(function(num){
    return num*num;
})

console.log(squared);*/

//Q3->Use filter to get even numbers.
/*let arr=[1,2,3,4,5];
let even=arr.filter(function(num){
    return num%2==0;
})

console.log(even);*/

//Q4->Use reduce to calculate sum.
/*let arr=[1,2,3,4,5];
let sum=arr.reduce(function(acc,curr){
    return acc+curr;
},0)

console.log(sum);*/

//Q5->Use reduce to find maximum number
/* let arr=[1,2,50,4,5];
 let max=arr.reduce(function(acc,curr){
    if(curr>acc){
        return curr;
    }
    return acc;
 },0)

 console.log(max);*/

//Q6->Use find to get first even number.
/*let arr=[1,3,2,6,7,8];
let firstEven=arr.find(function(num){
    return num%2==0;
})

console.log(firstEven);*/

//Q7->Use findIndex to locate number > 50.
/*let arr=[10,20,30,60,70];
let locateNum=arr.findIndex(function(num){
    return num>50;
});

console.log(locateNum);
*/

//Q8->Use some to check if any number is negative.
/*let arr=[1,2,3,-4,5];
let checkNegative=arr.some(function(num){
    return num<0;
});

console.log(checkNegative);*/

//Q9->Use every to check if all numbers are positive.
/*let arr=[1,2,3,4,5];
let checkPositive=arr.every(function(num){
    return num>0;
});

console.log(checkPositive);*/

//Q10->Create array of names and convert all to uppercase.
/*let arr=['rahul,yash,amitesh,ankit'];
let nameUpper =arr.map(function(name){
    return name.toUpperCase();
});

console.log(nameUpper);*/


//Q11->Filter all students with marks > 80.
/*let students = [
  { name: "Rahul", marks: 85 },
  { name: "Aman", marks: 75 },
  { name: "Priya", marks: 90 },
  { name: "Rohit", marks: 60 }
];

let result = students.filter(student => student.marks > 80);

console.log(result);*/

//Q12->Calculate average using reduce.
/*let arr=[10,20,30,40,50];
let average=arr.reduce(function(acc,curr){
    return acc+curr;
},0)/arr.length;

console.log(average);*/ 

//Q13->Count occurrences of numbers in array.
/*let arr=[1,2,3,1,2,1,4];
let occurrences=arr.reduce(function(acc,curr){
    acc[curr]=(acc[curr] || 0)+1;
    return acc;
},{});

console.log(occurrences);*/

//Q14->Flatten nested arrays using flat.
/*let arr = [1, 2, [3, 4], [5, 6]];
let result = arr.flat();
console.log(result);*/

//Q15->Remove duplicates using Set.
/*let arr = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); */

//Q16->Sort array of objects by age.
/*let people = [
  { name: "Rahul", age: 25 },
  { name: "Aman", age: 20 },
  { name: "Priya", age: 30 }
];

let sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);*/

//Q17->Find total price of shopping cart.
/*let cart = [
  { name: "Product 1", price: 10, quantity: 2 },
  { name: "Product 2", price: 20, quantity: 1 },
  { name: "Product 3", price: 15, quantity: 3 }
];

let totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(totalPrice);*/

//Q18->Group users by age.
/*let users = [
  { name: "Rahul", age: 25 },
  { name: "Aman", age: 20 },
  { name: "Priya", age: 30 }
];

let grouped = users.reduce((acc, user) => {
  acc[user.age] = acc[user.age] || [];
  acc[user.age].push(user);
  return acc;
}, {});

console.log(grouped);*/

//Q19->Chain filter and map.
/*let students = [
  { name: "Rahul", marks: 85 },
  { name: "Aman", marks: 70 },
  { name: "Priya", marks: 90 }
];

let toppers = students
    .filter(student => student.marks > 80)
    .map(student => student.name);

console.log(toppers);*/

//Q20->Explain difference between map and forEach.
//in notes

                                              ///OBJECTS
//Q1->Create object for a student.                                              
let student ={
    Name:"Rahul Negi",
    Course:"BTech CSE",
    Age:20,
    City:"Ludhiana"
};

console.log(student);

//Q2->Access properties using dot notation.
console.log(student.Name);
console.log(student.Age);

//Q3->Access properties using bracket notation.
console.log(student["Name"]);
console.log(student["City"]);

//Q4->Add new property dynamically.
student.Email= "rn27232@gmail.com";
console.log(student);

//Q5->Update existing property.
student.Age=21;
console.log(student);

//Q6->Delete a property.
delete student.City;
console.log(student);

//Q7->Create object method.
student.greet=function(){
    console.log("My name is Rahul Negi");
};

student.greet();

//Q8->Use this keyword inside method.
student.details = function(){
    console.log("My Name is "+ this.Name);
    console.log("My Age is "+this.Age);
}

student.details();

//Q9->Create nested object.
let Class={
ID:201,
course:"Btech Cse",
student:{
    s1:"Rahul Negi",
    s2:"Yash Raj",
    s3:"Amitesh Rathore",
}
};

console.log(Class);

//Q10->Access deeply nested property.
console.log(Class.student.s2);

//Q11->Destructure object properties.
let {Name,Course,Age,Email} =student;
console.log(Age);

//Q12->Rename variables while destructuring.
let {Name:Studentname,Course:Studentcourse,Age:Studentage,Email:Studentemail}= student;
console.log(Studentemail);

//Q13->Add default values during destructuring.
let {Name:DefaultStudentname,Course:DefaultStudentcourse,Age:DefaultStudentage,Email:DefaultStudentemail="pn27284626@gmail.com"}= student;
console.log(DefaultStudentemail);

//Q14->Copy object using spread operator.
let copiedstudent={...student};
console.log(copiedstudent);

//Q15->Merge two objects.
let mergedObject={
  ...student,
  ...Class
};
console.log(mergedObject);
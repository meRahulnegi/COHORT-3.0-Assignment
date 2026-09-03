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

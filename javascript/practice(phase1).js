                                                    //CONSOLE  & BASICS// 
//Q1->Print "Hello JavaScript" in the console.                                                    
/*console.log("HELLO JAVASCRIPT");*/

//Q2->Print your name, age, and city using one console.log().
/*console.log("NAME:Rahul Negi,AGE:19years,CITY:Almora");*/

//Q3->Print a warning message using console.warn().
/*console.warn("THIS IS A WARNING");*/

//Q4->Print an error message using console.error().
/*console.error("THIS IS AN ERROR")*/

//Q5->Use console.table() to display an array of 5 numbers.
/*console.table([1,2,3,4,5])*/

                                                 
                                                    //VARIABLES//
//Q1->Create a variable called studentName and store your name in it.
/*var studentName="RAHUL NEGI";*/

//Q2->Create a variable age and print it.
/*var age=19;
console.log(age);*/

//Q3->Create two variables and swap their values.
/*var num1=18;
var num2=19;
var temp=num1;
num1=num2;
num2=temp;
console.log("num1:",num1);
console.log("num2:",num2);*/

//Q4->Create a constant variable for PI and print it.
/*const PI=364.56123;
console.log(PI);*/

//Q5->Declare a variable without assigning a value and print it.
/*var a;
console.log(a);*/

//Q6->Create a variable score and increase it by 10.
/*var score=20;
score+=10;
console.log(score);*/

//Q7->Create three variables for first name, last name, and full name.
/*var firstname=prompt("Enter Your First Name:");
var secondname=prompt("Enter Your Last Name");

console.log("YOUR FULL NAME:",firstname+secondname);*/

                                               //DATA TYPES//
//Q1->Create variables of type string, number, boolean, null, and undefined.
/*var str="rahul";
var num=18;
var bool=true;
var nul=null;
var a;                                               
console.log(str);
console.log(num);
console.log(bool);
console.log(nul);
console.log(a);*/

//Q2->Check the type of different variables using typeof.
/*var str="rahul";
var num=18;
var bool=true;
var nul=null;
var a;                                               
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(bool));
console.log(typeof(nul));
console.log(typeof(a));*/

//Q3->Store your mobile number in a variable and check its type.
/*var mobile=6395125713;
console.log(typeof(mobile));*/

//Q4->Create a variable with value null and check its type.
/*var a=null;
console.log(typeof(a));*/

//Q5->Create a bigint number and print it.
/*var a=45771n;
console.log(a);*/

                                                     //TYPE CONVERSION & COERCION//
//Q1->Convert the string "50" into a number.
/*var str="50";
var num=Number(str);
console.log(num);
console.log(typeof(num));*/

//Q2->Convert the number 100 into a string.
/*var num=100;
var str=String(num);
console.log(str);
console.log(typeof(str));*/

//Q3->Convert "true" into a boolean.
/*var str="true";
var bool=(str ==="true");
console.log(bool);
console.log(typeof(bool));*/

/*Q4->4. Check the output of:
- `"5" + 2`
- `"5" - 2`
- `true + 1`*/

/*console.log("5"+2);
console.log("5"-2);
console.log(true+1);*/

//Q5->Create a variable with value "123abc" and convert it into a number.
/*var a="123abc";
num=Number(a);
console.log(num);*/

//Q6->Use parseInt() on "500px".
/*var str="500px";
var num=parseInt(str);
console.log(num);
console.log(typeof(num));*/

                                                      //OPERATORS//
//Q1->Add two numbers and print the result.
/*var num1=Number(prompt("Enter First Number:"));
var num2=Number(prompt("Enter second Number:"));

console.log(num1+num2);*/

//Q2->Find the remainder when 25 is divided by 4.
/*var num=25;
var div=4;
console.log(25%4);*/

//Q3->Find the square of a number using exponent operator.
/*var num=Number(prompt("Enter a Number:"));
var square=num**2;
console.log("Square=",square);*/

//Q4->Increment a variable using ++.
/*var num=Number(prompt("Enter a Number:"));
num++;
console.log("Increement is",num);*/

//Q5->Decrement a variable using --.
/*var num=Number(prompt("Enter a Number:"));
num--;
console.log("Decreement is",num);*/

//Q6->Use += operator to increase a variable by 20.
/*var num=Number(prompt("Enter a Number"));
num+=20;
console.log("The number is increased by 20:",num);*/

//Q7->Compare two numbers using >, <, >=, <=.
/*var num1=Number(prompt("Enter first number:"));
var num2=(prompt("Enter second number:"));

console.log("num1>num2:",num1>num2);
console.log("num1<num2:",num1<num2);
console.log("num1>=num2:",num1>=num2);
console.log("num1<=num2:",num1<=num2);*/

//Q8->Check if two values are strictly equal using ===.
/*value1=(prompt("Enter First value:"));
value2=(prompt("Enter Second value:"));
console.log("value1===value2",value1 === value2);*/

//Q9->Compare "10" and 10 using both == and ===.
/*var num1="10";
var num2=10;
console.log(" '10'==10:",num1==num2);
console.log("'10'===10:",num1===num2);*/

//Q10->Create two boolean variables and test &&, ||, and !.
/*var a = true;
var b = false;

console.log("a && b =", a && b);
console.log("a || b =", a || b);
console.log("!a =", !a);
console.log("!b =", !b);*/

                                                           //STRINGS//

//Q1->Create a string and print its length.
/*var str=(prompt("Enter a String:"));
console.log("The length of the string to enter:",str.length);*/

//Q2->Convert a string into uppercase.
/*var str=prompt("Enter string to convert it into uppercase:");
console.log(str.toUpperCase());*/

//Q3->Convert a string into lowercase.
/*var str=prompt("Enter string to convert it into lowercase:");
console.log(str.toLowerCase());*/

//Q4->Check if a string includes the word "JavaScript".
/*var str=prompt("Enter any string to check that it contains JavaScript:");
console.log(str.includes("JavaScript"))*/

//Q5->Extract the word "World" from "Hello World".
/*var word="Hello World";
console.log(word.slice(5,11));*/

//Q6->Replace "apple" with "mango" in a sentence.
/*var word="i love apple so much";
console.log(word.replace("apple","mango"));*/

//Q7->Split "HTML,CSS,JS" into an array.
/*var word="HTML,CSS,JS"
console.log(word.split(","));*/

//Q8->Remove extra spaces from a string.
/*var str=" hello    javascript ";
console.log("original string:",str);
console.log("After Removing extra spaces:",str.trim().replace(/\s+/g," "));*/

//Q9->Repeat the word "Hi" 5 times.
/*var word="Hi";
console.log(word.repeat(5));*/

//Q10->Print the first character of a string.
/*var word=prompt("Enter the string for first character:");
console.log(word.charAt(0));*/

//Q11->Use template literals to print:"My name is Aman and I am 20 years old"
/*var name=prompt("Enter your name:");
var age=prompt("Enter your age:");
console.log(`My name is ${name} and I am ${age} years old`)*/

                                                    //NUMBERS & MATH
//Q1->Round 4.7 using Math.round().
/*var num=4.7;
console.log("Rounded Value:",Math.round(num));*/                                                   

//Q2->Find the square root of 81.
/*var num=81;
console.log(Math.sqrt(num));*/

//Q3->Find the maximum number from 10, 20, 5, 99.
/*var maximum=Math.max(10,20,5,90);
console.log("Maximum Number:",maximum);*/

//Q4->Generate a random number between 1 and 10.
/*var random=Math.floor(Math.random()*10)+1;
console.log("Random Number:",random);*/

//Q5->Convert "99.99" into an integer.
/*var int=parseInt("99.99")
console.log(int);*/

//Q6->Check whether 25 is an integer or not.
/*var int=25;
console.log(Number.isInteger(int))*/

//Q7->Use toFixed(2) on 3.141592.
/*var num=3.141592;
console.log(num.toFixed(2));*/

                                                    //CONDITIONALS
  
//Q1->Check whether a number is positive or negative.
/*var num=Number(prompt("Enter a Number:"));
if(num>0){
    console.log("The Number Entered is positive");
}else{
    console.log("The Number Entered is negative");
}*/


//Q2->Check whether a number is even or odd.
/*var num=Number(prompt("Enter a Number:"));
if(num%2==0){
    console.log("The Number Entered is even");
}else{
    console.log("The Number Entered is odd");
}*/

//Q3->Check whether a person is eligible to vote.
/*var age=Number(prompt("Enter Your Age:"));
if(age>=18){
    console.log("You are Eligible to Vote");
}else{
    console.log("You are under age and not able to vote");
}*/

//Q4->Find the largest among two numbers.
/*var num1=Number(prompt("Enter the First Number:"));
var num2=Number(prompt("Enter the Second Number:"));
if(num1>num2){
    console.log(num1 +" is Greater than " + num2);
}else if(num2>num1){
    console.log(num1 + " is Smaller than " + num2);
}else{
    console.log("both are equal");
    }*/


//Q5->Find the largest among three numbers.
/*var num1=Number(prompt("Enter the First Number:"));
var num2=Number(prompt("Enter the Second Number:"));
var num3=Number(prompt("Enter the Third Number:"));
if(num1>=num2 && num1>=num3){
    console.log(num1+" is greater than "+num2 +" and "+num3);
}else if(num2>=num1 && num2>=num3){
    console.log(num2+" is greater than "+num1+ " and "+num3);
}else{
    console.log(num3+" is greater than "+num1 + " and "+num2);
}*/


//Q6->Check whether a year is a leap year.
/*var year=Number(prompt("Enter The Year:"));
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log("The Year Entered is Leap year");
}else{
    console.log("The Year Entered is not a Leap year");
}*/


//Q7->Check whether a number is divisible by both 3 and 5.
/*var num=Number(prompt("Enter a Number to check divisibilty with 3 and 5:"));
if(num%3==0 && num%5==0){
    console.log("The Number is divisible by both 3 and 5");
}else{
    console.log("The Number is not divisible by both 5 and 3");
}*/

/*Q8->Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail*/
/*var num=Number(prompt("Enter your Marks:"));
if(num>=90){
    console.log("Grade:A")
}else if(num>=75){
    console.log("Grade:B");
}else if(num>=50){
    console.log("Grade:C");
}else{
    console.log("Fail");
}*/

//Q9->Check whether a character is a vowel or consonant.
/*var char=prompt("Enter a character to check vowel or consonant:");
char=char.toLowerCase();
if(char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u"){
    console.log("The character entered is a vowel");
}else{
    console.log("The character entered is consonant");
}*/

//Q10->Create a calculator using switch statement.
/*var num1=Number(prompt("Enter the first Number:"));
var num2=Number(prompt("Enter the second Number:"));
var operator=prompt("Enter the operation need to do(/,*,+,-):");
switch(operator){
    case "+":
     console.log(num1+" + "+num2+" = "+(num1+num2));
     break;
     
    case "-":
     console.log(num1+" - "+num2+" = "+(num1-num2));
     break;

    case "*":
     console.log(num1+" * "+num2+" = "+(num1*num2));
     break;
    case "/":
        if(num2!=0){
            console.log(num1+" / "+num2+" = "+(num1/num2))
        }else{
            console.log("Division by zero is not allowed.");
        }
        break;
    default:
        console.log("The operator selected is invalid");  
}
*/

//Q11->Print the day name based on a number (1–7).
/*var num=Number(prompt("Enter the Number:"));
switch(num){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
         break;
    case 4:
        console.log("Thursday");
         break;
    case 5:
        console.log("Friday");
         break;
    case 6:
        console.log("Saturday");
         break;
    case 7:
        console.log("Sunday");
         break;
    default:
        console.log("Only 1-7 number is valid");            
    }*/

//Q12->Check whether a username is "admin" and password is "1234".
/*var username = prompt("Enter Username:");
var password = prompt("Enter Password:");

if (username == "admin" && password == "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}*/


                                                             //TRUTHY&FALSY
//Q1->Check whether an empty string is truthy or falsy.
/*var empty="";
if (empty){
    console.log("The string is Truthy");
} else {
    console.log("The string is Falsy");
} */                                                         

    
//Q2->Check whether 0 is truthy or falsy.
/*var zero=0;
if(zero){
    console.log("0 is truthy");
}else{
    console.log("0 is falsy");
}*/

//Q3->Check whether [] is truthy or falsy.
/*var array=[];
if(array){
    console.log("[] is truthy");
}else{
    console.log("[] is falsy");
}*/

//Q4->Create a variable and print "Valid" if it has a value otherwise print "Invalid"
/*var value=prompt("Enter any value:");
if(value){
    console.log("It is valid");
}else{
    console.log("It is invalid")
}*/


                                                      //TERNARY OPERATOR
//Q1->Check whether a number is even or odd using ternary operator.
/*var num=Number(prompt("Enter a Number:"));
var result=num%2==0 ? "Number Entered is Even" : "Number Entered is Odd";
console.log(result);*/

//Q2->Check whether age is above 18 using ternary operator.
/*var age=Number(prompt("Enter Your Age:"));
var result=(age>18)?"Age is above 18" : "Age is Under 18";
console.log(result);*/

//Q3->Find the greater number between two values using ternary operator.
/*var num1=Number(prompt("Enter The First Number:"));
var num2=Number(prompt("Enter The Second Number:"));
var result=(num1>num2)?num1+ " is greater than " +num2:num1+" is smaller than " +num2;
console.log(result);*/


                                                    //MIXED PRACTICE QUESTIONS

//Q1->Create a mini biodata program using variables and template literals.
/*var fname=prompt("Enter your First Name:");
var sname=prompt("Enter your Last Name:");
var age=prompt("Enter your Age:");
var mob=prompt("Enter your Mobile Number:");
var email=prompt("Enter your Email Address:");
console.log(`First Name:${fname}
    Last Name: ${sname}
    Age: ${age}
    Mobile No.: ${mob}
    Email: ${email}`);*/
    
//Q2->Calculate the area of a rectangle.
/*var length= Number(prompt("Enter the length of Rectangle:"));
var breadth= Number(prompt("Enter the breadth of the Rectangle:"));
var area= length*breadth;
console.log("Area of the rectangle:"+area);*/

//Q4->Calculate the simple interest.
/*var principle= Number(prompt("Enter the Principle Amount:"));
var rate= Number(prompt("Enter the Interest Rate:"));
var time= Number(prompt("Enter the Time Period:"));
var SI=(principle*rate*time)/100;
console.log("The Simple Interest:"+SI);*/

//Q5->Convert temperature from Celsius to Fahrenheit.
/*var celsius= Number(prompt("Enter the value of Temperature is celsius:"));
var fahrenheit= 9*(celsius/5)+32;
console.log("The Temperature in Fahrenheit:"+fahrenheit+"°F");*/

//Q6->Convert kilometers into meters.
/*var km=Number(prompt("Enter distance in km:"));
var m=km*1000;
console.log("Km to m:" +m);*/

//Q7->Calculate electricity bill based on units consumed.
/*var units= Number(prompt("Enter Electricity units consumed:"));
var bill;

if(units<=100){
    bill=units*5;
}else if(units<=200){
    bill=(100*5)+((units-100)*7);
}else{
    bill=(100*5)+(100*7)+((units-200)*10);
}

console.log("Electricity Bill: ₹"+bill);*/

//Q8->Create a username generator using first name and birth year.
/*var firstname=prompt("Enter your First Name:");
var birth=Number(prompt("Enter your Birth Year:"));
var username= firstname+birth;
console.log("Your username is: "+username);*/

//Q9->Check whether a string starts with a specific letter.
/*var str=prompt("Enter the string:");
var letter = prompt("Enter the letter to check:");
var starts=letter.toLowerCase();
str = str.toLowerCase();

if(str.startsWith(starts)){
    console.log("yes! It starts with "+starts);
}else{
    console.log("No! It is not start with "+starts);
}*/

//Q10->Count the total characters in a sentence excluding spaces.
/*var char= prompt("Enter the string:");
var result=char.replaceAll(" ","");
console.log("Total Charcters(excluding spaces): "+result.length);*/

                                               //LOGICAL THINKING QUESTIONS

//Q1->Take two numbers and print which one is greater.
/*var num1= Number(prompt("Enter First Number"));
var num2=Number(prompt("Enter Second Number:"));
if(num1>num2){
  console.log(num1+"is greater");
}else if(num2>num1){
    console.log(num2+"is greater");
}else{
    console.log("Both are equal");
}*/

//Q2->Check whether a number lies between 10 and 50.
/*var num=Number(prompt("Enter the number"));
if(num>=10 && num<=50){
    console.log("yes, "+num+"lies between 10-50");
}else{
    console.log("No, "+num+"does not lie between 10-50");
}*/

//Q3->Check whether a password length is greater than 8.
/*var password= prompt("Enter your password:");
if(password.length>8){
     console.log("Valid password!");
}else{
    alert("Password length should be greater than 8.");
}*/

/*Q4->4. Check if a person can drive:
- age > 18
- has license = true*/
/*var age=Number(prompt("Enter your age:"));
var license=prompt("Did you have a lincense(true/false):");
if(age>=18 && license =="true"){
     console.log("Yes! you are eligible to Drive.");
}else{
    console.log("No! you are not eligible to Drive.");
}*/

//Q5->Check whether a number is divisible by 2, 3, or both.
/*var num=Number(prompt("Enter a Number:"));
if(num%2==0 && num%3==0){
    console.log(num+" is divisible by 2 and 3 both.");
}else if(num%2==0){
    console.log(num," is divisible by 2 only");
}else if(num%3==0){
    console.log(num+" is divisible by 3 only");
}else{
    console.log(num+" is not divisible by 2 or 3.");
}*/

//Q6->Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.
/*var time = Number(prompt("Enter the time (0-23):"));
if (time >= 0 && time <= 23) {
    if (time >= 5 && time < 12) {
        console.log("Good Morning!");
    } else if (time >= 12 && time < 16) {
        console.log("Good Afternoon!");
    } else {
        console.log("Good Evening!");
    }
} else {
    console.log("Please enter a valid time (0-23).");
}*/

//Q7->Find whether a number is a multiple of 10.
/*var num=Number(prompt("Enter your number:"));
if(num%10==0){
    console.log(num+ " is Multiple of 10");
}else{
    console.log(num+" is not multiple of 10");
}*/

//Q8->Create a simple discount calculator.
/*var price = Number(prompt("Enter the original price:"));
var discount = Number(prompt("Enter the discount percentage:"));
var discountAmount = (price * discount) / 100;
var finalPrice = price - discountAmount;
console.log("Original Price: ₹" + price);
console.log("Discount: " + discount + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);*/

//Q9->Check whether a product is in stock.
/*var stock= Number(prompt("Enter the quantity in stock:"));

if(stock>0){
    console.log("Product is in stock");
}else{
    console.log("Product is out of stock");
}*/


//Q10->Calculate final bill after GST.
/*var bill = Number(prompt("Enter the bill amount:"));
var gst = Number(prompt("Enter the GST percentage:"));
var gstAmount = (bill * gst) / 100;
var finalBill = bill + gstAmount;
console.log("Bill Amount: ₹" + bill);
console.log("GST: " + gst + "%");
console.log("GST Amount: ₹" + gstAmount);
console.log("Final Bill: ₹" + finalBill);*/


                                                           //CHALLENGE QUESTIONS FOR BIGINNERS

//Q1->Generate a random OTP of 4 digits.
/*var otp= Math.floor(Math.random()*9000)+1000;
console.log("Your four digit OTP: "+otp); */

//Q2->Reverse a 3-letter string manually.
/*var str=prompt("Enter your string(3-letter):");
if(str.length==3){
    var reverse=str.charAt(2)+str.charAt(1)+str.charAt(0);
    console.log("Orginal String:"+str)
    console.log("Reversed String:"+reverse);
}else{
    console.log("Plz Enter 3 letter string!");
}*/

//Q3->Find the last character of a string.
/*var str=prompt("Enter the string:");
var last=str.length;
console.log("Last Character of the string:"+str.charAt(last-1));*/

//Q4->Convert a full name into uppercase initials.
/*var name=prompt("Enter your Full Name:");
var names= name.split(" ");
var initials=names[0].charAt(0).toUpperCase()+(".")+names[1].charAt(0).toUpperCase()+(".");
console.log("Full Name: "+name);
console.log("Initials UpperCase: "+initials);*/


//Q5->Check whether two strings are equal ignoring case sensitivity.
/*var str1=prompt("Enter String1:");
var str2= prompt("Enter String2:");
str1= str1.toLowerCase();
str2= str2.toLowerCase();
if(str1==str2){
    console.log("They are equal");
}else{
    console.log("They are not equal");
}*/

//Q6->Create a simple login validation system.
/*do{
    var username= prompt("Enter Username:");
    var password= prompt("Enter Password:");
}while(username!= "Rahul" || password!= "rahulji");

console.log("Login Successfully!");*/

//Q7->Find whether a number is a 2-digit or 3-digit number.
/*var num = Number(prompt("Enter Number:"));

if (num >= 10 && num <= 99) {
    console.log("It is a 2-digit number!");
} else if (num >= 100 && num <= 999) {
    console.log("It is a 3-digit number!");
} else {
    console.log("Please enter a 2-digit or 3-digit number.");
}*/

//Q8->Create a mini ATM balance checker.
/*var balance= 5000;
var amount=Number(prompt("Enter the amount to withdraw:"));
if(amount<=0){
    console.log("Please enter the valid amount!");
}else if(amount<=balance){
    balance-=amount;
    console.log("Withdraw Successfully!");
    console.log("Remaining Balance: ₹"+ balance);
}else{
    console.log("Insufficient Balance!")
}*/

//Q9->Simulate a traffic light system using switch.
/*var light = prompt("Enter the traffic light color (Red, Yellow, Green):");
light = light.toLowerCase();
switch (light) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get Ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid Traffic Light Color!");
}*/


//Q10->Build a small marksheet generator using variables and conditionals.
/*var english = Number(prompt("Enter English Marks:"));
var maths = Number(prompt("Enter Maths Marks:"));
var science = Number(prompt("Enter Science Marks:"));
var total = english + maths + science;
var percentage = (total / 300) * 100;
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage.toFixed(2) + "%");
if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else if (percentage >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}*/
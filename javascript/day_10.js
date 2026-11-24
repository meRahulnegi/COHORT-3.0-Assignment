//let go with the constructor function

function CreateBook(bookName,authorName,pages){
this.bookName= bookName;
this.authorName= authorName;
this.pages= pages;
this.getFrontPage=function(){
    console.log("Book Name->",this.bookName);
    console.log("Author Name->",this.authorName);;
    console.log("Book Pages->",this.pages);
}
}

let book1=new CreateBook("HP- Prisoner of Azkaban","JK Rowling",760);
let book2=new CreateBook("Rich Dad Poor Dad","Robert Kiyosaki",440);
let book3=new CreateBook("Sapiens","Yuvan Noah Harrari",850);

book1.getFrontPage();

//Ab class dekhte hai 

class MakeStudents{
    constructor(fname,lname,contact,isVerified){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
        this.isVerified=isVerified;
        this.showProfile=function(){
            if(this.isVerified){
                console.log(`Name->${this.fname} ${this.lname},Contact->${this.contact}`);
            }
            else{
                console.log(`User is not verified`);
            }
        }
    }
}

let s1=new MakeStudents('Rahul','Negi',897561,true);
let s2=new MakeStudents('Ankit','Raj',88755,true);
let s3=new MakeStudents('Yash','Raj',62437,false);
let s4=new MakeStudents('Amitesh','Rathore',2541543,false)

s1.showProfile();
s3.showProfile();


//ab hm sbka jra prototype nikale kya arha hai 

let arr=[10,20,30,40];

let obj={
  fname:'Kishan',
  lname:'Singh'
}

let fun=function(){
    console.log('Nacho Nacho');
}

let s='Sarthak';

let n=20;

let b=true;

console.log(arr.__proto__.__proto__==obj.__proto__);
console.log(fun.__proto__.__proto__==obj.__proto__);
console.log(s.__proto__.__proto__==obj.__proto__);
console.log(n.__proto__.__proto__==obj.__proto__);
console.log(b.__proto__.__proto__==obj.__proto__);

//which means at last js is all about object 

//ab agr me upr vale ka constructor bnau to 

function Students (fname,lname,contact,isVerified){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
        this.isVerified=isVerified
}

showProfile=function(){
if(this.isVerified){
    console.log(`Name->${this.fname} ${this.lname},Contact->${this.contact}`);
}
else{
    console.log(`User is not verified`);
}
}

Students.prototype.showProfile=showProfile;

let a1=new Students('Rahul','Negi',897561,true);
let a2=new Students('Ankit','Raj',88755,true);
let a3=new Students('Yash','Raj',62437,false);
let a4=new Students('Amitesh','Rathore',2541543,false)

a1.showProfile();

//idhr hmne prototype inheritance kiya hai

//Now we will see the classes inheritence
                                      //Classical Inheritance
class user{
    constructor(fname,lname,contact){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
    }
    greetUser(){
        console.log(`Welcome ${this.fname} ${this.lname}`);
    }
}

class admin extends user{
    constructor(fname,lname,contact){
        super(fname,lname,contact);
        this.accessAdminPanel =true;
    }
    addCourse(){
        console.log('New Course added');
    }
}

let u1=new user('Rakesh','Bhatt',53717);
let u2=new admin('Rahul','Negi',8163671);

console.log(u1);
console.log(u2);
u2.greetUser();
//u1.addCourse();//pr yha admin ke kuch apne alg se function jo user ke pass nhi hai so thats why it is showing undefined. 
u2.addCourse();
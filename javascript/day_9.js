var obj= {
firstName: 'Rahul',
lastName: 'Negi',
age: 20,
city: 'Ludhiana',
sayHi:function(){
    console.log(this);
},
intro:function(){
    console.log(this.firstName + " " + this.lastName +" My age is "+ this.age + " I live in " + this.city);
},
//for updation
update:function(){
    console.log(this.firstName="Ankit");
}
}

obj.sayHi();
obj.intro();

//if i do the updation with this
obj.update();
console.log(obj);

//arrow function will give window object as it does not have lexical context of this;
//so it will go with the global object which is window in browser and global in node js

var obj1={
    firstName: 'Ankit',
    lastName: 'Kumar',
    age: 20,
    check: function(){
        var arrow=()=>{
         console.log(this);
        }
        arrow();
     }
}

obj1.check();
//here the arrow function will give the obj1 as it is the closest object under the function check and it has lexical context of this.


//ab object ke andr fxn ke andr object bnake this ko call krte hai arrow or normal function dono me difference dekhte hai
var obj2={
    firstName: 'Yash',
    lastName: 'Raj',
    age: 19,
    check: function(){
        var obj3={
            firstName: 'Amitesh',
            lastName:'Rathore',
            age: 22,
            arrow:()=>{
                console.log(this.firstName + " " + this.lastName);
            },
            normal:function(){
                console.log(this.firstName + " " + this.lastName);
            }
        }
        obj3.arrow();
        obj3.normal();
     }
    }

    obj2.check();


                    //FUNCTION SHARING (call(),apply(),bind())

//PEHLE CALL() FUNCTION DEKHTE HAI

var student1={
    firstName: 'Rahul',
    LastName: 'Negi',
    TOC: 88,
    OS:91,
    PowerBI: 85,
}

var student2={
    firstName: 'Ankit',
    LastName: 'Kumar',
    TOC: 78,
    OS: 80,
    PowerBI: 90,
}

var student3={
    firstName: 'Yash',
    LastName: 'Raj',
    TOC: 60,
    OS: 70,
    PowerBI: 75,
}

var tellResult= function(){
    console.log(`${this.firstName} ${this.LastName} has scored ${(this.TOC + this.OS + this.PowerBI)/3}% marks in 3 Subjects`);
}

tellResult.call(student1);
tellResult.call(student2);
tellResult.call(student3);

//ab agr hm call ki help se function me arguments pass krna chahte hai to hm call me arguments pass kr skte hai;

var std1={
    firstName: 'Rahul',
    LastName: 'Negi',
    getIntro:function(city,state){
        console.log(`${this.firstName} ${this.LastName} lives in ${city}, (${state})`);
    }
}

var std2={
    firstName: 'Ankit',
    LastName: 'Kumar',
}

var std3={
 firstName: 'Yash',
 LastName: 'Raj',
}

std1.getIntro('Almora','PB');
std1.getIntro.call(std2,'Patna','BR');

//Apply() ka bhi same kam hai bs isme hm function me argument pass array ke andr hi krenge.
std1.getIntro.apply(std3,['Dhanbad','JK']);

//Bind() ko to call ki hi trah likhte hai but thora late call hota hai as compared to call and apply kyuki yeh ek new function dega;
var std4={
    firstName:'Amitesh',
    LastName:'Rathore',
}

var out= std1.getIntro.bind(std4,'Patna','BR');
out();

                                         //PROTOTYPE    
//Ab prototype smjenege by prototype chaining

var colledge ={
    name:'ICFAI UNIVERSITY',
    rating:'A+',
    students:100000,
    sayslogan: function(){
        console.log("Meritum Ethicus");
    }
}

var branch={
    name:'Cse',
    rating:'A++',
    students:101,
    subjects:['Power BI','TOC','OS']
}

var stuud={
    name:'Rahul Negi',
    age:20,
    marks:100,
}

stuud.__proto__=branch;
branch.__proto__=colledge;
console.log(stuud);
console.log(stuud.subjects);

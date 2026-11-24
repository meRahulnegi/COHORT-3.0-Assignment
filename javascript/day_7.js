console.log("kese object ka syntax hai");

var obj={
    username:'Rahul',
    age:20,
    city:'Ludhiana',
    arr: [1,2,3,4,5]
}
console.log(obj);
console.log(obj.username)

//CRUD  CREATE.READ.UPDATE.DELETE
console.log("Create to upr krta hai");
console.log("Read bhi kiya hai");
console.log("Update ab krunga");

obj.age=19;
console.log(obj);

console.log("Delete bhi krna hai");
delete obj.age;
console.log(obj);

console.log("ab sari keys lane ke liye")
let a=Object.keys(obj);
console.log(a);
console.log("same for value also");
let b=Object.values(obj);
console.log(b);
console.log("ab entry bhi kr skte hai");
let c=Object.entries(obj);
console.log(c);

console.log("hmm arr bhi ghusa skte hai array ke adr ab use access krne ke liye");
console.log(obj.arr[2]);


console.log("now we will make an object of mathematical operations");

let  math = {
  add: (a,b)=> a+b,
  sub: (a,b)=> a-b,
  mul: (a,b)=> a*b,
  div: (a,b)=> a/b
}

console.log(math.add(15,3));
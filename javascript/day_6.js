var arr=[10,20,30,40,50]

arr.forEach(function(){
    console.log("Hello");
})

console.log("agr hmne array ke elemnt lane hai to hm vo bhi kr skte hai by passing parameter in function");

arr.forEach(function(a){    
    console.log(a);
})

console.log("agr isme hi hm 2 parmeter pass kregenge to first one will be element and second will be the index.");

arr.forEach(function(a,b){
    console.log(a,b);
})

console.log("agr ab me return krke new array bnau to");

var arr2= arr.map(function(a){
    return a*2;
})

console.log(arr2);

console.log("ab hm filteration krenge array me");

var arr3=arr2.filter(function(a){
    return a>50;
})

console.log(arr3);


console.log("Agr hm reduce krke array ke elemnt ka sum nikalna chahte hai to");

var sum=arr.reduce(function(a,b){
    return a+b;
},0);

console.log(sum);
//here the a is the accumulator and b is the current value and 0 is the initial value of accumulator.

console.log("now we see which number is greater in the array through reduce method");

var arr1=[1,20,50,0,13];

var great= arr1.reduce((acc,val)=>{
    if(val>acc){
         return val;
    }
    return acc;
},0)

console.log(great);
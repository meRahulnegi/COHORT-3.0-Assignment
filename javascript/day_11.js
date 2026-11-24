//aj hm dekhenge asynchronus js
//ASYNC ke liye to setTimeout() padhenge

/*setTimeout(function run(){
    console.log('This is timeout 1');
},2000);

setTimeout(function run(){
     console.log('This is timeout 2');
},5000);*/

//first vala 2sec time me chlega aur second vala 5sec me chlega 


/*console.log("Start");

setTimeout(function code(){
    console.log("Timeout");
},4000);

console.log("End");*/

//to idhr code async wise chlega jese idhr start fir setTimeout then end.

let int=setInterval(function(){
    console.log("Interval...");
},1000);

setTimeout(function(){
    clearInterval(int)
},5000);
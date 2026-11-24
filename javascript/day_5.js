//array declaration and assignment with updation.
var arr=[1,2,3,4,5];
arr[0]=2;
console.log(arr);

//push and pop
arr.push(6);
arr.push(7);
arr.pop();
console.log(arr);


//unshift and shift
arr.unshift(1);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

//now splice(startIndex,deleteCount,newItems)
arr.splice(2,1);
console.log(arr);
arr.splice(4,0,5,6);
console.log(arr)

//Hm array ke andr ek array store kr skte h
arr.push([1,2,4,5]);
console.log(arr);
console.log(arr[8][1]);
//Reverse
console.log(arr.reverse())

//sort->order vise
console.log(arr.sort((a,b)=>a-b));// means sorting in smaller to bigger


console.log("---");

//of loop 
for(a of arr){
    console.log(a);
}

console.log("Now making a array from for loop:");

let newarr=[];
for(a=0; a<=10;a++){
    if(a%2==0){
     newarr.push(a);
    }
}

console.log(newarr);


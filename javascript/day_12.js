// promise bnate hai

/*let p1=new Promise(function(resolve,reject){
   console.log('Promise is pending...');
  
   let result=true;  //can be false also 

   setTimeout(function() {
     if(result){
      console.log('Value True');
        resolve(); //yeh function hai jo promise ke built in hai which will run then
     }
     else{
        console.log('Value False');
        reject();// will run catch
     }
   }, 3000);
})

p1.then(function(){
   console.log("Promise is fulfilled");
})

.catch(function(){
    console.log("Promise is Rejected");
})

.finally(function(){
    console.log("Promise End");
})*/


//ab jara fake store se api uthate hai

/*let response = fetch('https://fakestoreapi.com/products');

response.then(function(data){
   console.log('Data  Agya!');
   return data.json()
})
.then(function(mydata){
   console.log(mydata);
})
.catch(function(){
   console.log('Data nhi aya!');
})*/

//ab hm async fxn with await dekhenge 

/*async function dataLao(){
   let response=await fetch('https://fakestoreapi.com/products'); //await nhi lagayenge to promise pending ho jayega
   let data= await response.json();//json data ka array datatype which store object;
   data.forEach(function(elem){
   console.log(elem.title);//yha pe jo fake data tha uska title nikalenge 
   })
}

dataLao();*/


//try and catch ke andr agr code galt ho gya to use prevent kr skta hu;

/*async function dataLao(){
   try {
      let response=await fetch('https://cakestoreapi.com/products'); //await nhi lagayenge to promise pending ho jayega
   let data= await response.json();//json data ka array datatype which store object;
   data.forEach(function(elem){
   console.log(elem.title);//yha pe jo fake data tha uska title nikalenge 
   }) 
   } catch (error) {
     console.log("URL is wrong"); 
   }
}
dataLao();*/
//mene jan butch ke api galat kiya hai 

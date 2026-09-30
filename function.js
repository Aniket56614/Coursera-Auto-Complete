// function adc(x,y){
//     console.log(`${x+y} ${x+y}`);

const { get } = require("mongoose")

// const { Result } = require("postcss");

    
// }

// adc(10,20)
// adc(10,25)

// function dance(val){
//     console.log(`$1.{val} 2.${val} `);
    
// }
// dance("mohan")
// dance("ram")


////// spread operator

// Q Change only the age to 25 using the spread operator.

// const user = {
//     name:"aniket",
//     age: 21
// }

// const user1 ={
//     ...user,
//     age:25,
// }
// console.log(user1);

// const obj ={
//     a:1,
//     b:5
// }

// const obj2 ={
    
//     ...obj,
//     a:6,
// }
// console.log(obj2);

// // /// Rest operator
// // 1.take as parameter 
// // 2. take as destructing

// const user2 ={
//     id:1,
//     name:"xyz",
//     city:"Delhi",
// }


//   const {id,name,...rest} = user2
  
// console.log(id);
// console.log(name);
// console.log(rest);

// // 10.Create a function that accepts any number of arguments.
// // Print them.0

// const xy = function(...num){
//     console.log(num);
    
// }
// xy(10,20,5,4,)

// // find
// let arr = [1,2,3,4,5]

// let ans = arr.find(function(val){
//     return val===6
// })
// console.log(ans);

// // destructuring 
// //print second element 
// const fruit =["apple","mango","papaya"]
// console.log(fruit[1]);
 
// // add banana at the end add pineapple at the beginning
// // of this array

// // fruit[0]="banana"  // normaly add element in array indexing
// // fruit[4]="pineapple"
// fruit.push("pineapple")
// fruit.unshift("banana")
// console.log(fruit);

// // replace pineapple with kiwi
// fruit.pop()
// fruit.push("kiwi")
// console.log(fruit);

// // some().
// // let arr1 = [45,60,28,90]
// // let student = arr1.some((val)=>{
// //     return val <=35;
// // })
// // console.log(student);

// let countries  = ["usa","uk"];
// countries=["india",...countries];
//  console.log(countries );
     

// let a = 100;

// (function () {
//   console.log(a);

//   {
//     let a = 200;
//     console.log(a);
//   }

//   console.log(a);
// })();

// function welcome(name){
//     console.log("welcome" + name);
    
// }

// function runFunction(sawagat){
//         sawagat("Aniket")
// }
// runFunction(welcome)

// function add(a,b){
//    return a+b
// }
// function multiply(a,b){
//     return a*b
// }

// function calculate(a,b,callback){
//     calculate()
// }


// function greet(name){
//   console.log("Hello " + name);
    
// }

// setTimeout(greet,2000,"Rahul")

// function calculate(a,b,callback){
    
    
//     let result = a+b;

//  setTimeout(callback, 2000, result);}

// function show(val){
//    console.log(val);
   
// }
// calculate(10,20,show)



// function shows(value){
//    console.log(value);
   

// }

// setTimeout(shows,3000,100)

// function calculate(a,b,callback){
// let result = a+b;
// setTimeout(callback,2000,result)
// }

// function show(val){
// console.log(val);

// }
//   calculate(10,20,show)


  // function substr(a,b,callback){
  //   let res = a-b;
  //   setTimeout(callback,1000,res)
  // }
  // function display(res){
  //   console.log(res);
    
  // }

  // substr(20,12,display)


  // function square(num,callback){
  //    let result = num*num;
  //    setTimeout(callback,3000,result)
  // }

//   function dispaly(result){
//     console.log(result);
    
//   }
//   square(5,dispaly)

  
  
//  const add = function(a,b){
//   let addd = a+b
//    console.log(addd);
//  }

//  add(100,20)

// function squaree(num){
//   return num*num;
// }

// console.log(
//  squaree(5));

//  function checkAge(age){
//   if(age>=18){
//     console.log("Eligible");
    
//   }
//   else{
//     console.log("Not Eligible");
    
//   }
//  }
//  console.log(checkAge(18));
//  console.log(checkAge(16));



 function getdiscount(price){
  
   if(price>=5000){
    
    let discountamout= price*20/100
    return discountamout 
   }
   else if(price>=2000 && price<=4999){
    let discountamout = price*10/100
    return discountamout
   }
   else return "no discount"
 }

 console.log(getdiscount(10000000000000));



// let numbers = [5, 12, 30, 8, 45, 20];
//  const getEvenNumber = (no)=>{
//   let fil = numbers.filter((val)=>{
//     return val %2!== 1
//   })
// console.log(fil);

         
//  }

//  getEvenNumber(5)

// let numbers = [10, 15, 22, 31, 40, 55, 60];

//  function getGreaterNumber(){
 
//  let res =  numbers.filter((val)=>{
//              return val>30
//  })
//            console.log(res);
                
//  }
//  getGreaterNumber()

// let numbers = [10, 15, 22, 31, 40, 55, 60];

// let newarr = []

// for(let i=0;i<numbers.length;i++){
//   if(numbers[i] %2!==0){
//     newarr.push(numbers[i])
   
//   }
 
// } 

//  console.log(newarr);


 let num = [12,30,5,8,21,7,40]
 
 function getSmallNumber(){
     let newar = []
 for (let i = 0; i <num.length; i++) {
  if(num[i]<=10){
    newar.push(num[i])
  }
 }
 
 console.log(newar);
 

}
// console.log(newar);
console.log(getSmallNumber());



let numbers = [10, 25, 30, 45, 50, 65];
let an =0;
 



numbers.forEach((num,index)=>{
  if(num===30) an = index 
 })
 console.log(an);
 
 function arr(num) { 
  let ans = -1;
for(let i=0;i<numbers.length;i++){

     if(numbers[i]===num){
      ans=i;
     }
    
}
   return ans

 }
console.log(arr(25));







// function getTotal(){
//   let sum =0;
// for(let i=0;i<numbers.length;i++){
//   if(numbers[i] > 30){
//      sum = sum+numbers[i] 
//   }
// }
// return sum;
// }
// console.log(getTotal());

let numbers1  = [12, 5, 30, 8, 45, 18, 50];
let arrr = []
// for(let i=0; i<numbers1.length;i++){
//   if(numbers1[i]%2===0){
//       arrr.push(numbers1[i])
      
//   }
// // return arrr
// }

// numbers1.forEach((num,index)=>{
//   if(num > 30){
//   arrr.push(index)  
//   }
 
// })

//   console.log(arrr);


 let numberss = [10, 25, 30, 45, 50, 65, 80];
//  let numn = []
//  numberss.forEach((num)=>{
//   if(num >30){
//     numn = num
//   }
//  }
        
// )

function createUser(name, age) {
    return {
        name: name,
        age: age,

        login() {
            console.log(`${name} logged in`);
        }
    };
}

const user = createUser("aniket",21)
 
user.login()


















 
 


 
 
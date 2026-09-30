// // even odd
// let num =2111;
// if(num%2===0){
//   console.log("even");
  
// }
// else{
//     console.log("odd");
    
// }
// let a =20;
// let b= 20;
//  if(a===b){
    
//  console.log("same");
   
//  } else if(a>b){
//     console.log("a is big ");
    
//  }
//  else{
//     console.log("b is big");
    
// }

//  let num =-10;
//  if(num===0){
    
//  console.log("zero");
   
//  } else if(num>0){
//     console.log("num is pos ");
    
//  }
//  else{
//     console.log("num is neg");
    
//  }


//  let num =12;

//  if(num%3===0 && num%5===0){

//     console.log("it is divisible");
    
//  }
//  else{
//     console.log("not divisible");

    
//  }

// let numbers =  [1,2,3,4,5,6]

// numbers.map((val)=>{
//  return val*'a'
// })2

// console.log(numbers);


const students = [
  { name: 'Rahul', score: 45 },
  { name: 'Anjali', score: 85 },
  { name: 'Amit', score: 35 },
  { name: 'Priya', score: 90 }
];


const pass = students.filter((student)=>{
    return  student.score>=40 
    

})

const finalResult = pass.map((student)=>{
  return  student.name + '-passed'
})

console.log(finalResult);

// const celsiustemp =;
// celciustemp.map((item,index)=>{
//    return index+5
// })

// let numberx = [10,20,30,40]
// // const add = numberx.map((val)=> { 
// //    val+1 })
// // console.log(add);

// const vw = numberx.map((vl)=>{
//    return vl+1;
// })
// console.log(vw);

// let names = ["Aniket", "Rahul", "Aman"];

// const name = names.map((str)=>{
//     return "hello " + str
// })
// console.log(name);

// let numbers = [10, 15, 20, 25, 30, 35];

// const neww = numbers.filter((num)=> num >20 )
// console.log(neww);


// let names1 = ["Aniket", "Aman", "Rahul", "Rohit", "Arjun"];
// let res = names1.filter((nam)=>{
//  return nam.length >=5
  
// })
// console.log(res);

// let nummm = [10,200,10]
// let re = nummm.reduce((acc,curr)=>{
//     return  acc+curr
// },1)
// console.log(re);


// const user={
// name : "Aniket",
// email : "ak@gmail.com",
// age : 20,
// isLoggedIn : "" ,
// }

// console.log(user.name);
// console.log(user.email);


// let numbers =[5,10,15,20]
// let res = numbers.reduce((acc,curr)=>{
//   return acc*curr
// })
// console.log(res);

// let prices = [100, 250, 50, 300];
// let ress = prices.reduce((acc,res) => acc+res)
// console.log(ress);

// let numbers = [5, 10, 15, 20];
// let num = numbers.map((val)=> val*3)
// console.log(num);

// let numbers = [5, 10, 15, 20, 100,200];
// let rssss = numbers.filter((val)=> val>20)
// console.log(rssss);

// let prices = [100, 250, 50, 300];
// let pss = prices.reduce((val,cuu)=>{
//   return val +cuu
// })
// console.log(pss);

// let users = [
//   { name: "Aniket", age: 22 },
//   { name: "Rahul", age: 25 },
//   { name: "Aman", age: 20 }
// ];

// let nam = users.map((val)=>{
//   return val.name
// })
// console.log(nam);

// let users = [
//   { name: "Aniket", age: 22 },
//   { name: "Rahul", age: 25 },
//   { name: "Aman", age: 20 },
//   { name: "Rohit", age: 28 }
// ];

// let num = users.filter((val)=>{
//   return val.age >= 25
// })
// console.log(num);

// let cart = [
//   { item: "Laptop", price: 50000 },
//   { item: "Mouse", price: 1000 },
//   { item: "Keyboard", price: 2000 }
// ];
// let car = cart.reduce((acc,curr)=>{
//   return acc+curr.price
// },0)
// console.log(car);


/// /////////// Destructing     ///////////////////
// let user = {
//     name: "Aniket",
//     age: 22,
//     city: "Patna"
// };
// const {name,city} = user

// console.log(name);
// console.log(city);
// console.log( user.age);
 
// let numbers = [10, 20, 30, 40];

// console.log(numbers.indexOf(20));

// console.log(numbers.indexOf(40));

// let [first,third,fourth] =numbers

// console.log(third);


let user = {
    name: "Aniket",
    age: 22,
    city: "Patna",
    role: "Developer"
};


const{name:username}= user
const{age:userAge}= user

console.log(username);
console.log(userAge);

let numbers = [10, 20, 30];
let newNum = [...numbers]
console.log(newNum);


let a = [10, 20];
let b = [30, 40];

let c = [...a,...b]
console.log(c);

function getTotal(cart) {
   
}

let cart = [
    { item: "Laptop", price: 50000 },
    { item: "Mouse", price: 1000 },
    { item: "Keyboard", price: 2000 }
];


function processUser(name, age, callback) {
     if(age>18){
      console.log("Aniket is eligilble");
      
     }
     else{
      console.log("Aniket is not eligible");
      
     }
     callback()
    //  name()
}
function showMessage(message) {
    console.log(message);
}

// processUser("Aniket", 22, showMessage);


// let products = [
//     { name: "Laptop", price: 50000, stock: 5 },
//     { name: "Mouse", price: 1000, stock: 0 },
//     { name: "Keyboard", price: 2000, stock: 10 }
// ];

// let ans = products.find((vla)=>{
//       return vla.stock===0
// })
// console.log(ans.name);
// console.log(ans);

// let users = [
//     { name: "Aniket", age: 22, role: "developer" },
//     { name: "Rahul", age: 17, role: "student" },
//     { name: "Aman", age: 25, role: "developer" }
// ];
// let ans1 = users.filter((val)=> val.age >= 18)
// console.log(ans1);

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
];

let pro = products.filter((val)=> val.price>2000)
console.log(pro);

let name = pro.map((vla)=>vla.name)
console.log(name);


let users = [
    { name: "Aniket", age: 22, skills: ["JS", "Node"] },
    { name: "Rahul", age: 17, skills: ["HTML", "CSS"] },
    { name: "Aman", age: 25, skills: ["React", "Node"] }
];
let ans = users.filter((val)=> val.age>18)
        //    .map(()=> user.name)
        //    console.log(name);
           

let nn = ans.map((avl)=>avl.name)
console.log(nn);

let student = [
    { name: "Aniket", marks: 80 },
    { name: "Rahul", marks: 45 },
    { name: "Aman", marks: 90 },
    { name: "Ravi", marks: 35 }
];

let ans1 = student.filter((avl)=> avl.marks >50)
console.log(ans1);

const an = ans1.map((ll)=>{
    return ll.name
})
console.log(an); 



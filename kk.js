// const students = [
//   { name: "Rahul", marks: 80 },
//   { name: "Aman", marks: 45 },
//   { name: "Priya", marks: 70 },
//   { name: "Rohit", marks: 30 }
// ];

// // const res = students.filter(student => student.marks>18)

// // let ans  = res.map(item => item.name)

// // console.log(ans);



// const products = [
//   { name: "Laptop", price: 60000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 12000 }
// ];

// const res =products.filter((product) => product.price >10000 )

// const ans= res.map((item) => item.name)
// console.log(ans);

// const numbers = [10, 20, 30, 40];
// let a =numbers.reduce((acc,curr)=>{ return acc+curr})
// console.log(a);

// numbers.forEach(num =>console.log(num)
// )
// console.log();

//  const fruits = ["Apple", "Mango", "Banana"];
//  fruits.forEach((ele,index) =>console.log(ele        ,index)
//  )

// numbers.some(sm=> sm>30)
// // const fruits = ["Apple", "Mango"];

// const users=[
//   {firstName:"john",lastName:"Biden",age:26},
//   {firstName:"jimmy",lastName:"cob",age:75},
//   {firstName:"sam",lastName:"lewis",age:50},
//   {firstName:"Ronald",lastName:"Mathew",age:26},  
// ];
// //using reduce array method
// const output=users.reduce(function(acc,curr){
//     if(acc[curr.age])
//     //if present in array object
//     {
//         acc[curr.age]++;            
//     }else{
//     //if not present in array object
//       acc[curr.age]=1;      
//     }
//     return acc;
// },{})
// console.log(output);

// var nums = [-4, 3, 2, -21, 1];

// const result = nums.filter(num => num>0)
// console.log(result);

// const numbers1 = [10, 25, 60, 45, 80, 30];
//   const ansss=     numbers1.filter(nums => nums>40 && nums%2!=1)
//       console.log(ansss);
      
// const users = [
//   { name: "Rahul", age: 17 },
//   { name: "Amit", age: 22 },
//   { name: "Priya", age: 19 },
//   { name: "Neha", age: 15 },
//   { name: "Raj", age: 25 }
// ];

// const save = users.filter(user =>user.age >18)

// const res = save.map(naam => naam.name)
// console.log(res);

// const users = [
//   {
//     name: "Rahul",
//     age: 25,
//     address: {
//       city: "Delhi",
//       pincode: 110001
//     }
//   },
//   {
//     name: "Amit",
//     age: 30,
//     address: {
//       city: "Mumbai",
//       pincode: 400001
//     }
//   }
// ];

// const [{name:name1,address:{city:city1}}, {name:name2,address:{city:city2}}] = users

// const [
//   { name: name1, address: { city: city1 } },
//   { name: name2, address: { city: city2 } }
// ] = users;

//  console.log(name1,city1);
//  console.log(name2,city2);
 

 const user = {
  name: "Rahul",
  age: 25,
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    pincode: 110001
  }
};
 
// const userUpdate = {...user,
//   age :user.age+1,
//   skills : [...user.skills,"Node"],
//   address : {...user.address,city :'Mumbai'}
// }

const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
  specs: {
    ram: "8GB",
    storage: "512GB"
  }
};
 
const updateUsers = {
  ...product,
  price : product.price=55000,
  specs : {...product.specs,ram : "16GB",},
  product : product.colour = "black"
}       

console.log(updateUsers);

const numbers = [1, 2, 3];

function changeArray(arr) {
  arr.push(4);
  arr = [10, 20];
  console.log(arr);
}

changeArray(numbers);

console.log(numbers);






// const obj  = {
//     name : "lalala",
//     age : 41,
//     employee_id : 102,
//     add : "consistancy parliament beside near delhi "

// }

// const jsonString = JSON.stringify(obj);
// console.log(jsonString);


// let arr = [100, 25, 20, 80000 ,1083555 ,0,4,5,88]// map , reduce , filter .
// let largest = (arr[0])
// let second_l = arr[1]
// for(let i=1;i<arr.length;i++){
// //    const largest = arr.reduce((acc,c_v)=> a)

//    if(arr[i] > largest){
//     second_l =largest
//      largest = arr[i];

//    }
//    else if (arr[i]>second_l){
//               second_l =arr[i]
//    }
   
// }
// console.log(largest);
// console.log(second_l);



// const largest = arr.reduce((acc,c_v)=> a)

// console.log(ans);

// let arr1 = ['virat','sachin','dhoni','rohit']
    
//     const count = arr1.reduce((acc) => acc + 1,10);

//     console.log(count);
    

    
// let arr1 = ['virat','sachin','dhoni','rohit']
//     // const count =  arr1.lenght() 

//     console.log(arr1.length);
    
/* stings are */


//  a b c
// let a =12;
// let b = "mystr"
// let c ={
//     name : "aniket"

// }
// let d = [123,1,2,3]

// console.log(Array.of(a,b,c,d));

//  let obj = new Object ({
//     name : "ji hello"
//  })
//  let obj2 ={
//     add : "california",
//     newadd : "newyork"
//  }
 
// let ob = obj.name
// console.log(ob);
// console.log(obj2.newadd);

// console.log(obj2.hasOwnProperty('newyork'));

//   destructuring 

// let obj = {
//     name : "majnu",
//     city : "ssm",
//     H_n : "1014"
// }

// let {name, city,H_n} = obj
// console.log(name,city,H_n);


// let arr = ["einstine","Rishab",{name : "leutinent"},456]

// let [a,b,c,d] =arr
// console.log(a,b,c,d);


// let num = [10,202,32,12,43]
// let num1 = ["brices",2026,12,43]

// let num3 = [...num,...num1]
// console.log(num3);

const products = [
    {id:1,name:"iPhone 13"},
    {id:2,name:"Samsung Galaxy"},
    {id: 3,name: "Google pixel"}
];

function searchProducts(products,keyword){
     let filteredArray = products.filter(obj=>{
        return obj.name.toLowerCase().includes(keyword.toLowerCase())
        
        
     })  
     console.log(filteredArray);
         
}
searchProducts(products,"13")

 

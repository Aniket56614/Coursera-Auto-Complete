// let promise = new Promise((resolve,reject)=>{
//   console.log("print promise");
// //   resolve("sucess")
//   reject("error")
  
// })

// function getData(dataId,getNextData,){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data :",dataId);
//             resolve("sucess")
//             // reject("error cought")
//             if(getNextData){
//                 console.log("getnextData",getNextData);

              
//             }
              
//         }, 4000);
//     })
// }

// promises chain 

// let p1 = getData(11)
// p1.then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//       console.log(res);
        
//     })
    
// })

// // it is also a promise chaining 
// getData(22,55).
// then((res)=>{
//     return getData(2,60)
// }).then((res)=>{
// //   console.log("sucessfully");
//   return getData(3,65)
// }).then((res)=>{
//     console.log("yeap done");
    
// })


//  check function using async-await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data :",dataId);
            resolve("sucess")
            // reject("error cought")
       
              
        }, 2000);
    })
}

async function alldata() {
    console.log("listen data...1");
    
    await getData(7)
    console.log("listen data...2");
    await getData(6)
    console.log("listen data...3");
    await getData(5)
    // console.log("listen data...4");
    
}
   alldata() 


 function getUser(){
   
 } 

// scope
// global,function,block
// var x = 20; // it run inside the whole code
// function abc() {
//     var a = 10;  // var is functional scope it run only inside the function
                    
//     console.log(a)
// }

// ans= abc();
// console.log(ans)

//  // Let is blocked scope
// {
//     let  v = 30;
//     console.log(v);
    
// }

// // const is also blocked scope 
// function xca(){
//     if(true){
//         const c =12;
//         console.log(c);
        
//     }
// }
// an = xca()
// // console.log(c);

// TDA(Temporal dead zone)

// let a=10
// {
//     let a =12;
//     // inside a
//     console.log("inside :",a);
    
// }
// // outside a
// console.log("Outside",a); 


// function getGrade(score){
//     if(score>=90 && score<=100) return "A"

//     else if(score>=80 && score<=89) return "B"

//     else if(score>=70 && score<=79) return "C"

//     else if(score>=50 && score<=69) return "D"
    
//     else if (score>=0 && score<=49)  return "fail"

//     else return "invalid";
// }

// ans = getGrade(101)
// console.log(ans);


// Rock paper-scissor logic

// function RPS(user,comp){
    
//    if(user === comp ) return "draw"

//    if(user === "rock" && comp === "scissor") return "user win"
    
//    if(user === "scissor" && comp === "paper") return "user win"

//    if(user === "paper" && comp === "rock") return "user win"

//    if(user === "rock" && comp === "paper") return "comp win"

//    if(user === "scissor" && comp === "rock") return "comp win"

//    if(user === "paper" && comp === "scissor") return "comp win"

// }

// const ans = RPS("rock","scissor")
// console.log(ans);


// Q. write a loop (1-20) that skip number is divisibal by 3


// for(let i =1; i<20; i++){
//       if(i%3==0) continue;
//       console.log(i);
   
// }

// Q. write loop 1-100 that:
// . print only 5 odd number 
// . then stop the loop

// use both if, continue, and a counter + break
// let count =0;
// for(let i=1; i<=100; i++){
//    if(i%2 === 1 ){
//       count++;
//     console.log(i);
    
//    }
//    if(count === 5) break; 
// }

// Print all even numbers from 1 to 20.
// let i =1;
// while(i<=20){
//    // i++;
//   if(i%2===0){
//    console.log(i);
   
//   }
//   i++;
// }

// for(let i=1; i<=20;i++){
//    if(i%2===0){
//       console.log(i);
      
//    }
// }

// Print the multiplication table of 5.

// for(let i=1;i<=10;i++){
// console.log(`5*${i} = ${5*i}`);


// }

// // Count backwards from 100 to 50.
// let count =0;
// for(let i = 100; i>=50; i--){
//      count =i;
//      console.log(i);
     
// }

// Use continue to skip a specific number
let tar =8
for(let i=0; i<10; i++){
   if(i==tar){
      console.log(i);
      
   }
}
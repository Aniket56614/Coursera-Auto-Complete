// // class bankaccount {
// //     #balance
// //     constructor(name, balance) {
// //         if(balance<0){
// //             console.log("invalid");
            
    
// //         }
// //              this.name = name;
// //         this.#balance = balance  
// //     }
// //     deposit(balance) {
// //         if (balance > 0) {
// //             this.#balance += balance
// //         }

// //     }


// //     withdraw(balance) {
// //         if(isNaN(balance || balance <=0)){
// //             console.error("invalid balance")
// //             return ;
// //         }
// //         if (this.#balance >= balance) {
// //             this.#balance -= balance
// //         }
// //         else {
// //             console.log("insufficient balance");

// //         }

// //     }
    
// //         getbalance(){
// //             return this.#balance
// //         }

// // }
// //  const account = new bankaccount("lord vanish", -1100)

// // account.deposit('lkidsuiwd')

// // account.withdraw('100')
// // // console.log(account.getbalance());


// // class bankaccount {
// //     #balance
// //     constructor(name,balance){
// //         if(balance >=0)
// //         this.name= name
// //         this.#balance = balance

// //     }
// //     deposit(balance) {
// //        if(balance > 0){
// //         this.#balance += balance
        
// //        }    
// //     }

// //     withdraw(balance){
// //         if(isNaN (balance) || balance<=0){
// //             console.log("invalid number");
// //           return  
// //         }
// //          if(this.#balance >= balance){
// //             this.#balance -= balance
// //         }
// //         else{
// //             console.log("insufficent balance");

            
// //         }
// //     }
// //     getbalance(){
// //       return this.#balance
// //     }

// // }

// // heyaccount = new bankaccount('hey',150)
// //  heyaccount.deposite(500)
// //  console.log(getbalance());
 

//  class payments{
//    validate(){
// console.log("payment validate");

//    }

//    process(){
//       console.log("payments processed");
      
//    }

//    generateReceipt(){
//     console.log("Receipt generated");
    
//    }

//    pay(){
//     this.validate()
//     this.process()
//     this.generateReceipt()
//    }



// }

// const paytm = new payments()

// paytm.pay()



// class vehicle {
//     start(){
//         console.log("vehicle started");
        
//     }

// }

// class car extends vehicle {
//     drive(){
//         console.log("car is driving");
        
//     }
// }

// const Car =  new car()
// Car.start()
// Car.drive()




// const user = {
//     username : 'aniket',
//     id : 102012,
//     signnedIn :true,
//     getUserDetails: function(){
//         console.log(`username: ${this.username}\n id: ${this.id}`);

//         // console.log(this);
        
//     }
    
// }
//  user.getUserDetails()
// // console.log(user.getUserDetails());
// console.log(this);


class car {
    constructor(brand ,color,milege){
        this.brand = brand
        this.color=color
        this.milege=milege
    }
   start(){
    console.log(`${this.brand} is strart..`);
    
   }
   stop(){
    console.log(`${this.brand} is stop..`);
    
   }

}

class ElectricCar extends car{
 
   constructor(brand,color,milege,battery){
         super(brand,color,milege)

         this.battery = battery
   }

    charging(){
        console.log(`${this.brand} is charging..`);
        
    }

    millege(){
        console.log(`${this.brand} milege is ${this.milege}`);
        
    }
}

var bmw =  new ElectricCar("Bmw","black",12,"100mh")
bmw.charging()
bmw.millege()
bmw.start()
// console.log(bmw);

var mahindra = new ElectricCar("Mahindra","white",25)
console.log(mahindra    );













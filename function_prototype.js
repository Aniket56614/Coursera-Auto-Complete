
// function Sbibank(accountHolderName,balance){
//     this.accountHolderName =accountHolderName 
//     this.balance = balance

//     this.deposite = function(balance,accountHolderName){
//         console.log(balance);
//         console.log(accountHolderName);


//     }

// }

// Sbibank.prototype.diposite = function(balance){
//     this.balance += balance

// }

// Sbibank.prototype.withdraw = function(balance){
//     this.balance -= balance
// }

// const manush = new Sbibank("jackquline",3200)
// const padikal = new Sbibank("Devder padikal",5000)


// padikal.diposite(500)
// padikal.withdraw(2500)
// // console.log(x);
// console.log(padikal);


class car {
    constructor(name, milege, color, fule) {
        this.name = name
        this.milege = milege
        this.color = color
        this.fule = fule

    }
     start() {
        console.log(`${this.name} is strating and color is ${this.color}`);
        
     }
     stop(){
        console.log(`${this.name} is stop`);
        
     }
}

const audi =  new  car("audi",32,"skylight","petrol")
const Bmw =  new car("Bmw",23,"Black","diesel")
const tayota =new car("tayota",35,"white","diesel")


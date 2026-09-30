// const text = document.getElementById("text")

// const el = document.querySelector("#btn")
// el.addEventListener('click',(e)=>{
//    text.innerText = "welcome duniya";
// })


// let h1 = document.querySelector("#text")


// h1.innerHTML = "hey kaise ko"


// console.dir(h1);
// console.log(h1);


// let h2 = document.querySelector("#text1")

// h2.outerHTML = "<p>i will do</p> "

// console.log(h2);
// console.dir(h2);

// console.log(document.querySelector('p'));


// const ac = document.querySelector("a")
// const url =  ac.getAttribute("href")
// console.log(url);



// let a = document.querySelector("a")
// a.removeAttribute("href")


// let  cls = document.querySelectorAll(".buy now")
// console.log(cls);


// const he = document.querySelector("#text")

// he.innerHTML = "welcome to Dom"

// let item =  document.querySelectorAll(".ler")
// itme.forEach((val)=>{
//    console.log(val.textContent);
 
// })


// for(let i=0; i<item.length;i++){
    
//     console.log(item[i].textContent);
    
// // }

// const lrm = document.querySelector("#pr")
// lrm.textContent = "<b> updated </b> by js "

// let marvel = document.querySelector("#marvel")
// console.log(marvel.getAttribute("src"))
// console.log(marvel.alt);

// document.querySelector("img").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvDOquJocVA4frC5_CdGTZsy5q5FrP-CNAw&s")

// document.querySelector('img').removeAttribute("src")

// let name = document.querySelector("#name")
//  name.setAttribute("type","password");


// let im = document.querySelector("#img")
// let s = im .getAttribute("src",);

// console.log(s);


// let count = document.querySelectorAll("li");

// for(let i=0; i<count.length; i++)
//     console.log(count[i].textContent);
    
    



// const p = document.querySelectorAll("p")
// p.forEach((ele)=>{
//    ele.style.fontSize = "18px"
// })


// const h1= document.querySelector("h1")
// h1.innerHTML = h1.innerHTML  +"<i> padho padho </i>" // (concat)
// console.dir(h1.innerHTML);

// const divs = document.querySelectorAll(".box")
// console.log(divs);
// let id = 1;

// for(let i =0;i<divs.length;i++){
//     divs[i].innerText = `new unique ${id}`
//     id++;

// }

// let div = document.querySelector("div")
// console.log(div.setAttribute("class","dig"));
// console.log();


// // create 
// const btnn = document.createElement("button")
// btnn.innerHTML = 'cilke me'
// btnn.id = "Btn"
// btnn.style.color = "green"

// // console.log(btnn);


// let num = document.querySelector("#nums")

// num.after(btnn)



// const h1 = document.querySelector("#main-title")
// h1.innerText = "Dom mastery";


// const clas = document.querySelectorAll(".description");
// clas[1].innerText = "updated paragraph 2"


// const newdiv = document.createElement("div")
// newdiv.classList.add("card");

// const h2 = document.createElement("h2")
// h2.innerHTML = "Card header";

// const btn = document.createElement("button")
// btn.innerText = "click me"

// newdiv.append(h2,btn)

// const container = document.querySelector("#card-container")
// container.append(newdiv)


// const h1 = document.createElement("h1")
// h1.innerText = "My first Dynamic heading"

// h1.style.color = "green"
// const cnc = document.querySelector("#box") 
// cnc.append(h1)


const div = document.createElement("div")
div.classList.add("product-card")

const h3 = document.createElement("h3")
h3.innerHTML ="Wireless headphones"

const p = document.createElement("p")
p.innerText = "price: $99"

p.style.color= "blue"

div.append(h3,p)

const prd_Con = document.querySelector("#product-container")
prd_Con.append(div)


let img = document.createElement("img")
img.src = "laptop.jpg"
img.alt = "gaming laptop"
img.width = "300px"

prd_Con.append(img)


const inpput = document.querySelector("#user-input")
console.log(inpput.hasAttribute("disabled"))

inpput.setAttribute("placeholder","Enter your email")

inpput.removeAttribute("disabled")


const int = document.querySelector("#cart-item")
int.hasAttribute("disabled")
int.setAttribute("value","5")
int.setAttribute("placeholder","enter num")

int.setAttribute("data-stock", "out of stock")
int.removeAttribute("disabled")


const ul = document.querySelector("#item-2")

 ul.nextElementSibling.style.color ="red"

 ul.previousElementSibling.style.innertext ="Homepage"

 ul.parentElement.append("<li>Blog</li>")


 let h2 = document.querySelector('#aka')
//  h2.append("kuch bhii ho sakta if i do like this")
  
h2.innerText = h2.innerText + "  studies itself"
 




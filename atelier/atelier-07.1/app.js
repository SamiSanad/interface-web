//Ex 1-a
const premierP = document.querySelector("#ex1 > div > div > p");
premierP.style.color = "green";

//Ex 1-b
const fruits = document.querySelectorAll(".fruit");
fruits.forEach((fruit) => {
    fruit.classList.add("actif");
})


//Ex 2
document.querySelector("#out2").textContent = document.querySelector("#fruits2 > li").textContent;
document.querySelector("#out2").textContent += " ";
document.querySelector("#out2").textContent += document.querySelector("#fruits2 li:last-child").textContent;
document.querySelector("#out2").textContent += " ";
document.querySelector("#out2").textContent += document.querySelector("#fruits2").children[0].nextElementSibling.textContent;

//Ex 3
document.querySelector("#log3").textContent = document.querySelector("#bloc3").textContent;
document.querySelector("#log3").textContent += document.querySelector("#bloc3").innerHTML;

//Ex 4 
const box = document.querySelector("#box4");
box.style.padding = "12px";

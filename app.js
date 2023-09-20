console.log("hola");

const redColor = document.querySelector(".red");
const cardButton = document.getElementById("button");
const blackColor = document.querySelector(".gray");
const grayColor = document.querySelector(".black");
const cardImage = document.querySelector(".card__image img")

console.log("redColor")

redColor.addEventListener('click',() => {
    console.log('Elegiste el color rojo');
    cardButton.style.backgroundColor = "red";
    cardImage.src = "./assets/mercedez_red.jpg";
    
})

grayColor.addEventListener('click',() => {
    console.log('Elegiste el color plomo');
    cardButton.style.backgroundColor = "gray";
    cardImage.src = "./assets/mercedez_gray.jpg";
    
})

redColor.addEventListener('click',() => {
    console.log('Elegiste el color black');
    cardButton.style.backgroundColor = "black";
    cardImage.src = "./assets/mercedez_black.webp";
    
})
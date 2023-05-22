let botonPerro = document.querySelector(".botonPerro")
let botonGato = document.querySelector(".botonGato")
let botonRaton = document.querySelector(".botonRaton")
let imagenPerro = document.querySelector(".imagenPerro")
let imagenGato = document.querySelector(".imagenGato")
let imagenRaton = document.querySelector(".imagenRaton")
let imagenInterrogacion = document.querySelector(".imagenInterrogacion")

botonGato.addEventListener("click",function(){
    imagenPerro.style.display = "none"
    imagenRaton.style.display = "none"
    imagenGato.style.display = "block"
    imagenInterrogacion.style.display = "none"
}) 

botonPerro.addEventListener("click",function(){
    imagenGato.style.display = "none"
    imagenRaton.style.display = "none"
    imagenPerro.style.display = "block"
    imagenInterrogacion.style.display = "none"
}) 


botonRaton.addEventListener("click",function(){
    imagenGato.style.display = "none"
    imagenRaton.style.display = "block"
    imagenPerro.style.display = "none"
    imagenInterrogacion.style.display = "none"
}) 
 
// LÓGICA DE REGALOS

let regalo1 = document.querySelector(".regalo1")
let modalRegalo1 = document.querySelector(".modal-container1")
let botonCerrarRegalo1 = document.querySelector(".X")

regalo1.addEventListener("click",function() {
    if(modalRegalo1.style.display = "none") {
        modalRegalo1.style.display = "flex"
    } 
})

botonCerrarRegalo1.addEventListener("click",function() {
    if(modalRegalo1.style.display = "flex") {
        modalRegalo1.style.display = "none"
    } 
}) 

let regalo2 = document.querySelector(".regalo2")
let modalRegalo2 = document.querySelector(".modal-container2")
let botonCerrarRegalo2 = document.querySelector(".X2")

regalo2.addEventListener("click",function() {
    if(modalRegalo2.style.display = "none") {
        modalRegalo2.style.display = "flex"
    } 
})

botonCerrarRegalo2.addEventListener("click",function() {
    if(modalRegalo2.style.display = "flex") {
        modalRegalo2.style.display = "none"
    } 
}) 

let regalo3 = document.querySelector(".regalo3")
let modalRegalo3 = document.querySelector(".modal-container3")
let botonCerrarRegalo3 = document.querySelector(".X3")

regalo3.addEventListener("click",function() {
    if(modalRegalo3.style.display = "none") {
        modalRegalo3.style.display = "flex"
    } 
})

botonCerrarRegalo3.addEventListener("click",function() {
    if(modalRegalo3.style.display = "flex") {
        modalRegalo3.style.display = "none"
    } 
}) 

let regalo4 = document.querySelector(".regalo4")
let modalRegalo4 = document.querySelector(".modal-container4")
let botonCerrarRegalo4 = document.querySelector(".X4")

regalo4.addEventListener("click",function() {
    if(modalRegalo4.style.display = "none") {
        modalRegalo4.style.display = "flex"
    } 
})

botonCerrarRegalo4.addEventListener("click",function() {
    if(modalRegalo4.style.display = "flex") {
        modalRegalo4.style.display = "none"
    } 
}) 

let regalo5 = document.querySelector(".regalo5")
let modalRegalo5 = document.querySelector(".modal-container5")
let botonCerrarRegalo5 = document.querySelector(".X5")

regalo5.addEventListener("click",function() {
    if(modalRegalo5.style.display = "none") {
        modalRegalo5.style.display = "flex"
    } 
})

botonCerrarRegalo5.addEventListener("click",function() {
    if(modalRegalo5.style.display = "flex") {
        modalRegalo5.style.display = "none"
    } 
}) 

let regalo6 = document.querySelector(".regalo6")
let modalRegalo6 = document.querySelector(".modal-container6")
let botonCerrarRegalo6 = document.querySelector(".X6")

regalo6.addEventListener("click",function() {
    if(modalRegalo6.style.display = "none") {
        modalRegalo6.style.display = "flex"
    } 
})

botonCerrarRegalo6.addEventListener("click",function() {
    if(modalRegalo6.style.display = "flex") {
        modalRegalo6.style.display = "none"
    } 
}) 
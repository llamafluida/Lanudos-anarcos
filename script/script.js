let galeria = [{  "src": "./images/galeria1.jpg",
"texto": "Miembros de la banda en foto grupal"
},
{
    "src": "./images/galeria2.jpg",
    "texto": "Fufi disfrutando de su bebida"
},
{
    "src": "./images/galeria3.jpg",
    "texto": "Puitas disfrutando de su bebida"
},
{
    "src": "./images/galeria4.jpg",
    "texto": "A Fufi se le pasaron un poco las copas"
},
{
    "src": "./images/galeria5.jpg",
    "texto": "El resultado de una noche de juerga"
}
]
//galeria página principal
let i = 0;
//contenedor de imágenes y texto debajo
const slide = document.getElementById("slide");
const slideText = document.getElementById("slide-text");
//flechas
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//colocando la primera imagen y texto dentro de la página
if(slide != null && slideText != null){
slide.src = galeria[i].src;
slideText.innerText = galeria[i].texto;

//función de la flecha hacia adelante
next.addEventListener("click", function(){
    if(i < galeria.length - 1) {
        i++;
        slide.src = galeria[i].src
        slideText.innerText = galeria[i].texto
    }
    else {
        i = 0;
        slide.src = galeria[i].src;
        slideText.innerText = galeria[i].texto;
    }
});
//función de la flecha hacia atrás
prev.addEventListener("click", function() {
    if(i != 0) {
        i--;
        slide.src = galeria[i].src
        slideText.innerText = galeria[i].texto
    }
    else {
        i = galeria.length - 1;
        slide.src = galeria[i].src;
        slideText.innerText = galeria[i].texto;
    }
});
}
//botón header 
const toggleButtonHeader = document.getElementById("toggle-button-header");
const hideLink = document.getElementsByClassName("hideLink");
toggleButtonHeader.addEventListener("click", function(){
for(let j = 0; j < hideLink.length; j++){
    hideLink[j].classList.toggle("hide-link");
}
});
//página galería

const galeriaImg = document.getElementsByClassName("galeria-img");
if(galeriaImg[0] != null){
for(let iGaleria = 0; iGaleria < galeria.length; iGaleria++){
//Tenía un problema poniendo un || luego de la condición, por lo que lo dividí, la segunda parte es el if abajo
    if(iGaleria < galeriaImg.length){
    galeriaImg[iGaleria].setAttribute("src", galeria[iGaleria].src);
    galeriaImg[iGaleria].setAttribute("alt", galeria[iGaleria].texto);
    }
}
const toggleVisor = document.getElementById("toggle-visor");
const galeriaImgPrincipal = document.getElementById("galeria-img-principal");
const galeriaTextoPrincipal = document.getElementById("galeria-texto-principal");
const closeVisor = document.getElementById("close-visor");
for(let k = 0; k < galeriaImg.length; k++){
galeriaImg[k].addEventListener("click", function() {
    toggleVisor.style.display = "flex";
    galeriaImgPrincipal.setAttribute("src", this.src);
    galeriaTextoPrincipal.innerText = this.alt;
});
}
closeVisor.addEventListener("click", function() {
    toggleVisor.style.display = "none";
});
window.addEventListener("click", function(e) {
    if(e.target == toggleVisor) {
        toggleVisor.style.display = "none";
    }
});
}
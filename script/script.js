$(document).ready(function(){
    //Aquí empieza la galería
//primer un objeto donde están almacenados los src y el texto de las imágenes
    var galeria = [{  "src": "./images/galeria1.jpg",
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
//variable que sirve para indicar el index de la imagen actual
    var i = 0;
// variables que contienen los id de los elementos donde estará la imagen y el texto
    let slide = $("#slide");
    let slideText = $("#slide-text");
//con esto cuando se carga la página se coloca la primera imagen y texto de la var galeria
    slide.attr("src", galeria[i].src);
    slideText.text(galeria[i].texto);
//Aquí esto se activa al apretar la flecha izquierda, que tiene la id next
    $("#next").click(function(){
        if(i < galeria.length - 1) {
            i++;
           slide.attr("src", galeria[i].src);
           slideText.text(galeria[i].texto);
        }
        else {
            i = 0;
            slide.attr("src", galeria[i].src);
            slideText.text(galeria[i].texto);
        }


    });
    $("#prev").click(function(){
        if(i != 0) {
            i--;
            slide.attr("src", galeria[i].src)
            slideText.text(galeria[i].texto);
        }
        else {
            i = galeria.length - 1;
            slide.attr("src", galeria[i].src)
            slideText.text(galeria[i].texto);
        }
    });
    //Aquí termina la galería
    //Aquí comienza el botón del header
    var headerLinks = $("header nav a:nth-child(n+2)");
    $("#toggle-div-button button").click(function(){
        headerLinks.toggleClass("hide-link");
    });
});


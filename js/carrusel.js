// Código extraído del tutorial de W3C contenido en el siguiente link: https://www.w3schools.com/w3css/w3css_slideshow.asp

/* Listeners */
document.getElementById('btn_derecha').addEventListener('click', siguiente);
document.getElementById('btn_izquierda').addEventListener('click', anterior);

var indice = 0, imagenes;

siguiente()
carrusel_automatico();


function carrusel_automatico() {
    siguiente();
    setTimeout(carrusel_automatico, 5000);    
}

/**
 * Función que se ejecuta cuando el usuario hace clic sobre la flecha derecha.
 * Avanza al carrusel de fotos.
 * @return {[type]} [description]
 */
function siguiente() {
    pasar_imagen(indice += 1);
}

function anterior() {
    retroceder_imagen(indice += -1);
}

function retroceder_imagen() {
    var imagenes = document.getElementsByClassName("foto-carrusel"), elemento,
        paginas = document.getElementsByClassName("carrusel-page");

    if (indice > imagenes.length) {
        indice = 1;
    } else if (indice < 1) {
        indice = imagenes.length;
    }

    paginar(paginas, indice);

    imagenes[imagenes.length-1].style.display = 'none'; 
    imagenes[0].style.marginLeft = '1800px';
        
    prependTo(imagenes);
    
}

function pasar_imagen() {
    var imagenes = document.getElementsByClassName("foto-carrusel"), elemento,
        paginas = document.getElementsByClassName("carrusel-page");        
        
    if (indice > imagenes.length) {
        indice = 1;
    } else if (indice < 1) {
        indice = imagenes.length;
    }

    paginar(paginas, indice);

    paginar(paginas, indice);
    if (!imagenes[1].classList.contains('escondido')) {
        mostrar_elemento(imagenes[1]);
    }
    
    appendTo(imagenes[0]);
}

function prependTo(imagenes, direccion) {
    var elemento = imagenes[imagenes.length-1], copia = elemento.cloneNode(true),
        padre = elemento.parentNode;       
    
    copia.style.display = 'block';        
    padre.insertBefore(copia, padre.firstChild);
    imagenes[1].style.marginLeft = '';
    padre.removeChild(elemento);
}

function appendTo(elemento) {
    var copia = elemento.cloneNode(true),
        padre = elemento.parentNode;
    mostrar_elemento(copia);
    padre.appendChild(copia);
    padre.removeChild(elemento);
}

function mostrar_elemento(elemento) {
    elemento.classList.toggle('escondido');   
}

function paginar(paginas, indice) {
    for (let i = 0; i<paginas.length; i++) {
        if ((i === indice - 1 && !paginas[i].classList.contains('current') || (i !== indice - 1 && paginas[i].classList.contains('current')))) {
            paginas[i].classList.toggle('current');
        } 
    }
}











function mostrar_divs2(indice_imagen) {
    var imagenes = document.getElementsByClassName("foto-carrusel"),
        paginas = document.getElementsByClassName("carrusel-page");

    if (indice_imagen > imagenes.length) {
        indice = 1;
    } else if (indice_imagen < 1) {
        indice = imagenes.length;
    }

    paginar(paginas, indice); 
    if (!imagenes[Math.floor(imagenes.length/2)].classList.contains('escondido')) {
        mostrar_elemento(imagenes[Math.floor(imagenes.length/2)]);
   }
    
    mover_elemento(imagenes[0]);
}

function paginar(paginas, indice) {
    for (let i = 0; i<paginas.length; i++) {
        if ((i === indice - 1 && !paginas[i].classList.contains('current') || (i !== indice - 1 && paginas[i].classList.contains('current')))) {
            paginas[i].classList.toggle('current');
        } 
    }
}
// function mostrar_elemento(elemento) {
//     elemento.classList.toggle('escondido');    
// }

function mover_elemento(elemento) {
    var copia = elemento.cloneNode(true),
        padre = elemento.parentNode;

    mostrar_elemento(copia);
    padre.appendChild(copia);
    padre.removeChild(elemento);
}















/*
//// FUNCIONA PERFECTAMENTE:
/
var indice = 1, imagenes;

document.getElementById('btn_izq').addEventListener('click', retroceder_imagen);
document.getElementById('btn_der').addEventListener('click', pasar_imagen);

mostrar_divs2(indice);
carrusel_automatico();

function pasar_imagen() {
    mostrar_divs2(indice += 1, true);
}
function retroceder_imagen() {
    mostrar_divs2(indice -= 1, false);
}

function carrusel_automatico() {
    retroceder_imagen();
    setTimeout(carrusel_automatico, 5000);    
}

function mostrar_divs2(indice_imagen, direccion) {
    var i, imagenes = document.getElementsByClassName("x"), elemento;
        console.log (imagenes[0].classList[1] + ' ' + imagenes[1].classList[1] + ' ' + imagenes[2].classList[1]);
    if (indice_imagen > imagenes.length) {
        indice = 1;
    } else if (indice_imagen < 1) {
        indice = imagenes.length;
    }
     
     if (direccion) {
            appendTo(imagenes[0], direccion);
        esconder_elemento(imagenes[0], direccion);
     } else {
            prependTo(imagenes, direccion);
     }   
}

function mostrar_elemento(elemento) {
    elemento.style.margin = '';   
}

function esconder_elemento(elemento, direccion) {
    //console.log(elemento.style.margin);
    elemento.style.margin = (direccion) ? '0 0 0 -30px' : '0 0 0 30px'; 
    //console.log(elemento.style.margin);
}

function prependTo(imagenes, direccion) {
    var elemento = imagenes[imagenes.length-1], copia = elemento.cloneNode(true),
        padre = elemento.parentNode; 
        
        padre.removeChild(elemento);      
        //esconder_elemento(imagenes[0], direccion);
        padre.insertBefore(copia, padre.firstChild);//.style.width = '30px';
        //mostrar_elemento(imagenes[1], direccion); 
}

function appendTo(elemento, direccion) {
    var copia = elemento.cloneNode(true),
        padre = elemento.parentNode;
        mostrar_elemento(copia, direccion);
    padre.appendChild(copia);
    padre.removeChild(elemento);
}*/
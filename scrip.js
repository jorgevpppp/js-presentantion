/***********************************
 * DIFERENCIA ENTRE VAR Y LET
 ***********************************/
var texto = "Variable declarada con var";
let textoLet = "Variable declarada con let";

console.log(texto);
console.log(textoLet);

// Ejemplo de ámbito de bloque con let
if (true) {
    let textoLet = "Let dentro del bloque";
    console.log(textoLet);
}

console.log("Let fuera del bloque:", textoLet);


/***********************************
 * MOSTRAR / OCULTAR VÍDEO CON SONIDO
 ***********************************/
const btnMostrar = document.getElementById("mostrar");
const btnOcultar = document.getElementById("ocultar");
const contenedorVideo = document.getElementById("video");
const iframe = document.getElementById("iframeVideo");

btnMostrar.addEventListener("click", function () {
    contenedorVideo.style.display = "block";
});

btnOcultar.addEventListener("click", function () {
    contenedorVideo.style.display = "none";

    // Reinicia el vídeo para que se pare
    iframe.src = iframe.src;
});


/***********************************
 * FORMULARIO - AVISO SI ESTÁ VACÍO
 ***********************************/
const nombre = document.getElementById("nombre");

// Evento blur: cuando el usuario sale del input
nombre.addEventListener("blur", function () {
    if (nombre.value.trim() === "") {
        alert("Debes introducir tu nombre");
    }
});

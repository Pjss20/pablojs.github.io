let contador = 1;
let miImage = document.querySelector("img"); // recupera el selector
miImage.onclick = function() {
    // let miSrc = miImage.getAttribute("src"); recupera el atributo
    if(contador < 7) {
        contador++;
        miImage.setAttribute("src", "images/firefox-icon"+contador+".jpg"); //establece al atributo src la imagen 
    }
    else{
        contador = 1;
        miImage.setAttribute("src", "images/firefox-icon1.png");
    }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre."); // crea un cuadro de diálogo 
    if (!miNombre) {
        miTitulo.innerHTML = "Mozilla es genial";
    } 
    else 
    {
        // localStorage: permite almacenar datos en el navegador y recuperarlos luego;
        // setItem: crea y almacena un dato en el elemento llamado
      localStorage.setItem("unNombre", miNombre);
      miTitulo.innerHTML = "Mozilla es genial, " + miNombre;
    }
}

if (!localStorage.getItem("unNombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("unNombre");
    miTitulo.textContent = "Mozilla es genial, " + nombreAlmacenado;
  }

miBoton.onclick = function () {
    estableceNombreUsuario();
};
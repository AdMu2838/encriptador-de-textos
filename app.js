
function encriptarPalabra(palabra) {
  const letrasEncriptadas = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const minuscula = palabra.toLowerCase();

  let encriptado = "";
  for (let i = 0; i < minuscula.length; i++) {
    const letra = minuscula[i];
    if (letrasEncriptadas.hasOwnProperty(letra)) {
      encriptado += letrasEncriptadas[letra];
    } else {
      encriptado += letra;
    }
  }

  return encriptado;
}
function remover (){
    const imagen = document.querySelector(".izquierda img");
    const textoRemover = document.querySelector(".izquierda div > p:first-child");
    if (imagen && textoRemover) {
        imagen.remove();
        textoRemover.remove();
    }
}
function encriptar() {
    
    const texto = document.getElementById("texto").value;
    const encriptado = encriptarPalabra(texto);
    remover();
   
    document.querySelector(".reemplazar").textContent = encriptado;

    botonCopiar();
}

function copiar(boton) {
    return function () {
        const texto = document.querySelector(".izquierda div p").textContent;
        const input = document.createElement("input");
        input.value = texto;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        boton.textContent = "Copiado!";
        setTimeout(() => {
            boton.textContent = "Copiar";
        }, 2000);
        alert("Texto copiado al portapapeles");
        
    };
    
}

function botonCopiar(){
    const boton = document.createElement("button");
    boton.textContent = "Copiar";
    const leftSection = document.querySelector(".izquierda div");
    document.getElementById("texto").value = "";
    leftSection.appendChild(boton);
    boton.style.position = "absolute";
    boton.style.bottom = "20px";
    boton.style.left = "50%";
    boton.style.transform = "translateX(-50%)";
    boton.style.width = "80%"
    boton.onclick = copiar(boton);
}

function desencriptarPalabra(palabraEncriptada) {
  // Define the decryption rules
  const palabrasDes = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let desencriptado = "";
  const letrasEncriptadas = palabraEncriptada.split(/(enter|imes|ai|ober|ufat)/);
  for (let i = 0; i < letrasEncriptadas.length; i++) {
    const letra = letrasEncriptadas[i];
    if (palabrasDes.hasOwnProperty(letra)) {
      desencriptado += palabrasDes[letra];
    } else {
      desencriptado += letra;
    }
  }

  return desencriptado;
}

function desencriptar(){
    const texto = document.getElementById("texto").value;
    const desencriptado = desencriptarPalabra(texto);
    remover();
    document.querySelector(".reemplazar").textContent = desencriptado;

    botonCopiar();
}


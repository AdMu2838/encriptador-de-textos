
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
function encriptar() {
    
    const texto = document.getElementById("texto").value;
    const encriptado = encriptarPalabra(texto);
    const imagen = document.querySelector(".izquierda img");
    const textoRemover = document.querySelector(".izquierda div > p:first-child");
    imagen.remove();
    textoRemover.remove();
    document.querySelector(".izquierda div > p:last-child").textContent = encriptado;

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
        location.reload();
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

function decryptWord(encryptedWord) {
  // Define the decryption rules
  const decryptionRules = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let decryptedWord = "";
  const encryptedLetters = encryptedWord.split(/(enter|imes|ai|ober|ufat)/);
  for (let i = 0; i < encryptedLetters.length; i++) {
    const letter = encryptedLetters[i];
    if (decryptionRules.hasOwnProperty(letter)) {
      decryptedWord += decryptionRules[letter];
    } else {
      decryptedWord += letter;
    }
  }

  return decryptedWord;
}


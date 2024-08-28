document.addEventListener("DOMContentLoaded", function () {
  var encryptButton = document.querySelector(".encrypt-btn");
  if (encryptButton) {
    encryptButton.onclick = encryptMessage;
  }
});

function encryptMessage() {
  var input = document.querySelector("#message").value;
  var encryptedMessage = encrypt(input);
  document.querySelector(".result").textContent = encryptedMessage;
  toggleMessage();
}

function encrypt(texto) {
  const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  return texto
    .toLowerCase()
    .split("")
    .map((char) => {
      return llaves[char] || char;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  var decryptButton = document.querySelector(".decrypt-btn");
  if (decryptButton) {
    decryptButton.onclick = decryptMessage;
  }
});

function decryptMessage() {
  var input = document.querySelector("#message").value;
  var decryptedMessage = decrypt(input);
  document.querySelector(".result").textContent = decryptedMessage;
  toggleMessage();
}

function decrypt(textoEncriptado) {
  const llaves = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let textoDesencriptado = textoEncriptado.toLowerCase();
  for (let llave in llaves) {
    textoDesencriptado = textoDesencriptado.split(llave).join(llaves[llave]);
  }

  return textoDesencriptado;
}

document.addEventListener("DOMContentLoaded", function () {
  var copyButton = document.querySelector(".copy-btn");
  if (copyButton) {
    copyButton.onclick = copyMessage;
  }
});

function toggleMessage() {
  var noresult = document.querySelector(".no-result");
  var result = document.querySelector(".result");

  if (noresult.style.display !== "none") {
    noresult.style.display = "none";
    result.style.display = "block";
  }
}

function copyMessage() {
  var messageText = document.querySelector(".result");
  var textToCopy = messageText.textContent;
  setClipboard(textToCopy);
  alert("Texto copiado al portapapeles!");
}

async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}

document.addEventListener("DOMContentLoaded", function () {
  var copyButton = document.getElementById("copiarBtn");
  if (copyButton) {
    copyButton.onclick = function () {
      if (document.querySelector(".result").style.display !== "none") {
        copyMessage();
      } else {
        alert("No hay mensajes a copiar!");
      }
    };
  }
});

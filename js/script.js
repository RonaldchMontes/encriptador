const ingresoTexto = document.getElementById("ingresoTexto");
const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");
const buttonCopiar = document.getElementById("buttonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const seccion2Info = document.getElementById("seccion2Info");
const seccion2 = document.getElementById("seccion2");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add = "oculto";
    ingresoTexto.value = "";
    seccion2Info.style.display = "none";
    buttonCopiar.style.display = "block";
    seccion2.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muneco.classList.remove = "block";
    seccion2Info.style.display = "block";
    buttonCopiar.style.display = "none";
    seccion2.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

buttonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto !="") {
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
                };                
            };
            return newText;
        }
    }else{
        alert("Ingrese el texto a encriptar");
        reset();
    }    
   
    /*const textoEncriptado = encriptar(texto);*/
     remplace(encriptar(texto));
    mensajeFinal.innerHTML = textoEncriptado;   
    
  
})
buttonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto !="") {
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
                
            };
            return newText;
        }    
    }else {
        alert("Ingrese el texto a Desencriptar")
        reset();
    }     
    remplace(desencriptar(texto))
  
});

buttonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    /*navigator.clipboard.writeText(texto.value);*/
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    reset();    
}); 



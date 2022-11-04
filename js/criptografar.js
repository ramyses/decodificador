const inputTexto = document.querySelector(".input-texto-primario");
const mensagem = document.querySelector(".mensagem");

const botaoEncriptar = document.querySelector(".botao-criptografar")

botaoNaoEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    const textoEncriptado = encriptar(inputTexto.value,0,1);
    mensagem.value = textoEncriptado;
    inputTexto.value = "";
} )  
const matrizCodigo = [
    ["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u","ufat"]
];

function encriptar(stringEncriptada, compara, troca){
    let acumulaString = stringEncriptada.toLowerCase();
    acumulaString = stringEncriptada;
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][compara])){
            acumulaString = stringEncriptada.replaceAll(matrizCodigo[i][compara], matrizCodigo[i][troca])
            
        }
    } 
    return acumulaString;
}
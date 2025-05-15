/*declarando variáveis*/
let altura;
let peso;
let imc;
/*CRIANDO UMA FUNÇÃO PARA CALCULO DO IMC*/
//COMENTARIO DE LINHA
/*COMENTARIO DE BLOCO*/
function calcImc( ){
    let altura= (document.getElementById("al").value)/100;//divisao por 100
    let peso = document.getElementById("ps").value
altura = parseFloat(altura)
/*
tipos de dados:
int: numeros inteiros 
float:de poto flutuante exemplo , exemplo da gasolina6.27
string: texto
boolean : verdadeiro ou falso */
peso = parseFloat(peso)  

let imc = peso / (altura * altura)

window.alert ("Seu IMC é" + imc.toFixed(2))
}
function alternarTemas(){
    const corpo = document.body; // corpo html
    corpo.classList.toggle("escuro")
    corpo.classList.toggle("claro")
    
}
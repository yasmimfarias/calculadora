let texto = document.querySelector("#text");

let num0 = document.querySelector("#zero");
let num1 = document.querySelector("#one");
let num2 = document.querySelector("#two");
let num3 = document.querySelector("#three");
let num4 = document.querySelector("#four");
let num5 = document.querySelector("#five");
let num6 = document.querySelector("#six");
let num7 = document.querySelector("#seven");
let num8 = document.querySelector("#eight");
let num9 = document.querySelector("#nine");
let soma = document.querySelector("#sum");
let subtracao = document.querySelector("#subtraction");
let divisao = document.querySelector("#division");
let multiplicacao = document.querySelector("#multiplication");
let porcentagem = document.querySelector("#percent");
let virgula = document.querySelector("#comma");


zero.addEventListener("click", function () {
    texto.value += '0';
});
one.addEventListener("click", function () {
    texto.value += '1';
});
two.addEventListener("click", function () {
    texto.value += '2';
});
three.addEventListener("click", function () {
    texto.value += '3';
});
four.addEventListener("click", function () {
    texto.value += '4';
});
five.addEventListener("click", function () {
    texto.value += '5';
});
six.addEventListener("click", function () {
    texto.value += '6';
});
seven.addEventListener("click", function () {
    texto.value += '7';
});
eight.addEventListener("click", function () {
    texto.value += '8';
});
nine.addEventListener("click", function () {
    texto.value += '9';
});
sum.addEventListener("click", function () {
    texto.value += '+';
});
subtraction.addEventListener("click", function () {
    texto.value += '-';
});
division.addEventListener("click", function () {
    texto.value += '/';
}); 
multiplication.addEventListener("click", function () {
    texto.value += '*';
});
comma.addEventListener("click", function (value, total) {
    texto.value += '.';
});

let botao = document.querySelector("#equal");

botao.addEventListener("click", function () {

    try {  
        let resultado = eval(texto.value);
        texto.value = resultado;    
    } catch (error) {
        texto.value = "Erro"; 
    }
});

function deletar() {

    document.querySelector('#text').value = '';

}

function deletarUltimo() {

    let input = document.querySelector('#text');

    input.value = input.value.slice(0, -1);

}





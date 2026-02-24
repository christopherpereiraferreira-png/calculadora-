
//Projeto: Calciladora (JavaScript)
//Arquivo:main.js
//Objetivo:praticar funçaoes e execuçao com Node.js(sem loops complexos).

//1) Crie as funcoes basicas:
function somar(a, b) {
    return a + b;
}

function subtrair(a,b) {
    return a-b;
}

function multiplicar(a,b) {
    return a*b;
}

function dividir(a,b){
//Observaçao:evite b= 0 para nao dividir por 0.
return a/b;
}

//2) Defina dois valores para testar:
let x=10;
let y=2;


//3) Mostre os resultados no console:
console.log("===CALCULADORA BASICA===");
console.log("Valores: ",x, "e", y);


console.log("soma:",somar(x,y));
console.log("Subtraçao:",subtrair(x,y));
console.log("Multiplicaçao:",multiplicar(x,y));
console.log("Divisão:",dividir(x,y));

//4) DESAFIO SIMPLES (sem loops):
//-Troque os valores de x e y.
//-teste numeros decimais (ex.:7.5 e 2.5)
//-Crie uma funçao 'potencia(a,b) usando Math.pow(a,b) e exiba o resultado
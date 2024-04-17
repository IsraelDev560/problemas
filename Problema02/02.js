/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
let myList = [];
myList.push(0);
myList.push(1);
// myList.push(1);
let contador = 0;
// [0, 1, 2, 3, 4, 5]
while(contador < 15){
    myList.push(myList[contador]+myList[contador+1]);
	contador++;
}
console.log(myList);
if (myList.includes(55)){
	console.log("Tudo certo");
}
else {
	console.log("Não tá na lista")
}
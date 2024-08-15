var num1;
var num2;
var soma;

function verifica() {
    num1 = Number(prompt("Entre com o primeiro numero"));
    num2 = Number(prompt("Entre com o segundo número"));
    soma = (num1 + num2);
    num1 === num2 ? (alert(`Os números ${num1} e ${num2} são iguais`)) : (alert(`Os números ${num1} e ${num2} não são iguais`));

}

function imprime() {
    soma > 10 ? (alert(`A soma é igual a ${soma}, logo é maior que 10`), (soma < 20) ? (alert(`A soma= ${soma} também é menor que 20`)) : (alert(`A soma= ${soma} também é maior que 20`))) : (alert(`A soma é igual a ${soma}, logo é menor que 10 e portanto menor que 20`));

}

function iguais() {
    soma === 10 ? (alert(`A soma ${soma} é igual a 10 e portanto, menor que 20`)) : (soma === 20 ? (alert(`A soma ${soma} é igual a 20 e portanto, maior que 10`)) : imprime());
}
verifica();
iguais();
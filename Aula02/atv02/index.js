var peso = prompt("Digite seu peso: ")
var altura = prompt("Digite sua altura: ")

var imc = peso / ((altura)^2)

if (imc < 18.5)
{
    console.log("Abaixo do peso")
} 
else if ((imc >= 18.6 ) && (imc <= 24.9))
{
  console.log("Peso normal")
}
else
{
  console.log("Sobrepeso")
}

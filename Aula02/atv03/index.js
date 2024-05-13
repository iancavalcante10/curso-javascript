var idade = prompt("Digite sua idade: ")
var preco = prompt("Digite o preco: ")



if (idade < 18)
{
  preco = 0.9*(preco)
    console.log(`O preco é ${preco}`)
} 
else 
{
  console.log(`Preco ${preco}`)
}


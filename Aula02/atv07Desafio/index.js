var opcao = prompt("Digite um valor de 1 a 5: ")

console.log("Opções do menu: 1 - Calcular área do triângulo 2 - Calcular Área do Retângulo 3 - Calcular Volume do Cubo 4 - Calcular Área do Círculo 5 - Sair ")

switch(opcao){
  case "1":
    console.log("Calcular área do triângulo: ")
    l1 = prompt("Digite l1: ")
    l2 = prompt("Digite l2: ")
    l3 = prompt("Digite l3: ")
    p = (l1 + l2 + l3)/2
    a = (p * (p - l1)* (p - l2)* (p - l3))
    val = Math.sqrt(a)
    console.log(`Área do triângulo é:  ${val}`)

  break;
  case "2":
    console.log("Calcular Área do Retângulo")
    l1 = prompt("Digite l1: ")
    l2 = prompt("Digite l2: ")
    a = (l1 * l2)
    console.log(`Área do Retângulo é:  ${a}`)
    
  break;
  case "3":
    console.log("Calcular Volume do Cubo")
    l1 = prompt("Digite l1: ")
    vol = (l1ˆ3)
    console.log(`Volume do cubo ${vol}`)
  break;
  case "4":
    console.log("Calcular Área do Círculo")
    r = prompt("Digite r: ")
    a = (3.14)*(rˆ2)
    console.log(`A área do círculo é : ${a}`)
  break;
  case "5":
    console.log("Sair")
  break;
  default:
    console.log("O valor não está no intervalo de 1 a 5. ")
}
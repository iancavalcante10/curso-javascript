var l1 = prompt("Digite o valor de lado 1: ")
var l2 = prompt("Digite o valor de lado 2: ")
var l3 = prompt("Digite o valor de lado 3: ")

if ((l1 == l2) && (l1 == l3)){
  console.log("O triângulo é equilátero. ")
}
else if ((l1 == l2) && (l1 != l3)) {
  console.log("O triângulo é isósceles. ")
}
else if ((l1 == l3) && (l1 != l2)) {
  console.log("O triângulo é isósceles. ")
}
else if ((l2 == l3) && (l2 != l1)) {
  console.log("O triângulo é isósceles. ")
}
else {
  console.log("O triângulo é escaleno. ")
}
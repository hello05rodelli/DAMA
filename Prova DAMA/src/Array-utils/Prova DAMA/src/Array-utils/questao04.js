const prompt = require  ('prompt-sync') ()

console.log('Digite o lado 1: ');
let lado1 = prompt();

console.log('Digite o lado 2: ');
let lado2 = prompt();

console.log('Digite o lado 3: ');
let lado3 = prompt();

if (lado1 == lado2 && lado2 == lado3) {
    console.log('Triângulo Equilátero')
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('Triângulo Isóceles')
}else {
    console.log('Triângulo Escaleno')
}
let precoGasolina = 6.66;
let precoEtanol = 5.79
let combustivel = 'etanol'
const kmPorLitro = 10;
let distancia = 100;

if(combustivel === 'etanol'){
 
let calculo = (precoEtanol/kmPorLitro)*distancia;

console.log(calculo.toFixed(2));
}
else{
let calculo = (precoGasolina/kmPorLitro)*distancia; 
console.log(calculo.toFixed(2));
}



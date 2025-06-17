const peso = 64
const altura = 1.70
const IMC = peso/Math.pow(altura,2)
const resultado = IMC
console.log(resultado)
if(resultado < 18.5){
    console.log('Abaixo do peso')
}
else if (resultado >= 18.50 && resultado <=25){
    console.log('Peso Normal')
}

else if (resultado > 25 && resultado <=30){
    console.log('Acima do Peso')
}

else if (resultado > 30 && resultado <=40){
    console.log('Obeso')
}
else{
    console.log('Obesidade Grave')
}
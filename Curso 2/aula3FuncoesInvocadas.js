
function calculaImc(peso,altura){
    return peso/Math.pow(altura,2);
}


function classificarImc(resultado){
     if(resultado < 18.5){
        return('Abaixo do peso');
}
else if (resultado >= 18.50 && resultado <=25){
        return('Peso Normal');
}

else if (resultado > 25 && resultado <=30){
        return('Acima do Peso');
}

else if (resultado > 30 && resultado <=40){
        return('Obeso');
}
else{
        return('Obesidade Grave');
}

}
   
( function(){
const peso = 64;
const altura = 1.70;
const resultado = calculaImc(peso,altura);
console.log(resultado.toFixed(2),classificarImc(resultado));
} ) ()

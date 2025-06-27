
function digaMeuNome(name){
    console.log('Seu nome é '  + name);
}


digaMeuNome('Irruan')


function quadrado(valor){
    return valor*valor
}

const valorAoQuadrado = quadrado(10)
console.log(valorAoQuadrado)


function incrementarJuros(valor,percentual){
    const juros = (percentual/100)*valor
    return valor+juros;
}

console.log(incrementarJuros(100,15))
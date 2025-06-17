let nota1 = 7.1;
let nota2 = 7;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3; 
let resultado = media;
if (resultado < 5){
    console.log(resultado.toFixed((2)) + " Reprovado")
}
else if (resultado > 7){
    console.log(resultado.toFixed((2)) + " Aprovado")
}
else{
    console.log(resultado.toFixed((2)) + " Recuperação")
};
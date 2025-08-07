class Pessoa{
    nome;
    altura;
    peso;

constructor(nome,altura,peso){
    this.nome=nome;
    this.altura=altura;
    this.peso=peso;
}

calcularIMC(){
  return this.peso /(this.altura * this.altura);
}

FalarIMC(){
    const calculo = this.calcularIMC()
    console.log(`Olá meu nome é ${this.nome} meu IMC é ${calculo.toFixed(2)}`); 
}

classificarIMC(){
const imc = this.calcularIMC()
if (imc< 18.5){
    return('Abaixo do peso');
}
else if (imc >= 18.50 && imc <=25){
    return('Peso Normal');
}

else if (imc > 25 && imc <=30){
    return('Acima do Peso');
}

else if (imc > 30 && imc <=40){
    return('Obeso');
}
else{
    return('Obesidade Grave');
}
}
}
const joao = new Pessoa('João',1.75,70)
console.log(joao)

joao.FalarIMC()

const irruan = new Pessoa('Irruan', 1.70,50)
irruan.FalarIMC()
console.log(irruan.classificarIMC())
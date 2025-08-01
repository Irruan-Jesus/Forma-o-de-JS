class Carros{
    marca;
    cor;
    litroPorKm;

    constructor(marca,cor,litroPorKm){
        this.marca=marca;
        this.cor=cor;
        this.litroPorKm=litroPorKm;
    }

   calcularGastoPorViagem(precoCombustivel,distanciaEmKm){
        return (precoCombustivel*this.litroPorKm)*distanciaEmKm
    }


}

const uno = new Carros('Fiat','Branco',1/12);
console.log(uno);
console.log(uno.calcularGastoPorViagem(5,70))
const toro = new Carros('Fiat','preto',1/10)
console.log(toro.calcularGastoPorViagem(6.03,55))


class pessoa  {
    nome;
   idade;


    constructor(nome, idade) { //ao utilizar o constructor estou passando como 
        this.nome = nome;       //para as propriedade dois parametros*/
        this.idade = idade;
    }
 
    falar(){
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }


}

function comparaPessoas (p1,p2){ //essa função tem capacidade de trabalhar com o objetos, acessando as propriedades. 
    if (p1.idade>p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if  (p2.idade>p1.idade) {
         console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }

    else{
         console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}


const irruan = new pessoa('Irruan', 24);
const cristiele= new pessoa('Cristiele', 25);

comparaPessoas(irruan, cristiele)
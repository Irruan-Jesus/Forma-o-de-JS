class pessoa  {
    nome;
   idade;


    constructor(nome, idade) { //ao utilizar o constructor estou passando como 
        this.nome = nome;       //para as propriedade dois parametros
        this.idade = idade;
    }
 
    falar(){
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }


}


const irruan = new pessoa('Irruan',24);
const cristiele= new pessoa('Cristiele',25);

irruan.falar()
cristiele.falar()
console.log(irruan); //exibindo o conteúdo da instância

    
 
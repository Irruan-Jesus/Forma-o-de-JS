class pessoa  {
    nome;
   idade;

    falar(){
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

    somar(x,y){
        return x*y;
    }
}


const irruan = new pessoa();
    irruan.nome = 'Irruan Jesus Da Rocha';
    irruan.idade = 24;

    const cristiele = new pessoa();
    cristiele.nome = 'Cristiele Santana'
    cristiele.idade = 25;

   console.log(irruan); //exibindo o conteúdo da instância
   console.log(cristiele)
    
   irruan.falar(); //executando os métodos da instância
   console.log(irruan.somar(8,5));
   
   /*Criação de uma class e uma instância de uma class. 
   Todo objeto criado a partir de uma class é uma instância*/ 
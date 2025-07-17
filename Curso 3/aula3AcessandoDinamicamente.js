const pessoa = { 
    nome : 'Irruan Jesus',
    idade: 24,

    descrever: function( ) {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    } 

};

const key = "idade";
console.log(pessoa[key]); /* utilizando a string  e atribuindo a const key posso acessar o valor dentro do objeto usando []
                             que seria algo parecido com OBJ.chave, mas neste caso o acesso é direto*/
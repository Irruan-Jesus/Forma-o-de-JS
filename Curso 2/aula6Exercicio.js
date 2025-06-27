function escreveNome(nome){
    return nome;
}
escreveNome('Irruan');

function verificaIdade(idade){
    if (idade<18){
        console.log(escreveNome('Irruan ')+'Você é de menor');
    } 
    else{
         console.log(escreveNome('Irruan ')+'Você é de maior');
    }
}

verificaIdade(18)
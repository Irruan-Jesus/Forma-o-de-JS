const debito = 0.1;
const avista = 0.15;
const duasParcelas = preco 
const parcelas = 0.1;
pagamento = 'duas vezes';
preco = 143.99;

if(pagamento === 'avista'){
  pago = preco - (avista * preco) 
  console.log('Valor pago foi '+ pago.toFixed((2)));
}
else if (pagamento === 'debito'){
    pago = preco - (debito * preco)
    console.log('Valor pago foi '+ pago.toFixed((2)));
}
else if (pagamento === 'parcelas'){
    pago = preco + (parcelas * preco)
    console.log('Valor pago foi '+ pago.toFixed((2)));
}
else{
    console.log('Valor pago foi '+ preco.toFixed((2)));
}
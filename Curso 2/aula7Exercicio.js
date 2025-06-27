/*const debito = 0.1;
const avista = 0.15;
const preco = 143.99;
const duasParcelas = preco 
const parcelas = 0.1;
const pagamento = 'duas vezes';



function calcular (pagamento,preco){

if(pagamento === 'avista'){
  return pago = preco - (avista * preco);
  
}
else if (pagamento === 'debito'){
   return pago = preco - (debito * preco);
}
    
else if (pagamento === 'parcelas'){
   return pago = preco + (parcelas * preco);
}
else{
    return 'Valor pago foi '+ preco.toFixed((2));
}
}

console.log('Valor pago foi '+ pago.toFixed((2)));*/



function calcularPreco(formaDePagamento,valor){ // função para aplicar desconto ou acrescimo na forma de pagamento
   if (formaDePagamento === 1) {  // se o pagamento for avista 15% DE DESCONTO
      return valor - (valor*0.15);
   }
   else if (formaDePagamento===2){  // se o pagamento for no debito 10% DE DESCONTO
      return valor - (valor*0.1);
   }
   else if (formaDePagamento===3){ // se o pagamento for em duas parcela SEM DESCONTO
      return valor;
   }
   else{
      return valor + (valor*0.1); // se o pagamento for em mais de duas ACRESCIMENTO
   }
}

console.log('valor pago foi '+ calcularPreco(4,139).toFixed((2)))
const precoEtiqueta = 180;
const formaDePagamento = 3;

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100))
}


if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarDesconto(precoEtiqueta, -10));
    
}




// function pagamento(precoEtiqueta, formaDePagamento){
//     if(formaDePagamento === 1){
//             console.log(precoEtiqueta - (precoEtiqueta * 0.1));
//         } else if(formaDePagamento === 2){
//             console.log(precoEtiqueta - (formaDePagamento * 0.15));
//         }else if(formaDePagamento === 3){
//             console.log(precoEtiqueta);
//         }else{
//             console.log(precoEtiqueta + (formaDePagamento * 0.1));
//         }
// }

// pagamento(180, 1)
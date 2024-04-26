////// VARIÁVEIS //////
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto = document.getElementById("btn-adicionar-produto-01");
let inpuQuantidadeProduto = document.getElementById("quantidade-produto-01");
let btnRemoveProduto = document.getElementById("btn-subtrair-produto-01");
const valorUnitarioProduto = 11.66;


let subtotalInfo = {
  quantidade: 1,
  valor: valorUnitarioProduto,
};

///// FUNÇÕES /////
function atualizarPagina(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  inpuQuantidadeProduto.value = subtotalInfo.quantidade
}
atualizarPagina()

function incrementaQuantidadeProduto(){
  subtotalInfo.quantidade ++
  subtotalInfo.valor += valorUnitarioProduto
  atualizarPagina()
}

function decrementaQuantidadeProduto(){
  if(subtotalInfo.quantidade < 1){
    return
  }
  subtotalInfo.quantidade--
  subtotalInfo.valor -= valorUnitarioProduto
  atualizarPagina()
}

btnAdicionarProduto.addEventListener("click", incrementaQuantidadeProduto);
btnRemoveProduto.addEventListener("click", decrementaQuantidadeProduto);



const produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

function exibirProdutos() {
  const produtosDiv = document.getElementById("produtos");
  produtosDiv.innerHTML = "";

  produtos.forEach(produto => {
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto");
    produtoDiv.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
    `;
    produtosDiv.appendChild(produtoDiv);
  });
}

exibirProdutos();

function enviarPedido() {
  // Simulação do envio do pedido
  // Aqui você pode adicionar a lógica real de envio do pedido
  alert("Pedido enviado!");

  // Limpar o carrinho e redirecionar para a página de pedidos
  localStorage.removeItem("carrinho");
  window.location.href = "pedidos.html";
}

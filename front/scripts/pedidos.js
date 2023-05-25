function exibirPedidos() {
  const pedidosDiv = document.getElementById("pedidos");
  pedidosDiv.innerHTML = "";

  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  pedidos.forEach(pedido => {
    const pedidoDiv = document.createElement("div");
    pedidoDiv.classList.add("pedido");
    pedidoDiv.innerHTML = `
      <h3>Pedido ID: ${pedido.id}</h3>
      <p>Status: ${pedido.status}</p>
      <ul>
        ${pedido.produtos.map(produto => `<li>${produto.nome}</li>`).join("")}
      </ul>
    `;
    pedidosDiv.appendChild(pedidoDiv);
  });
}

exibirPedidos();

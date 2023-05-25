const produtos = [
  {
      nome: "Pizza de Calabresa",
      descricao: "Calabresa, queijo, cebola",
      preco: 25.99
  },
  {
      nome: "Pizza Margherita",
      descricao: "Mussarela, tomate, manjericão",
      preco: 23.99
  },
  {
      nome: "Pizza de Frango com Catupiry",
      descricao: "Frango, Catupiry, milho",
      preco: 28.99
  }
];

function exibirProdutos() {
  const produtosDiv = document.getElementById("produtos");
  produtosDiv.innerHTML = "";

  produtos.forEach((produto, index) => {
      const produtoDiv = document.createElement("div");
      produtoDiv.classList.add("produto");
      produtoDiv.innerHTML = `
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
          <button onclick="abrirModal(${index})">Detalhes</button>
      `;
      produtosDiv.appendChild(produtoDiv);
  });
}

exibirProdutos();

function abrirModal(index) {
  const modal = document.getElementById("detalhes-modal");
  const titulo = document.getElementById("modal-titulo");
  const descricao = document.getElementById("modal-descricao");
  const preco = document.getElementById("modal-preco");

  const produto = produtos[index];

  titulo.textContent = produto.nome;
  descricao.textContent = produto.descricao;
  preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

  modal.classList.remove("hidden");
}

function adicionarAoCarrinho() {
  const index = parseInt(event.target.dataset.index);
  const produto = produtos[index];

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
  document.getElementById("detalhes-modal").classList.add("hidden");
}

function adicionarAoCarrinho(index) {
  const produtoSelecionado = produtos[index];
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produtoSelecionado);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
  window.location.href = "carrinho.html";
}


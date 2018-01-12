let produtos = [
    {
        imagem: {
            src: "./img/p1.png",
            alt: "Camiseta roxa"
        },
        nome: "Puma Golf Raglan Tech Polo Tee",
        cor: "Roxo",
        preco: 72,
        qtd: 3,
    },
    {
        imagem: {
            src: "./img/p2.png",
            alt: "Camiseta roxa"
        },
        nome: "Nike Men´s Running Shoes",
        cor: "Laranja",
        preco: 129,
        qtd: 1,
    },
    {
        imagem: {
            src: "./img/p3.png",
            alt: "Camiseta roxa"
        },
        nome: "DC Men´s Axis Snowboard Jacket",
        cor: "Azul",
        preco: 89,
        qtd: 2,
    },
];
console.log(produtos);
let itens = produtos.length;
document.getElementById('itens__quantity').innerHTML = 'You have ' + itens + ' in your order';

function listarProdutos() {
    var template = "";
    var subtotal = "";
    for (var i = 0; i < produtos.length; i++) {
        var total = produtos[i].preco * produtos[i].qtd;
        // subtotal += parseInt(total);
        template += '<tr>';
        template +=     '<td class="table-border"><i class="fas fa-times-circle remove-item" onclick="removerProdutos(' + i + ')"></i></td>';
        template +=     '<td class="table-border" id="table-image"><img src="' + produtos[i].imagem.src + '" alt="' + produtos[i].imagem.alt + '"></td>';
        template +=     '<td class="table-border" id="table-name">' + produtos[i].nome + '</td>';
        template +=     '<td class="table-border" id="table-price">' + produtos[i].preco + '</td>';
        template +=     '<td class="table-border" id="table-quantity">' + 
                            '<button onclick="removerItem(' + i + ')" class="minus-button">-</button>' + 
                            produtos[i].qtd + 
                            '<button onclick="adicionarItem(' + i + ')" class="plus-button">+</button>' + 
                            '</td>';
        template +=     '<td class="table-border" id="table-total">' + total + '</td>';
    };
    document.getElementById('products').innerHTML = template;
    document.getElementById('subtotal-value').innerHTML = " " + subtotal;
    console.log(subtotal);
};

function removerProdutos(i) {
    produtos.splice(i, 1);
    listarProdutos();
}
function removerItem(i) {
    produtos[i].qtd = produtos[i].qtd - 1;
    listarProdutos();
}
function adicionarItem(i) {
    produtos[i].qtd = produtos[i].qtd + 1;
    listarProdutos();
}
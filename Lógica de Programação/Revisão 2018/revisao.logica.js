var clientes = [];

function cadastrarClientes() {
    event.preventDefault(); /* segura o evento (submit = envia para o servidor e dá um refresh) */
    
    // var nome = document.getElementById('nome').value;
    // var idade = document.getElementById('idade').value;
    var objNome = document.getElementById('nome');
    var objIdade = document.getElementById('idade');
    
    
    var cli = new Object();
        cli.nome = objNome.value;
        cli.idade = objIdade.value;
    // Objeto também pode ser criado
    // var cli = {
    //     nome: nome,
    //     idade: idade,
    // };
        clientes.push(cli)
        document.getElementById('nome').value = ''; /* limpa os campos do formulário - Ideal é criar uma função */
        document.getElementById('idade').value = '';

    var resultado;

    // if (idade >= 18) {
    //     resultado = nome.value + ' é maior de idade';
    // } else {
    //     resultado = nome + ' é menor de idade';
    // }
    
    if (cli.idade >= 18) {
        resultado = cli.nome + ' é maior de idade';
    } else {
        resultado = cli.nome + ' é menor de idade';
    }

    document.getElementById('resultado').innerHTML = resultado;
    console.log(clientes);
    listarClientes()
}

function limparCampos() {
    event.preventDefault();
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}

function listarClientes() {
    event.preventDefault();
    var listaClientes = '';
    for (var i = 0; i < clientes.length; i++) {
        listaClientes += "<p>nome : "+clientes[i].nome+"<br>idade: "+clientes[i].idade+"</p>";
    }
    document.getElementById('resultado').innerHTML = listaClientes;
}
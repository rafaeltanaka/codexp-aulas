var clientes = [];

function testar() {
    event.preventDefault();
    
    // var nome = document.getElementById('nome').value;
    // var idade = document.getElementById('idade').value;
    var objNome = document.getElementById('nome').value;
    var objIdade = document.getElementById('idade').value;
    
    
    var cli = new Object();
        cli.nome = objNome.nome;
        cli.idade = objIdade.idade;
    // Objeto também pode ser criado
    // var cli = {
    //     nome: nome,
    //     idade: idade,
    // };
        clientes.push(cli)
        document.getElementById('nome').value = ''; /* limpa os campos do formulário - Ideal é criar uma função */
        document.getElementById('idade').value = '';

    var resultado;

    if (idade >= 18) {
        resultado = nome + ' é maior de idade';
    } else {
        resultado = nome + ' é menor de idade';
    }
    
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;




    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').innerHTML += clientes;
    console.log(cli.nome, cli.idade);
    console.log(clientes);
    console.log(meuCarro);
}
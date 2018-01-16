// if (document.getElementsByClassName('input-standard').checked = true) {
//     document.getElementsByClassName('input-standard').color
// };
var dadosCliente = {
    endereco: {

    },
    contato: {

    },
}

function validarFormulario() {
    //gerar objeto endereco
    event.preventDefault();
    objEndereco = {
        pais: document.getElementById('country').value,
        estado: document.getElementById('state').value,
        cep: document.getElementById('zip').value,
        end: document.getElementById('address').value,
        compliment: document.getElementById('compliment').value,
    };
    for (var property1 in objEndereco) {
        if (objEndereco[property1] === '') {
            alert('Preencha o  campo ' + property1);
            alert(this.id);
            return;
        };
    };

    // if (objEndereco.cep === '') {
    //     console.log("errado");
    // } else {
    //     console.log("certo");
    // }
    console.log(objEndereco);
    //gerar objeto contato
}

function validarEndereco() {

}

function validarContato() {

}
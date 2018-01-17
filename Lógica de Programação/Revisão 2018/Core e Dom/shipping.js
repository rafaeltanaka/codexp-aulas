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
        estado: document.getElementById('state'),
        cidade: document.getElementById('city'),
        cep: document.getElementById('zip'),
        end: document.getElementById('address').value,
        compliment: document.getElementById('compliment'),
    };
    //gerar objeto contato
    objContato = {
        pNome: document.getElementById('first-name').value,
        uNome: document.getElementById('last-name'),
        email: document.getElementById('email'),
        tel: document.getElementById('phone').value,
    };
};

function validarEndereco() {
    validarFormulario();
    for (var property in objEndereco) {
        objEndereco[property].value.trim();
        if (objEndereco[property].value === '') {
            objEndereco[property].focus();
            alert('Preencha o  campo ' + objEndereco[property].placeholder);
            console.log(objEndereco);
            return;
        };
    };
    
};
var x = 'valor1';

function validarContato() {
    validarFormulario();
    for (var property in objContato) {
        // x = property.value;
        // document.getElementById('products').innerHTML = property.value;
        console.log(objContato[property]);
        // if (x.trim() == 0) {
        //     console.log(objContato.pNome);
        //     alert('Preencha o  campo ' + objContato[property].placeholder);
        //     objContato[property].focus();
        //     console.log(objContato);
        //     return;
        // } else {
        //     objContato[property] = objContato[property].value;
        // };
    };
    console.log(property.value);
    // console.log(objContato);
    // console.log('iahdijwdioaw ' + x);
}
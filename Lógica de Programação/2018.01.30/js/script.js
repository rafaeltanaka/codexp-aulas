var listarNotas = {
    secao: document.getElementsByClassName("notes")[0],
    listaInterna: [],
    adiciona: function(tituloNovo, textoNovo) {
        var nota = {
            titulo: tituloNovo.value,
            texto: textoNovo.value,
            editando: false,
        };
        this.listaInterna.push(nota);
        
        atualizarSecao(this.secao);
    },
    remove: function(posicao) {
        this.listaInterna.splice(posicao, 1);
        atualizarSecao(this.secao);
    },
    edita: function(posicao) {
        this.listaInterna[posicao].editando = true;
        atualizarSecao(this.secao);
    },
    salva: function(posicao, tituloEditado, textoEditado) {
        this.listaInterna[posicao].titulo = tituloEditado;
        this.listaInterna[posicao].texto = textoEditado;
        this.listaInterna[posicao].editando = false;
        atualizarSecao(this.secao);
    },
    pegaItem: function(posicao) {
        return this.listaInterna[posicao];
    },
    contaItens: function() {
        return this.listaInterna.length;
    },
};
function atualizarSecao(secao) {
    var conteudoSecao = '';
        document.getElementById('notes').innerHTML = '';
    for (var posicao = 0; posicao < listarNotas.listaInterna.length; posicao++) {
        if (listarNotas.listaInterna[posicao].editando) {
            conteudoSecao += '<form class="note">' +
                                 '<input class="note__title" type="text" name="title" placeholder="Título" autofocus value="' + listarNotas.listaInterna[posicao].titulo + '"/>' +
                                 '<textarea class="note__body" name="body" rows="5" placeholder="Criar uma nota...">' + listarNotas.listaInterna[posicao].texto + '</textarea>' +
                                 '<button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form, ' + posicao + ')">' +
                                     'Concluído' +
                                 '</button>' +
                              '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ')">'+
                                  '<button class="note__control" type="button" onclick="removerNota(event, ' + posicao + ')">' +
                                    '<i class="fa fa-times" aria-hidden="true"></i>' +
                                  '</button>' +
                                  '<h1 class="note__title">' + listarNotas.listaInterna[posicao].titulo + '</h1>' +
                                  '<p class="note__body">' + listarNotas.listaInterna[posicao].texto + '</p>' +
                              '</form>';
        };
    };
    secao.innerHTML = conteudoSecao;
};
function editaFormulario(posicao) {
    listarNotas.edita(posicao);
};
function adicionarNota(inputTitulo, texteareaTexto, formulario, posicao) {
    if (listarNotas.listaInterna[posicao]) {
        listarNotas.salva(posicao, inputTitulo.value, texteareaTexto.value);
    } else {
        listarNotas.adiciona(inputTitulo, texteareaTexto);
        formulario.reset();
        inputTitulo.focus();
    };
};
function removerNota(evento, posicao) {
    evento.stopPropagation();
    listarNotas.remove(posicao);
};
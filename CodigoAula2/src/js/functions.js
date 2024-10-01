// Arquivo o qual fica o JavaScript da página

/*
let textoOriginal = document.getElementById('titulo').textContent;

document.getElementById('botao-trocar-texto').addEventListener('click' , function() {
    document.getElementById('titulo').textContent = 'Texto trocado'

    let titulo = document.getElementById('titulo');

    if (titulo.textContent === 'Texto trocado'){
        titulo.textContent = textoOriginal;
    } else {
        textoOriginal = titulo.textContent;
        titulo.textContent = 'Texto trocado'
    }
});
*/

// Span com atualização automática do ano para o rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// Função para mudar o título principal da página
$(document).ready(function(){
    $('#botao-trocar-texto').on('click', function(){
        let titulo = document.getElementById('titulo'); // <-- Obtém o elemento do título pelo ID 'titulo'

        if (titulo.textContent === 'Texto trocado'){
            titulo.textContent = textoOriginal;
        } else {
            textoOriginal = titulo.textContent;
            titulo.textContent = 'Texto trocado';
        }
    })

    let corAtual = true; // <-- Variável para armazenar o estado atual da cor

    // Função para mudar a cor do fundo da página
    $('#botao-trocar-cor').on('click', function() {
        if (corAtual) {
            $('body').addClass('light-mode'); // <-- Adiciona a classe de light mode
        } else {
            $('body').removeClass('light-mode'); // <-- Remove a classe de light mode
        }
        corAtual = !corAtual; // <-- Alterna o valor da variável
    })

    // Função para mudar o título principal da página via input
    $('#botao-alterar-texto').on('click', function() {
        let novoTexto = $('#input-novo-texto').val(); // <-- Pega o valor do campo de input

        if (novoTexto) {
            $('#titulo').text(novoTexto);
        } else {
            alert('Por favor, insira um texto válido!'); // <-- Alerta se o campo estiver vazio
        }
    })
});

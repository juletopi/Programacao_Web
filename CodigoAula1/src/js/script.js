// Span com atualização automática do ano para o rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// Event listener para o clique do usuário no botão do "Github"
document.getElementById('github-button-id').addEventListener('click', function() {
    // Impede o comportamento padrão do link
    event.preventDefault();
    // Exibindo mensagem de alerta e verificando a escolha do usuário
    if (confirm('⚠️⚠️⚠️✋😲 Calma aí meu consagrado, você será redirecionado para outra página.\r\n\n Deseja continuar meeesmo?🤔🤔🤔')) {
        // Se o usuário clicar em "OK", redireciona para o link do GitHub...
        window.location.href = 'https://github.com/juletopi';
    }
    // ...se clicar em "Cancelar", nada acontece e o usuário permanece na página
});

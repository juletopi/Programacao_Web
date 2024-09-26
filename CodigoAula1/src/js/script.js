window.addEventListener('scroll', function() {
    const parallaxContainer = document.querySelector('.parallax-container');
    let scrollPosition = window.scrollY; 
    parallaxContainer.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; 
});

const today = new Date(); // <-- Data atual
const birthday = new Date(today.getFullYear(), 8, 17); // <-- Data do meu aniversário, mês de setembro (8) e dia 17

// Verificando se o aniversário já aconteceu neste ano
if (
    today.getMonth() < 8 || // <-- Mês atual antes de setembro
    (today.getMonth() === 8 && today.getDate() < 17) // <-- Mês atual é setembro e o dia atual é antes do dia 17
) {
    birthday.setFullYear(today.getFullYear() - 1); // <-- Se o aniversário ainda não ocorreu, é ajustado para o ano passado
}
// Calcula a idade
let age = today.getFullYear() - birthday.getFullYear();

// Span com atualização da minha idade
document.getElementById('age').textContent = age;

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

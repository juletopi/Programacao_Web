/*
    function demostrarRegexCPF(cpf){
        const regex = /\d(3)\.\d(3).\d(3)\-\d(2)/;
        const resultado = regex.exec(cpf);
    
        if(resultado){
            console.log('Texto $(cpf)');
            console.log('CPF válido: ');
            console.log(resultado[0]);
        }else{
            console.log('Texto $(cpf)');
            console.log('CPF inválido: ');
        }
    }
*/

$(document).ready(function () {
    // Resetando mensagens de erro
    $('#meuFormulario').on('submit', function (event) {
        event.preventDefault();
        $('.form-control').removeClass('is-invalid');

        let isValid = true;

        // Validação do nome (apenas letras e espaços)
        const nome = $('#nome').val().trim();
        if (!/^[a-zA-Z\s]+$/.test(nome)) {
            $('#nome').addClass('is-invalid');
            isValid = false;
        }

        // Validação do email
        const email = $('#email').val().trim();
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }

        // Validação da senha
        const senha = $('#senha').val().trim();
        if (senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha)) {
            $('#senha').addClass('is-invalid');
            isValid = false;
        }

        // Validação da confirmação da senha
        const confirmarSenha = $('#confirmarSenha').val().trim();
        if (confirmarSenha !== senha) {
            $('#confirmarSenha').addClass('is-invalid');
            isValid = false;
        }

        // Máscara e validação do campo Telefone
        $('#telefone').on('input', function () {
            let telefone = $(this).val().replace(/\D/g, '').substring(0, 11);
            telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
            telefone = telefone.replace(/(\d{5})(\d{4})$/, '$1-$2');
            $(this).val(telefone);

            const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
            if (telefonePattern.test(telefone)) {
                $(this).removeClass('is-invalid').addClass('is-valid');
            } else {
                $(this).removeClass('is-valid').addClass('is-invalid');
            }
        });

        // Máscara e validação do campo CPF
        $('#cpf').on('input', function () {
            let cpf = $(this).val().replace(/\D/g, '').substring(0, 11);
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            $(this).val(cpf);

            if (validarCPF(cpf)) {
                $(this).removeClass('is-invalid').addClass('is-valid');
            } else {
                $(this).removeClass('is-valid').addClass('is-invalid');
            }
        });

        // Função de validação do CPF
        function validarCPF(cpf) {
            cpf = cpf.replace(/\D/g, '');
            if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

            let soma = 0, resto;
            for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
            resto = 11 - (soma % 11);
            let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
            if (digitoVerificador1 !== parseInt(cpf.charAt(9))) return false;

            soma = 0;
            for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
            resto = 11 - (soma % 11);
            let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;
            return digitoVerificador2 === parseInt(cpf.charAt(10));
        }

        // Validação final do formulário
        const form = $(this)[0];
        if (!form.checkValidity() || !isValid) {
            event.stopPropagation();
            $(form).addClass('was-validated');
        } else {
            alert('Formulário válido! Pronto para ser enviado.');
            this.submit();
        }
    });
});

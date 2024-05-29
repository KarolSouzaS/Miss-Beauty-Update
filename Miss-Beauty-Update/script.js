document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('txtNome').value;
    const cpf = document.getElementById('txtCPF').value;
    const dataNascimento = document.getElementById('txtDataNascimento').value;
    const email = document.getElementById('txtEmail').value;
    const telefone = document.getElementById('txtTelefone').value;
    const cep = document.getElementById('txtCEP').value;
    const numero = document.getElementById('txtNumero').value;
    const senha = document.getElementById('txtSenha').value;
    const confirmacaoSenha = document.getElementById('txtConfirmacaoSenha').value;

    // Validação do nome
    if (nome.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres.');
        return;
    }

    // Validação do CPF
    if (!/^\\d{11}$/.test(cpf)) {
        alert('Por favor, insira um CPF válido.');
        return;
    }

    // Validação da data de nascimento
    if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(dataNascimento)) {
        alert('Por favor, insira uma data de nascimento válida.');
        return;
    }

    // Validação do email
    if (!email.includes('@')) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Validação do telefone
    if (!/^\\d{10,11}$/.test(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Validação do CEP
    if (!/^\\d{8}$/.test(cep)) {
        alert('Por favor, insira um CEP válido.');
        return;
    }

    // Validação do número
    if (!/^\\d+$/.test(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    // Validação da senha
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // Validação da confirmação da senha
    if (senha !== confirmacaoSenha) {
        alert('A senha e a confirmação da senha não correspondem.');
        return;
    }

    alert('Formulário enviado com sucesso!');
});
// Função para exibir mensagem após envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe alerta com os dados enviados
    alert(`Mensagem enviada com sucesso!\n\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);

    // Limpa o formulário
    document.getElementById('contact-form').reset();
});
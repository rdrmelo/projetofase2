// minimercado/script.js

// Função para exibir a data e hora atual no console do navegador
function exibirDataHoraAtual() {
    const data = new Date();
    console.log("Data e Hora Atual:", data.toLocaleString('pt-BR'));
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', exibirDataHoraAtual);

// Função para exibir uma mensagem de boas-vindas
function exibirMensagemBoasVindas() {
    const mensagem = "Bem-vindo ao Mini Mercado!";
    console.log(mensagem);
    alert(mensagem);
}
// Seleciona os elementos do HTML
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = []; // Lista de amigos

// Função para validar se o nome contém apenas letras (sem números ou caracteres especiais)
function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Aceita letras maiúsculas, minúsculas e espaços
    return regex.test(nome);
}

// Função para adicionar um amigo
function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (!validarNome(nome)) {
        alert("O nome deve conter apenas letras e espaços. Sem números ou caracteres especiais!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);

    // Atualiza a lista de amigos no HTML
    const itemLista = document.createElement("li");
    itemLista.textContent = nome;
    listaAmigos.appendChild(itemLista);

    inputAmigo.value = ""; // Limpa o campo
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado no HTML
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

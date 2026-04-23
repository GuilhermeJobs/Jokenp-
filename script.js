const IMAGENS = {
    pedra: 'https://raw.githubusercontent.com/GuilhermeJobs/Jokenp-/refs/heads/main/Opcoes/1.png',
    papel: 'https://raw.githubusercontent.com/GuilhermeJobs/Jokenp-/refs/heads/main/Opcoes/2.png',
    tesoura: 'https://raw.githubusercontent.com/GuilhermeJobs/Jokenp-/refs/heads/main/Opcoes/3.png'
};

document.getElementById('img-pedra').src = IMAGENS.pedra;
document.getElementById('img-papel').src = IMAGENS.papel;
document.getElementById('img-tesoura').src = IMAGENS.tesoura;

let objetoA = ""; // Escolha do usuário

// Função para selecionar o card visualmente
function selectOption(opcao) {
    objetoA = opcao;
    
    // Resetar estilos de todos os cards
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Destacar o selecionado
    document.getElementById(`card-${opcao}`).classList.add('selected');
    
    // Habilitar o botão
    document.getElementById('btn-escolher').disabled = false;
}

function playGame() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const objetoB = opcoes[Math.floor(Math.random() * 3)]; // Escolha aleatória do sistema
    
    const msgElement = document.getElementById('game-message');
    
    // Lógica de Comparação solicitada
    if (objetoA == objetoB) {
        msgElement.innerText = "Empate!";
    }
    else if ((objetoA == "pedra") && (objetoB == "tesoura")) {
        msgElement.innerText = "Você venceu a partida!";
    }
    else if ((objetoA == "tesoura") && (objetoB == "papel")) {
        msgElement.innerText = "Você venceu a partida!";
    }
    else if ((objetoA == "papel") && (objetoB == "pedra")) {
        msgElement.innerText = "Você venceu a partida!";
    }
    else {
        msgElement.innerText = "Você perdeu a partida!";
    }

    showResult(objetoA, objetoB);
}

function showResult(user, cpu) {
    // Esconde tela de seleção e mostra resultado
    document.getElementById('selection-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    // Atualiza imagens do resultado
    document.getElementById('user-result-img').innerHTML = `<img src="${IMAGENS[user]}">`;
    document.getElementById('cpu-result-img').innerHTML = `<img src="${IMAGENS[cpu]}">`;
}

function resetGame() {
    objetoA = "";
    document.getElementById('btn-escolher').disabled = true;
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    
    document.getElementById('selection-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
}
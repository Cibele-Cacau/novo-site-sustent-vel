// Função para mostrar a mensagem reflexiva ao clicar no botão
const botao = document.getElementById('btn-mensagem');
const mensagem = document.getElementById('mensagem-oculta');

botao.addEventListener('click', () => {
    // Revela a mensagem
    mensagem.classList.toggle('hidden');
    
    // Muda a cor do botão para mostrar interação
    botao.style.backgroundColor = "#dcedc1";
    botao.innerText = "Reflexão Ativada!";
});

// Efeito de clique nos painéis para mudar a cor de fundo do site
const lados = document.querySelectorAll('.side');

lados.forEach(lado => {
    lado.addEventListener('click', () => {
        // Quando clicar no painel, o fundo do "hero" muda para combinar
        const corDeFundo = window.getComputedStyle(lado).backgroundColor;
        document.querySelector('.hero').style.backgroundColor = corDeFundo;
        alert("Você selecionou um ponto de vista. Analise as consequências.");
    });
});
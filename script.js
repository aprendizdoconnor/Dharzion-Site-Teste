const mensagem = "Bem-vindo ao site do canal Dharzion!\nAqui você encontra vídeos sobre simulators do Roblox e muito conteúdo divertido.";
const elemento = document.getElementById("boas-vindas");

let i = 0;

function digitar() {
    if (i < mensagem.length) {
        elemento.innerHTML += mensagem.charAt(i);
        i++;
        setTimeout(digitar, 50);
    }
}

digitar();


//Definição pelo id do botão
const botao = document.getElementById("kian");

//Detecção do mause sobre o botão
botao.addEventListener("mouseenter", () => {
    botao.style.backgroundColor = "red";
    botao.style.color = "white";
});
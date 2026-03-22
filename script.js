//Definição pelo id do botão e da área onde o botão pode se mover
const botao = document.getElementById("kian");
let area = document.querySelector(".area");

//Detecção do mause sobre o botão
botao.addEventListener("mouseenter"  || "click", () => {  
   //Novo x
   const minX = 100;
    const maxX = area.offsetWidth - botao.offsetWidth - 100;
    const novoX = Math.random() * (maxX - minX) + minX;
    //Novo y
    const minY = 100;
    const maxY = area.offsetHeight - botao.offsetHeight - 100;
    const novoY = Math.random() * (maxY - minY) + minY;
    //Atualização da posição do botão
    botao.style.left = `${novoX}px`;
    botao.style.top = `${novoY}px`;
});
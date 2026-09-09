const personagemWrap = document.getElementById("personagemWrap");
const personagem = document.getElementById("personagem");
const palco = document.getElementById("palco");
const btnIniciar = document.getElementById("btnIniciar");
const instrucao = document.getElementById("instrucao");

let mouseX = 0;
let mouseY = 0;

let atualX = 0;
let atualY = 0;

let ativo = false;


/* Detecta o movimento do mouse */

document.addEventListener("mousemove", (event) => {

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    mouseX = (event.clientX / largura - 0.5);
    mouseY = (event.clientY / altura - 0.5);

});


/* Animação da personagem */

function animarPersonagem() {

    atualX += (mouseX - atualX) * 0.08;
    atualY += (mouseY - atualY) * 0.08;

    const movimentoX = atualX * 70;
    const movimentoY = atualY * 35;

    const inclinacao = atualX * 10;

    if (ativo) {

        personagemWrap.style.transform =
            `translate3d(${movimentoX}px, ${movimentoY}px, 0)
             rotate(${inclinacao}deg)`;

    }

    requestAnimationFrame(animarPersonagem);
}


animarPersonagem();


/* Botão iniciar */

btnIniciar.addEventListener("click", () => {

    ativo = true;

    btnIniciar.innerHTML = "✦ Experiência Ativada";

    instrucao.textContent =
        "Mova o mouse pela tela e observe a personagem acompanhar seus movimentos.";

    personagem.classList.add("experiencia-ativa");

});


/* Efeito quando passa o mouse na personagem */

personagem.addEventListener("mouseenter", () => {

    if (!ativo) return;

    personagem.style.filter =
        "drop-shadow(0 15px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(210,140,255,0.8))";

});


/* Retorna ao normal */

personagem.addEventListener("mouseleave", () => {

    if (!ativo) return;

    personagem.style.filter =
        "drop-shadow(0 15px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 25px rgba(180,100,255,0.5))";

});


/* Quando redimensionar a tela */

window.addEventListener("resize", () => {

    mouseX = 0;
    mouseY = 0;

});

const personagemWrap = documento.getElementById("personagemWrap");
const personagem = documento.getElementById("personagem");
const palco = document.getElementById("palco");
const btnIniciar = document.getElementeById("btnIniciar");
const instrucao = document.getElementById("instrucao");

let mouseX = 0;
let mouseY = 0;

let atualX = 0;
let atualY = 0;

let ativo = false;

document.addEventListener("mousemove", (event) => {
  const largura = window.innerWidth;
  const altura = window.innerHeight;

  mouseX = (event.clientX / largura - 0.5);
  mouseY = (event.clientY / altura - 0.5);

});

function animarPersonagem() {

atualX += (mouseX - atualX) * 0.08;
  atualY += (mouseY - atualY) * 0.08;

const movimentoX = atualX * 45;
  const movimentoY = atualY * 25;

const inclinacao = atualX * 8;

if (ativo) {

  personagemWrap.style.transform =
     `translate3d(${movimentoX}px, ${movimentoY}px, 0)
     rotate(${inclinacao}deg)`;

}
  requestAnimationFrame(animarPersonagem);
}
animarPersonagem();

btonIniciar.addEventListener("click", () => {
  ativo = true;

  btnIniciaar.innerHTML = "✦ Experiência Ativada";

  instrucao.textContent =
    "mova o mouse pela tela e observe a personagem acompanhar seus movimentos.";

  personagem.classList.add("experiencia-ativa");
  
});

personagem.addEventListener("mouseenter", () => {
  if (!ativo) return;

  personagem.style.filter =
    "drop-shadow(0 15px 30px rgba(0,0,0,0.8) drop-shadow(0 0 40px rgba(210,140,255,0.7))";

});

personagem.addEventListener("mouseleave", () => {

                            if (!ativo) return;
  personagem.style.filter =
    "drop-shadow(0 15px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 25px rgba(180,100,255,0.4))";

});

window.addEventListener("resize", () => {

  mouseX = 0;
  mouseY = 0;
  
});

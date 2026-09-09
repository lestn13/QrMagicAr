const personagemWrap =
    document.getElementById("personagemWrap");

const personagem =
    document.getElementById("personagem");

const palco =
    document.getElementById("palco");

const btnIniciar =
    document.getElementById("btnIniciar");

const instrucao =
    document.getElementById("instrucao");


/* =========================
   CONTROLE
========================= */

let mouseX = 0;
let mouseY = 0;

let atualX = 0;
let atualY = 0;

let ativo = false;

let quadroAtual = 4;


/* =========================
   POSIÇÕES DOS 9 QUADROS
========================= */

const quadros = [

    "0% 0%",
    "50% 0%",
    "100% 0%",

    "0% 50%",
    "50% 50%",
    "100% 50%",

    "0% 100%",
    "50% 100%",
    "100% 100%"

];


/* =========================
   MOUSE
========================= */

document.addEventListener("mousemove", (event) => {

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    mouseX =
        (event.clientX / largura - 0.5);

    mouseY =
        (event.clientY / altura - 0.5);

});


/* =========================
   MOVIMENTO NATURAL
========================= */

function animarPersonagem() {

    atualX +=
        (mouseX - atualX) * 0.035;

    atualY +=
        (mouseY - atualY) * 0.035;


    const movimentoX =
        atualX * 45;

    const movimentoY =
        atualY * 22;

    const inclinacao =
        atualX * 5;


    if (ativo) {

        personagemWrap.style.transform =
            `translate3d(
                ${movimentoX}px,
                ${movimentoY}px,
                0
            )
            rotate(${inclinacao}deg)`;

    }


    requestAnimationFrame(animarPersonagem);
}

animarPersonagem();


/* =========================
   TROCA DE EXPRESSÕES
========================= */

function mudarExpressao() {

    if (!ativo) return;


    /*
       Movimentos reais e suavis 
       para não ficar uma sequência mecânica.
    */

    const possibilidades = [
        0,
        1,
        2,
        4,
        5,
        6,
        7,
        8
    ];


    const nova =
        possibilidades[
            Math.floor(
                Math.random() *
                possibilidades.length
            )
        ];


    quadroAtual = nova;


    personagem.style.backgroundPosition =
        quadros[quadroAtual];


    /*
       próximo movimento em tempo aleatório
    */

    const proximoTempo =
        1800 +
        Math.random() * 2200;


    setTimeout(
        mudarExpressao,
        proximoTempo
    );
}


/* =========================
   BOTÃO
========================= */

btnIniciar.addEventListener(
    "click",
    () => {

        ativo = true;


        btnIniciar.innerHTML =
            "<span>✦</span> Experiência Ativada";


        instrucao.textContent =
            "Mova o mouse pela tela e observe a personagem reagir aos seus movimentos.";


        personagem.classList.add(
            "experiencia-ativa"
        );


        mudarExpressao();

    }
);


/* =========================
   INTERAÇÃO COM A PERSONAGEM
========================= */

personagem.addEventListener(
    "mouseenter",
    () => {

        if (!ativo) return;


        personagem.style.filter =
            "drop-shadow(0 18px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 45px rgba(220,130,255,0.9))";

    }
);


personagem.addEventListener(
    "mouseleave",
    () => {

        if (!ativo) return;


        personagem.style.filter =
            "drop-shadow(0 18px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 30px rgba(180,100,255,0.5))";

    }
);


/* =========================
   REDIMENSIONAMENTO
========================= */

window.addEventListener(
    "resize",
    () => {

        mouseX = 0;
        mouseY = 0;

    }
);

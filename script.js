let listaPerguntas = [
    {
        "Pegunta" : "Qual é o cérebro do computador?",
        "AlternativaA" : "",
        "AlternativaB" : "",
        "AlternativaC" : "",
        "AlternativaD" : "",
        "RespostaCorreta" : "AlternativaB"
    },
    {
        "Pegunta" : "Qual é a parte do processador encarregada exclusivamente de realizar operações matemáticas e decisões lógicas?",
        "AlternativaA" : "oi",
        "AlternativaB" : "oii",
        "AlternativaC" : "oiii",
        "AlternativaD" : "oiiii",
        "RespostaCorreta" : "AlternativaB"
    },
    {
        "Pegunta" : "texto3",
        "AlternativaA" : "oia",
        "AlternativaB" : "oiia",
        "AlternativaC" : "oiiia",
        "AlternativaD" : "oiiiia",
        "RespostaCorreta" : "AlternativaB"
    },
    {
        "Pegunta" : "texto4",
        "AlternativaA" : "",
        "AlternativaB" : "",
        "AlternativaC" : "",
        "AlternativaD" : "",
        "RespostaCorreta" : "AlternativaB"
    },
    {
        "Pegunta" : "texto5",
        "AlternativaA" : "",
        "AlternativaB" : "",
        "AlternativaC" : "",
        "AlternativaD" : "",
        "RespostaCorreta" : "AlternativaB"
    },
]

let elementoAtual = null;
let respostaAtual = "";

let erros = 0;
let acertos = 0;
let pergunta = 0;

function clicarBotão (alternativa){
    if (elementoAtual !== null) {
        elementoAtual.style.backgroundColor = "black";
        elementoAtual.style.color = "white";
        elementoAtual.style.transform = "scale(1.0)";
    }

    alternativa.style.backgroundColor = "yellow";
    alternativa.style.color = "black";
    alternativa.style.transform = "scale(1.075)";

    elementoAtual = alternativa;
    respostaAtual = alternativa.id;
}

function responder(){
    if (respostaAtual == listaPerguntas[pergunta].RespostaCorreta){
        acertos ++;
    } else {
        erros ++;
    }

    pergunta++;
    proximaPergunta();
}

function proximaPergunta(){
    textoPergunta.innerHTML = listaPerguntas[pergunta].Pegunta;
    AlternativaA.innerHTML = listaPerguntas[pergunta].AlternativaA;
    AlternativaB.innerHTML = listaPerguntas[pergunta].AlternativaB;
    AlternativaC.innerHTML = listaPerguntas[pergunta].AlternativaC;
    AlternativaD.innerHTML = listaPerguntas[pergunta].AlternativaD;
    QuestaoDisplay.innerHTML = `Questão : ${pergunta} / ${listaPerguntas.length}`;
}
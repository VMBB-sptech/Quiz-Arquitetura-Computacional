let Perguntas = [
    {
        "Pegunta" : "texto",
        "AlternativaA" : "",
        "AlternativaB" : "",
        "AlternativaC" : "",
        "AlternativaD" : "",
        "RespostaCorreta" : "AlternativaB"
    },
    {
        "Pegunta" : "texto2",
        "AlternativaA" : "",
        "AlternativaB" : "",
        "AlternativaC" : "",
        "AlternativaD" : "",
        "RespostaCorreta" : "AlternativaB"
    },
    {
        "Pegunta" : "texto3",
        "AlternativaA" : "",
        "AlternativaB" : "",
        "AlternativaC" : "",
        "AlternativaD" : "",
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
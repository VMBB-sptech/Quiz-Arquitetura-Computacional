let listaPerguntas = [
    {
        "Pergunta": "Qual é o cérebro do computador?",
        "AlternativaA": "Memória RAM",
        "AlternativaB": "CPU",
        "AlternativaC": "Placa-mãe",
        "AlternativaD": "Fonte",
        "RespostaCorreta": "AlternativaB"
    },
    {
        "Pergunta": "Qual é a parte do processador encarregada exclusivamente de realizar operações matemáticas e decisões lógicas?",
        "AlternativaA": "Registradores",
        "AlternativaB": "Cache",
        "AlternativaC": "ULA",
        "AlternativaD": "Barramento",
        "RespostaCorreta": "AlternativaC"
    },
    {
        "Pergunta": "Como são chamados os processadores que possuem vários núcleos físicos de processamento em um único chip para permitir o trabalho simultâneo?",
        "AlternativaA": "Multi-core",
        "AlternativaB": "Monocore",
        "AlternativaC": "Single-core",
        "AlternativaD": "Threads",
        "RespostaCorreta": "AlternativaA"
    },
    {
        "Pergunta": "Quais são as linhas de processadores fabricadas pela Intel, conhecidas pelo o Hyper-Threading?",
        "AlternativaA": "Celeron e Pentium",
        "AlternativaB": "Core i5 e i7",
        "AlternativaC": "Atom e Xeon",
        "AlternativaD": "Core i3 e Celeron",
        "RespostaCorreta": "AlternativaB"
    },
    {
        "Pergunta": "Quais são as memórias de altíssima velocidade que ficam alocadas fisicamente dentro da CPU?",
        "AlternativaA": "Registradores",
        "AlternativaB": "SSD",
        "AlternativaC": "Memória RAM",
        "AlternativaD": "HD",
        "RespostaCorreta": "AlternativaA"
    },
    {
        "Pergunta": "Qual é o nome da memória principal e volátil de um computador, onde ficam guardados os dados e aplicativos que estão em uso no exato momento?",
        "AlternativaA": "ROM",
        "AlternativaB": "Cache L3",
        "AlternativaC": "RAM",
        "AlternativaD": "Memória Flash",
        "RespostaCorreta": "AlternativaC"
    },
    {
        "Pergunta": "Que tipo de memória é responsável por guardar as instruções de inicialização de fábrica, como a BIOS?",
        "AlternativaA": "ROM",
        "AlternativaB": "RAM",
        "AlternativaC": "SSD",
        "AlternativaD": "Registrador",
        "RespostaCorreta": "AlternativaA"
    },
    {
        "Pergunta": "Qual tecnologia de memória não volátil, que pode ser apagada e reescrita?",
        "AlternativaA": "PROM",
        "AlternativaB": "Flash",
        "AlternativaC": "RAM",
        "AlternativaD": "DRAM",
        "RespostaCorreta": "AlternativaB"
    },
    {
        "Pergunta": "Qual é o termo geral utilizado para descrever o armazenamento secundário de altíssima capacidade destinado a guardar arquivos de forma permanente?",
        "AlternativaA": "Memória Volátil",
        "AlternativaB": "Memória Cache",
        "AlternativaC": "Memória de Massa",
        "AlternativaD": "Registradores",
        "RespostaCorreta": "AlternativaC"
    }
]

let elementoAtual = null;
let respostaAtual = "";

let erros = 0;
let acertos = 0;
let pergunta = 0;

function clicarBotão (alternativa){
    resetarBotões();

    alternativa.style.backgroundColor = "yellow";
    alternativa.style.color = "black";
    alternativa.style.transform = "scale(1.075)";

    elementoAtual = alternativa;
    respostaAtual = alternativa.id;
}

function responder(){

    if(respostaAtual == null || respostaAtual == ""){
        alert(`selecione pelo menos uma alternativa!`);
    } else {
        if (respostaAtual == listaPerguntas[pergunta].RespostaCorreta){
            acertos ++;
        } else {
            erros ++;
        }

        if(pergunta < listaPerguntas.length){
            pergunta++;
        }
        proximaPergunta();
    }
}

function proximaPergunta(){
    resetarBotões();

    elementoAtual = null;
    respostaAtual = "";

    if(pergunta < listaPerguntas.length){
        preencherBotoes(pergunta);
    } else {
        finalizarQuiz();
    }
}

function preencherBotoes (index) {
    QuestaoDisplay.innerHTML = `Questão : ${pergunta + 1} / ${listaPerguntas.length}`;
    textoPergunta.innerHTML = listaPerguntas[index].Pergunta;
    AlternativaA.innerHTML = listaPerguntas[index].AlternativaA;
    AlternativaB.innerHTML = listaPerguntas[index].AlternativaB;
    AlternativaC.innerHTML = listaPerguntas[index].AlternativaC;
    AlternativaD.innerHTML = listaPerguntas[index].AlternativaD;
}

function resetarBotões () {
    if (elementoAtual !== null) {
        elementoAtual.style.backgroundColor = "black";
        elementoAtual.style.color = "white";
        elementoAtual.style.transform = "scale(1.0)";
    }
}

function iniciarQuiz() {
    divMaior.innerHTML = `
    <h3 id="QuestaoDisplay">Questão : 0/0</h3>

    <div style="padding: 20px;" id="textoPergunta">Pergunta</div>
        
        <div class="caixa-itermédio" style="gap: 10px;">
            <div class="caixa-menor" style="color: white;" id="AlternativaA" onclick="clicarBotão(this)">
                texto
            </div>

            <div class="caixa-menor" style="color: white;" id="AlternativaB" onclick="clicarBotão(this)">
                texto2
            </div>

            <div class="caixa-menor" style="color: white;" id="AlternativaC" onclick="clicarBotão(this)">
                texto3
            </div>

            <div class="caixa-menor" style="color: white;" id="AlternativaD" onclick="clicarBotão(this)">
                texto4
            </div>

            <div class="caixa-menor-resposta" style="color: white;" onclick="responder()">
                Responder
            </div>
        </div> 
    `;

    preencherBotoes(0);
}

function finalizarQuiz () {
    divMaior.innerHTML = `
        <span>Parabens!! você acertou ${(acertos/ (acertos + erros) * 100).toFixed(0)}% do Quiz</span>

        <span> Acertos: ${acertos}</span> 
        
        <span> Erros: ${erros}</span>

        <span> quer tentar novamente? </span>

        <div class="botaoIniciar" style="height: 12.5%;" onclick="tentarNovamente()";>
            Tente Novamente
        </div>
    `;
}

function tentarNovamente () {

    elementoAtual = null;
    respostaAtual = "";

    pergunta = 0;
    erros = 0;
    acertos = 0;

    iniciarQuiz();
}
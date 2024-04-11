let numeroLimite = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = geradorNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial () { 
exibirTextoNaTela("h1","Jogo Do Número Secreto");
exibirTextoNaTela("p","Escolha Um Número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Você acertou");
        let palavratentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa} !!!`;
        exibirTextoNaTela("p", mensagemTentativas); 
        document.getElementById("reiniciar").removeAttribute("disabled"); 
    } else { 
        if ( chute > numeroSecreto) { 
            exibirTextoNaTela("p", "O seu chute foi maior que o número secreto");
        }
        else {  
            exibirTextoNaTela("p", "O seu chute foi menor que o número secreto");
        }
        tentativas++; 
        limparCampo() 
    }
}

function geradorNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
   let quantidadeDeElementosNaLista =  listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == 3) { 
    listaDeNumerosSorteados = [];
   }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ 
        return geradorNumeroAleatorio(); 
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
    
}

function reiniciarJogo() {
    numeroSecreto = geradorNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true); 
    }
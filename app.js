let listaDeNumeroSegreto = [];
let numerolimite = 20;
let NumeroSegreto = numeroaleatorio();
let tentativas = 1;
console.log (NumeroSegreto);
function exibirTextoNaTela (tag , texto) {
    let campo = document.querySelector (tag);
    responsiveVoice.speak(texto , "Portuguese Female", {rate:1.2});
campo.innerHTML = texto;
}
function   exibirMenssagemInicial () {
    exibirTextoNaTela ("h1" , "número secreto");
    exibirTextoNaTela ("p" , "escolha o numero entre 1 e 20");
}

exibirMenssagemInicial ()

function verificarChute() {
    let chute = document.querySelector ("input").value;
     
    if (chute == NumeroSegreto) {
        exibirTextoNaTela ("h1" , "Acertou!")
        let palavratentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `descobriu o número parabéns com ${tentativas} ${palavratentativas}!`
        exibirTextoNaTela ("p" , mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > NumeroSegreto) {
            exibirTextoNaTela ("p" , "O número é menor");
         } else {
            if (chute < NumeroSegreto)
            exibirTextoNaTela ("p" , "O número é maior");
        }
        limparcampo();
        tentativas++;
      } 
    
}
function numeroaleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadedeelementonalista = listaDeNumeroSegreto.length;
     if(quantidadedeelementonalista == numerolimite ) {
        listaDeNumeroSegreto = []
     }
    if(listaDeNumeroSegreto.includes(NumeroEscolhido)) {
        return numeroaleatorio();
    } else {
        listaDeNumeroSegreto.push(NumeroEscolhido);
        console.log(listaDeNumeroSegreto);
        return NumeroEscolhido;
    }
}  

function  limparcampo() {
    chute = document.querySelector ("input");
    chute.value = "";
}

function  reiniciarjogo() {
    NumeroSegreto = numeroaleatorio();
    limparcampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById("reiniciar").setAttribute ("disabled" , true);
}
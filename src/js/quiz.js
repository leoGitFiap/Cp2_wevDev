alert("Vamos conhecer sobre bikes!!!");

//TROCAR A COR DE FUNDO
function trocar(cor){
    document.body.style.background = cor;
}
const perguntas =[
    {
        pergunta:"Pergunta numero 1 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"a"
    },
    {
        pergunta:"Pergunta numero 2 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"a"
    },
    {
        pergunta:"Pergunta numero 3 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"b"
    },
    {
        pergunta:"Pergunta numero 4 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"B"
    },
    {
        pergunta:"Pergunta numero 5 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"c"
    },
    {
        pergunta:"Pergunta numero 6 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"c"
    },
    {
        pergunta:"Pergunta numero 7 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"a"
    },
    {
        pergunta:"Pergunta numero 8 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"b"
    },
    {
        pergunta:"Pergunta numero 9 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"a"
    },
    {
        pergunta:"Pergunta numero 10 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"c"
    },
]

let acertos =0;

for (let i =0; i <perguntas.length; i++){
    const respostaUsuario =prompt(perguntas[i].pergunta)
    
if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase()){
    acertos++;
}
}
document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas`)
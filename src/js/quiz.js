alert("Vamos conhecer sobre bikes!!!");

//TROCAR A COR DE FUNDO
function trocar(cor){
    document.body.style.background = cor;
}
const perguntas = [
    {
        pergunta: "Qual é a principal parte da bicicleta que suporta o ciclista?\n a) Guidão\n b) Selim\n c) Pedais",
        resposta: "b"
    },
    {
        pergunta: "Qual é o componente que permite ao ciclista mudar de marcha?\n a) Freio\n b) Câmbio\n c) Roda",
        resposta: "b"
    },
    {
        pergunta: "O que é um pneu de bicicleta mais largo normalmente usado para terrenos irregulares?\n a) Pneu slick\n b) Pneu de estrada\n c) Pneu de mountain bike",
        resposta: "c"
    },
    {
        pergunta: "Qual é a parte da bicicleta que ajuda a parar a roda?\n a) Eixo\n b) Freio\n c) Corrente",
        resposta: "b"
    },
    {
        pergunta: "Como se chama a bicicleta projetada para corridas em estrada?\n a) Bicicleta de passeio\n b) Bicicleta de montanha\n c) Bicicleta de estrada",
        resposta: "c"
    },
    {
        pergunta: "O que é necessário para pedalar de forma eficiente?\n a) Altura do guidão\n b) Ajuste do selim\n c) Cor do quadro",
        resposta: "b"
    },
    {
        pergunta: "Qual é o sistema que conecta os pedais à roda traseira?\n a) Corrente\n b) Disco\n c) Aro",
        resposta: "a"
    },
    {
        pergunta: "O que é a 'manutenção preventiva' em bicicletas?\n a) Limpeza das roupas do ciclista\n b) Verificação e ajuste de componentes antes de um problema surgir\n c) Pintura da bicicleta",
        resposta: "b"
    },
    {
        pergunta: "Qual é a idade mínima recomendada para usar uma bicicleta sem rodinhas?\n a) 2 anos\n b) 5 anos\n c) 8 anos",
        resposta: "b"
    },
];

let acertos =0;

for (let i =0; i <perguntas.length; i++){
    const respostaUsuario =prompt(perguntas[i].pergunta)
    
if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase()){
    acertos++;
}
}
document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas`)
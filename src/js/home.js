// alert("Seja bem vindo!!!");

//TROCAR A COR DE FUNDO
function trocar(cor){
    document.body.style.background = cor;
}
let imagens =[
    "src/assets/bike1.jpeg",
    "src/assets/bike2.jpg",
    "src/assets/bike3.jpg"
];
let i=0;
let time =3000;

function slideShow(){
    document.getElementById("imagehome").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)  
    }
    slideShow();
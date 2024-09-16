const random = Math.round(Math.random()*10);
let resposta = 0
let i = 0;
console.log(random)
while(resposta !== random){
    resposta = prompt("Tente acertar o número entre 1 e 10!")
    if(resposta == random) {
        alert("Parabéns, o número correto é " +random)
        break;
    } else{alert("Errado! Tente novamente...")}
}
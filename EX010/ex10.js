function ex10(){
    var palavras = Array();
    var contador = 0;
    var resp = "";
    var contagem = 0;

    do{
        palavras[contador] = prompt("Digite uma palavra");
        resp = prompt("Deseja digitar mais uma palavra?").toLowerCase()
        contador++;
    }while(resp==="sim");

    var palavraEscolhida = prompt("Qual palavra você deseja verificar?");
    palavras.forEach(palavras => {
        if(palavras === palavraEscolhida){
            contagem++;
        }
    })
    alert("A quantidade de palavras repetidas é: "+contagem);
}
ex10()
function ex9(){
    const vetor = [1,23,43,2,3];
    const numero_especifico = parseInt(prompt("Digite o número que você deseja comparar"))
    const novo_vetor = [];
    for (let i=0; i<vetor.length; i++){
        if (vetor[i]>numero_especifico){
            novo_vetor.push(vetor[i]);
        }
    }
    alert(novo_vetor);
}
ex9()
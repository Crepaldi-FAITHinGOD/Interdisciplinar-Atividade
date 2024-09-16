let soma = 0;


do{ numero=parseInt(prompt("Digite um número inteiro (0 para terminar):"),10);
    soma += numero;}
    while (numero !== 0);
alert("A soma de todos os números inseridos é: "+soma);

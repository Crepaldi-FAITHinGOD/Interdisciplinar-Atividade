// Solicita a idade do usuário
const idade = parseInt(prompt("Por favor, insira sua idade:"));

// Verifica se a entrada é um número válido
if (isNaN(idade)) {
    alert("Por favor, insira um número válido para a idade.");
} else {
    // Determina a faixa etária com base na idade
    let faixaEtaria;
    if (idade >= 0 && idade <= 12) {
        faixaEtaria = "criança";
    } else if (idade >= 13 && idade <= 17) {
        faixaEtaria = "adolescente";
    } else if (idade >= 18 && idade <= 64) {
        faixaEtaria = "adulto";
    } else if (idade >= 65) {
        faixaEtaria = "idoso";
    } else {
        faixaEtaria = "idade inválida";
    }

    // Exibe a mensagem para o usuário
    alert(`Você é ${faixaEtaria}.`);
}
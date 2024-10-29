function armazenaValor() {
    
    //armazenando input do usuário
    var userInput = document.getElementById("userInput").value;

    //exibe o valor armazenado 
    console.log("O valor da variável é: " +userInput);

    //atualizando conteúdo
    document.getElementById("valorInserido").innerHTML = "O valor inserido é: " + userInput

}


function aplicarEstilos()
{
    //atribuindo e criando uma variável de highlit para utilizar com o classlist.toggle
    let highlightElementoParaEstilizar = document.getElementById("elementoParaEstilizar"); 

    //declarando o classlist com a classe highlightElementoParaEstilizar presente no arquivo css
    highlightElementoParaEstilizar.classList.toggle("highlightElementoParaEstilizar")

}

function adicionarBackground()
{
    //atribuindo uma variável ao elemento do ID "imagem para estilizar"
   let estilizandoImagem = document.getElementById("imagemParaEstilizar")
   let estilizandoh1 = document.getElementById("h1")

   //estilizando o h1 assim que clicar no botão para que ele apareça mesmo com a imagem de fundo. Ou seja: tanto a imagem quanto o H1 serão alterados ao clicar
      estilizandoh1.classList.toggle("highlighth1")
   //incluindo a imagem de fundo através da class highlight
   estilizandoImagem.classList.toggle("highlight")
   
}
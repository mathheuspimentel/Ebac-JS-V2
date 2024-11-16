//criando as variáveis
var marca = 'BYD'
var ano = 2024
var comprar = true

console.log(`Os tipos das variáveis são: Var marca: ${typeof marca}, var ano: ${typeof ano} e var comprar: ${typeof comprar}. Os seus valores são ${marca}, ${ano} e ${comprar}, respectivamente`)

//criando classe de um objeto
class carro{
    //definindo os atributos a serem passados
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    //método criado para a exibição dos valores atribuídos
    exibindo(){
        return `A marca é ${this.marca}, o ano é ${this.ano} e o modelo é ${this.modelo}`;
       
    }
}


//criando instância do objeto com os valores atribuídos de cada propriedade
const valores = new carro('BYD','BYD Mini', 2024)

//exibindo as propriedades no console
//lembrete: sempre incutir os valores no método utlizando os parênteses "()". Exemplo: exibindo(). Caso faça sem os parêntes, será exibido literalmente a função construída.
console.log(valores.exibindo());

//adicionando uma nova propriedade no objeto e atribuindo um valor
carro['cor'] = 'cinza'
//exibindo a nova propriedade e seu valor no console
console.log(`A nova propriedade foi cor e o seu valor atribuído foi ${carro.cor.toUpperCase()}`)

//atualizando os valores da propriedade ano para 2022
carro.ano = 2022;

//verificando e exibindo a mudança através do console 
console.log(`O valor da propriedade ano foi alterado para ${carro.ano}`);


//tipos de dados e operações
function numeros(numero1, numero2) {
    
    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;

return `Os números são ${numero1} e ${numero2}. Os resultados das operações são Soma: ${soma}, subtracao: ${subtracao}, Multiplicação: ${multiplicacao} e divisão: ${divisao.toFixed(2)}`
}


//chamando a função números para que possamos exibir seus valores. IMPORTANTE: NECESSÁRIO INCLUIR OS VALORES PARA TESTE.
console.log(numeros(4,5));
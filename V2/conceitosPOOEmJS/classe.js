// criar uma classe chmada retangulo
// ela deve conter as propriedades: largura e altura
//crie um metodo para calcular área

class retangulo //classe criada
{
    //criando os dois parâmetros dentro da classe
    constructor(largura, altura){
        this.largura = largura //propriedade largura
        this.altura = altura //propriedade altura
       }
    
    //método para calcular
    calculararea(){

        return this.largura * this.altura
        
    }
}   

//criando instância da classe retangulo, chamando o método calculararea e demonstrando para o usuário 
//passo a passo: estou definindo uma variável que irá criar uma nova (new) instância na classe retangulo, em que a largura e a altura serão 5 e 3, respectivamente.
//posteriormente estou apresentando o resultado para o usuário, chamando a o método calculararea dentro da instância já criada com os valores citados sendo passados dentro da classe
const retangular = new retangulo(5, 3);
console.log(retangular.calculararea());




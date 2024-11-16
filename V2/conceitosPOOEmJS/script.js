//Definição de classes
class pessoa{
    constructor(nome, idade){
        this.nome = nome //propriedade da classe
        this.idade = idade //propriedade da classe
    }

    //método
    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade}`);
    }
}

//criando uma instância da classe pessoa
const pessoal = new pessoa('João', 80);
pessoal.cumprimentar(); //chamando o método da instância
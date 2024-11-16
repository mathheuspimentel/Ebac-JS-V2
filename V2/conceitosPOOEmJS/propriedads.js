//crie uma classe "aluno"
//       ela deve ter três propriedades: nome, idade e notas
//crie três métodos
//      adicionar notas, calcular média, escrever
//crie uma instância com valores de exemplo


class aluno{
    constructor (nome, idade){
        
        //aqui estou atribuindo valores a cada uma das propriedades acima
        this.nome = nome
        this.idade = idade
        this.notas = [];

    }
    //unica coisa que o método abaixo faz é adicionar mais notas dentro do array
    adicionarnotas(nota){
        //acessando e inserindo a nota que tivermos através do push
        this.notas.push(nota)

    }

    calcularmedia(){    
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0)
        return soma / this.notas.length;
        //dividindo o valor total pelo tamanho do array (quantidade de valores)

    }

    descrever(){
        //na linha abaixo teremos o seguinte processo ocorrendo: se o o tamanho 
        const media  = this.notas.length ? this.calcularmedia().toFixed(2):0;
        return `nome: ${this.nome}, idade: ${this.idade}, média: ${media}`


    }

    
}

//criando a instancia para mostrar au usuario
const aluno1 = new aluno('João', 20)
aluno1.adicionarnotas(8);  
aluno1.adicionarnotas(7);
aluno1.adicionarnotas(9);
aluno1.adicionarnotas(8);  
aluno1.adicionarnotas(1);
aluno1.adicionarnotas(9);

console.log(aluno1.descrever())

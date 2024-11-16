//criar a classe livro com três atributos
        //titulo, autor e numero de paginas
//adicionar os métodos
        //descrever e atualizar páginas

class livro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }


    descrever(){
        return `Tiulo: ${this.titulo}, autor: ${this.autor}, número de páginas: ${this.paginas}`
    }

    atualizarpaginas(novonumero){
        //variável página recebendo um novo valor
        this.paginas = novonumero;

    }

}
const meulivro = new livro('A revolução do código', 'Matheus Silva', 300)

console.log(meulivro.descrever());

//declarando o novo valor de páginas e atribuindo à novonumero
meulivro.atualizarpaginas(299);

console.log(meulivro.descrever ());
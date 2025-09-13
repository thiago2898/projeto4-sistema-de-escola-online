const Nota = require("./Nota")
const Usuario = require("./Usuario")

class Aluno extends Usuario {
    #notas = []

    constructor(nome, idade) {
        super(nome, idade)
    }

    get notas() {
        return this.#notas
    }

    adicionarNota(nota) {
        if (nota instanceof Nota) {
            this.#notas.push(nota)
        } else {
            console.log("Erro: Tentativa falha de inserir objeto na lista notas não identificado como uma Nota")
        }
    }

    acessoPainel() {
        return "Painel do Aluno: consultar notas e disciplinas"
    }
}

module.exports = Aluno
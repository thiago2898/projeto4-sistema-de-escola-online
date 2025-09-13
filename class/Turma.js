const Aluno = require("./Aluno")
const Disciplina = require("./Disciplina")

class Turma {
    static alunos = []
    static disciplinas = []

    constructor(nome) {
        this.nome = nome
        this.disciplinas = Turma.disciplinas
        this.alunos = Turma.alunos
    }

    adicionarDisciplina(materia) {
        if (materia instanceof Disciplina) {
            Turma.disciplinas.push(materia)
        } else {
            console.log("Erro: Tentativa de inserir objeto não identificado como matéria escolar.")
        }
    }

    adicionarAluno(aluno) {
        if (aluno instanceof Aluno) {
            Turma.alunos.push(aluno)
        } else {
            console.log("Erro: Tentativa de inserir objeto não identificado como um aluno")
        }
    }
}

module.exports = Turma
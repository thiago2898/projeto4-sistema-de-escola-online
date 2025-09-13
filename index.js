const Aluno = require("./class/Aluno")
const Coordenador = require("./class/Coordenador")
const Professor = require("./class/Professor")
const Disciplina = require("./class/Disciplina")
const Turma = require("./class/Turma")
const Nota = require("./class/Nota")

const aluno = new Aluno("Maria", 16)
const professor = new Professor("João", 35)
const coordenador = new Coordenador("Ana", 40)


console.log(aluno.acessoPainel())

console.log(professor.acessoPainel())

console.log(coordenador.acessoPainel())

console.log("\n===================================\n")

const matematica = new Disciplina("Matemática", 80)
const turmA = new Turma("1ºA")

turmA.adicionarDisciplina(matematica)
turmA.adicionarAluno(aluno)

console.log(turmA.disciplinas)
console.log(turmA.alunos)

console.log("\n====================================\n")

const nota1 = new Nota(8.5, matematica)
aluno.adicionarNota(nota1)

console.log(aluno.notas)
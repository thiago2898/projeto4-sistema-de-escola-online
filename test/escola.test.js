const Aluno = require("../class/Aluno");
const Professor = require("../class/Professor");
const Coordenador = require("../class/Coordenador");
const Disciplina = require("../class/Disciplina");
const Turma = require("../class/Turma");
const Nota = require("../class/Nota");

describe("Sistema de Escola Online", () => {
  test("Aluno deve acessar painel corretamente", () => {
    const aluno = new Aluno("Maria", 16);
    expect(aluno.acessoPainel()).toBe("Painel do Aluno: consultar notas e disciplinas");
  });

  test("Professor deve acessar painel corretamente", () => {
    const professor = new Professor("João", 35);
    expect(professor.acessoPainel()).toBe("Painel do Professor: gerenciar notas e turmas");
  });

  test("Coordenador deve acessar painel corretamente", () => {
    const coordenador = new Coordenador("Ana", 40);
    expect(coordenador.acessoPainel()).toBe("Painel do Coordenador: administração escolar");
  });

  test("Deve adicionar disciplina e aluno à turma", () => {
    const matematica = new Disciplina("Matemática", 80);
    const turmaA = new Turma("1ºA");
    const aluno = new Aluno("Carlos", 15);

    turmaA.adicionarDisciplina(matematica);
    turmaA.adicionarAluno(aluno);

    expect(turmaA.disciplinas.length).toBe(1);
    expect(turmaA.alunos.length).toBe(1);
  });

  test("Aluno deve receber uma nota vinculada a disciplina", () => {
    const matematica = new Disciplina("Matemática", 80);
    const aluno = new Aluno("Pedro", 17);
    const nota = new Nota(9, matematica);

    aluno.adicionarNota(nota);
    expect(aluno.notas[0].valor).toBe(9);
  });
});

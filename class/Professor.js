const Usuario = require("./Usuario")

class Professor extends Usuario {

    constructor(nome, idade) {
        super(nome, idade)
    }

    acessoPainel() {
        return "Painel do Professor: gerenciar notas e turmas"
    }
}

module.exports = Professor
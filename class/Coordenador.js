const Usuario = require("./Usuario")

class Coordenador extends Usuario {

    constructor(nome, idade) {
        super(nome, idade)
    }

    acessoPainel() {
        return "Painel do Coordenador: administração escolar"
    }
}

module.exports = Coordenador
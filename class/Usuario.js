class Usuario {
    #nome
    #idade
    
    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    set nome(value) {
        this.#nome = value
    }

    set idade(value) {
        this.#idade = value
    }

    acessoPainel() {
        return "Acesso ao sistema escolar"
    }

}

module.exports = Usuario
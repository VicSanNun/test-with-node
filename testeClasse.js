const assert = require('assert')
const DatabaseManager = require('./index.js')

const USER_PADRAO = {name: "Mateus", age: 17}

//const Victor = DatabaseManager.Create("Victor", 20);

describe('Testando Banco de Dados', () => {
    it('Criando Usuário', () => {
        const resultado = DatabaseManager.Create(USER_PADRAO.name, USER_PADRAO.age)
        assert.ok(resultado, USER_PADRAO)
    })
})
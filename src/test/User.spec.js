import { assert } from 'chai';
import User from '../models/User.js'

describe("Teste da Classe User", () => {
    it("Deve indicar 2 pontos para um comentário sobre um tópico", () => {
        const user = new User()
        let expected = 2

        user.atualizarPontos("comentou")
        const pontos = user.pontos

        assert.equal(pontos, expected)
    })
})
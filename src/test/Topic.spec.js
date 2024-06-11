import { assert } from 'chai'
import Topic from '../models/Topic.js'

describe("Test da Classe Topic.", () => {

    it("Deve retornar 3 para um tópico com 3 comentários.", () => {
        // Arrumação
        const topicObject = {
            author: "Luxkas",
            title: "Eleita melhor sacadora da Livej praia 2024",
            description: "Após fazer uma viagem no tempo até dezembro de 2024 e voltar, ficou claro que dentre todos os participantes das diversas etapas da Livej praia a atleta Marcela Holanda (Macela) foi a que mais se destacou no saque.\nDe acordo com relatos de suas adversárias, algumas já tinham entregue o jogo após receber apenas 2 saques da atleta, por perceberem que não seria possível chegar a tal nível.",
            image: "image.png",
            likes: 547,
            comments: [
                {
                    comment: "Sem dúvida Marcela é a melhor jogadora do vôlei de praia esse ano!",
                    author: "Bernardinho",
                    likes: 120,
                },
                {
                    comment: "Gostaríamos de entrar em contato com essa atleta para que ela participe da equipe técnica no nosso CT",
                    author: "Equipe SESC Flamengo",
                    likes: 45,
                },
                {
                    comment: "A salvação do vôlei está nessa menina, se tiver um CT gostaria de me inscrever como sua aluna",
                    author: "Gabriela Guimarães",
                    likes: 5,
                }
            ]
        }
        const topic = new Topic(topicObject)
        const expected = 3

        // Ação
        const numeroDeComentarios = topic.numeroDeComentarios()

        // Averiguação
        assert.equal(numeroDeComentarios, expected)
    })
})
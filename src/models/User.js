export default class User {
    constructor() {
        this.pontos = 0
    }

    atualizarPontos(acao) {
        switch (acao) {
            case "curtiu": this.pontos += 1; break;
            case "comentou": this.pontos += 2; break;
            default: break;
        }
    }
}
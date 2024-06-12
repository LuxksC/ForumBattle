export default class Topic {
    constructor(topic) {
        this.topic = topic
    }

    numeroDeComentarios() {
        return this.topic.comments.length
    }
}
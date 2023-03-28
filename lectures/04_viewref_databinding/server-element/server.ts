export class Server {
    constructor(public type: string, public name: string, public content: string) {
        this.type = type;
        this.name = name;
        this.content = content;
    }
}
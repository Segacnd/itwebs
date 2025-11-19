export class Variant {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}
export class Stage {
    constructor(question, variants, dispatchCommand, storeValue, type, removeCommand) {
        this.question = question;
        this.variants = variants;
        this.dispatchCommand = dispatchCommand;
        this.storeValue = storeValue;
        this.type=type;
        this.removeCommand=removeCommand;
    }
}
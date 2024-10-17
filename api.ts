
/**
 * Token class
 * @param type Type of token
 * @param value Optional token value
 */
class Token {
    type: string;
    value: any;

    constructor(type: string, value?: any) {
        this.type = type;
        this.value = value;
    }

    toString(): string {
        let result = this.type;
        if (this.value) result += `:${this.value}`;
        return result;
    }
}

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

class Lexer {
    text: string;
    pos: number;
    char: string;

    constructor(text: string) {
        this.text = text;
        this.pos = -1;
        this.char = null;
        this.advance();
    }

    advance(): void {
        this.pos += 1;
        this.char = this.pos < this.text.length ? this.text[this.pos] : null;
    }

    makeTokens() {
        let tokens: Token[] = [];
        
        while (this.char !== null) {
            if (this.char === "\t" || this.char === " ") {
                this.advance();
            } else if (this.char === "+") {
                tokens.push(new Token(PLUS));
            }
        }
        
        return tokens;
    }
}
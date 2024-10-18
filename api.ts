
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

    makeTokens(): Token[] {
        let tokens: Token[] = [];
        
        while (this.char !== null) {
            if (this.char === "\t" || this.char === " ") {
                this.advance();
            } else if (SINGLE_TOKENS[this.char]) {
                tokens.push(new Token(SINGLE_TOKENS[this.char]));
                this.advance();
            } else if (strings.digits.includes(this.char)) {
                tokens.push(this.makeNumber());
            } else {
                // error
            }
        }
        
        return tokens;
    }

    makeNumber(): Token {
        let result = "";
        let decimals = 0;

        while (this.char != null && (strings.digits + ".").includes(this.char)) {
            if (this.char == ".") decimals += 1;
            result += this.char;
            this.advance();
        }

        if (decimals == 0) return new Token(INT, parseInt(result));
        if (decimals == 1) return new Token(FLOAT, parseFloat(result));
        return null; // error
    }
}
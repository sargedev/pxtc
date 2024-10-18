
const INT = "INT";
const FLOAT = "FLOAT";
const PLUS = "PLUS";
const MINUS = "MINUS";
const MUL = "MUL";
const DIV = "DIV";
const MOD = "MOD";
const LPAREN = "LPAREN";
const RPAREN = "RPAREN";

const SINGLE_TOKENS: {[key: string]: string} = {
    "+": PLUS,
    "-": MINUS,
    "*": MUL,
    "/": DIV,
    "%": MOD,
    "(": LPAREN,
    ")": RPAREN
}
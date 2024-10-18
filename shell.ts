// Add your code here

function execute(text: string): void {
    let lexer = new Lexer(text);
    let tokens = lexer.makeTokens();

    console.log(JSON.stringify(tokens));
}
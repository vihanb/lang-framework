const LanguageExecutor = require('./langexec');

module.exports = class Language {
    constructor(rules) {
        this.program = rules.program; // Entire program parser
        this.statements = rules.statements; // Statements
    }

    exec(code) {
        let _exec = new LanguageExecutor(this, code);
        let exec = _exec.exec()
    }
}

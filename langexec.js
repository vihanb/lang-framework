const LanguageParser = require('./parse');
const LanguageContext = require('./context');
const OK = Symbol('OK');

module.export = class LanguageExecutor {
    constructor( def, code ) {
        this.Index = 0;
        this.Code = code;

        this.lang = def;

        this.status = OK;
    }

    _success() {}
    _error() {}

    parselow(context) {
        main:
        for (let i = 0; i < this.lang.statements.length; i++) {
            
        }
    }

    parse(code) {
        // Start parser
        this.lang.program(
            this.parselow,
            new LanguageContext(
                this, this.Code, this.Index,
                _success, _error
            )
        );
    }

}

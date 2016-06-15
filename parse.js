const _helpers = require('helpers');

const isFunction = _helpers.isFunction;

module.exports = class LanguageParser {
    constructor( grammar, name ) {
        // If it's a function, then just use it
        if ( isFunction(grammar) ) {
            this.parser = grammar;
            this.name = name;
        } else if ( grammar instanceof LanguageParser) {
            this.parser = grammar.parser;
            this.name = grammar.name;
        } else {
            this.parser = function(code, index, done, error, context) {
                // BNF Parser
            };
            this.name = grammar.name
        }
    }
}

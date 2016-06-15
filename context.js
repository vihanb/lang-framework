module.exports = class LanguageContext {
    constructor( def, code, index, success, error, ctx ) {
        this.lang = def;
        this.code = code;
        this.index = index;
        this.success = success;
        this.error = error;
        this.ctx = ctx || null;
    }
}

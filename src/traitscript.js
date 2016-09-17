module.exports = (function TSModule() {

console.log('TraitScript compiler (C)2016 Keean Schupke')

function gen(ast) {
    if (ast.lit) {
        return ast.lit;
    } else if (ast.var) {
        return ast.var;
    } else if (ast.fn) {
        return 'function ' + ast.fn + '(' + ast.args.join(',') + ') {return ' + gen(ast.body) + ';}';
    } else {
        return '';
    }
}

var exports = function TraitScript(ast) {
    this.ast = ast;
}

exports.prototype.generate = function generate() {
    return gen(this.ast);
}

return exports;
})()

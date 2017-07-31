

function schizo(code) {

    var ast = esprima.parseScript(code, { loc: true, tolerant: true, tokens: true});

    var style = '';
    if (Math.floor(Math.random() * 2) == 0) {
        style = '\t';
    } else {
        for (var count = 0; count < Math.floor(Math.random() * 8 + 2); count++) {
            style += ' ';
        }
    }

    var quotes = 'single';
    if (Math.floor(Math.random() * 2)) {
        quotes = 'double';
    }

    var semicolons =  !!(Math.floor(Math.random() * 2));

    var newlineAfterFunction = !!(Math.floor(Math.random() * 2));

    var renumber = !!(Math.floor(Math.random() * 2));

    var options = { 
        format: { 
            indent: { style: style, adjustMultilineComment: false },
            quotes: quotes,
            semicolons: semicolons,
            newlineAfterFunction: newlineAfterFunction,
            renumber: renumber
        },
        comment: true
    };


//    return JSON.stringify(ast, null, 4);
    return escodegen.generate(ast, options) 
    + "\n//randomly formatted by SchizoJS\n//https://github.com/rottytooth/SchizoJS";

}

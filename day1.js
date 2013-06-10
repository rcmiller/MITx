function calculate(text) {
    // return text;

    // pattern matches integers, parens and the operators +, -, *, /
    var pattern = /\d+|\+|\-|\*|\/|\(|\)/g;
    var tokens = text.match(pattern);
    return JSON.stringify(tokens);
}

function setup_calc(div) {
    var input = $('<input></input>',{type: 'text', size: 50});
    var output = $('<div></div>');
    var button = $('<button>Calculate</button>');
    button.bind("click", function() {
        output.html(String(calculate(input.val())));
    });
    
    $(div).append(input,button,output);
}

$(document).ready(function() {
    // look for nodes of class "calculator" and set them up
    $('.calculator').each(function() {
        setup_calc(this);
    });
});

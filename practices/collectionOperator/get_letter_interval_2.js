'use strict';
function build_letter(x,i,SINGLE,COUPLE,result) {
    x=parseInt(x/SINGLE);
    x = i/SINGLE === 2 ? 1:x;
    var addition = from_char_code(x);

    if(i<=SINGLE) {
        result.push(from_char_code(i));
    }else if(SINGLE<i && i<=COUPLE) {
        var j = i - SINGLE;
        result.push(addition+from_char_code(j));
    }else {
        var k = i -COUPLE;
        result.push(addition+from_char_code(k));
    }
}
function from_char_code(i) {
    return String.fromCharCode(i+96);
}
function get_letter_interval_2(number_a, number_b) {
    var result = [];
    var SINGLE = 26;
    var COUPLE = 52;

    if(number_a > number_b) {
        for(var i=number_a;i>=number_b;i--) {
            var x = i,addition;

            build_letter(x,i,SINGLE,COUPLE,result);
        }

    }else {
        for(var i=number_a;i<=number_b;i++) {
            var x = i,addition;

            build_letter(x,i,SINGLE,COUPLE,result);
        }
    }
    return result;
}

module.exports = get_letter_interval_2;

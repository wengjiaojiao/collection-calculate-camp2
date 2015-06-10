'use strict';

function get_integer_interval(number_a, number_b) {
    var result = [];
    
    if(number_a != number_b) {
        result = range(number_a, number_b);
    }else {
        result.push(number_a);
    }
    return result;
}

function range (a, b) {
    var step = Math.abs(b - a) / (b - a);
    var count = (b - a) / step;
    var result = [];

    for (var i = 0; i <= count; i++) {
        var item = a + i * step;
        result.push(item);
    }
    return result;
}

module.exports = get_integer_interval;

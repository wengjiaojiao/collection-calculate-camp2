'use strict';

function get_integer_interval_2(number_a, number_b) {
    var result = [];

    if(number_a != number_b) {
        result = range(number_a, number_b);
    }else {
        result.push(number_a);
    }

    return filter(result,function(n, i) {
        return n % 2 === 0;
    });
}



function range(a, b) {
    var step = Math.abs(b - a) / (b - a);
    var count = (b - a) / step;
    var result = [];

    for (var i = 0; i <= count; i++) {
        var item = a + i * step;
        result.push(item);
    }
    return result;
}



function each (collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}



function filter(collection,fun) {
    var result = [];

    each(collection, function(n, i) {
        if(fun(n, i)) {
            result.push(n);
        }
    });
    return result;
}

module.exports = get_integer_interval_2;

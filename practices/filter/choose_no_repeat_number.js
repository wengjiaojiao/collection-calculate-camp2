'use strict';

function choose_no_repeat_number(collection) {
    var result = [];

    each(collection, function(n) {
        if(exist(result, n)) {
            result.push(n);
        }
    });
    return result;
}

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

function exist(collection, element) {
    var result = true;

    each(collection, function(n) {
        if(n === element) {
            result = false;
        }
    });
    return result;
}

module.exports = choose_no_repeat_number;

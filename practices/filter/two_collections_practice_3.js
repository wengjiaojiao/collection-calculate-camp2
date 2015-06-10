'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var result = [];

    each(collection_a,function (num_a) {
        each(collection_b,function (num_b) {
            if(num_a % num_b === 0){
                result.push(num_a);
            }
        })
    });
    return result;
}

module.exports = choose_divisible_integer;

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

function filter(collection, fun) {
    var result = [];

    each(collection, function(n) {
        if(fun(n)) {
            result.push(n);
        }
    });
    return result;
}

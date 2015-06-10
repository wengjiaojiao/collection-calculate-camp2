'use strict';
var even_asc_odd_desc = function(collection){
    var odd = filter(collection, function(n) {
        return n % 2 != 0;
    });
    var even = filter(collection, function(n) {
        return n % 2 === 0;
    });
    odd = rank(odd, function(a, b) {
        return a < b;
    });
    even = rank(even, function(a, b) {
        return a > b;
    });
    for (var x = 0; x < odd.length; x++) {
        even.push(odd[x]);
    }
    return even;
};

module.exports = even_asc_odd_desc;

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

function filter(collection, fun) {
    var result = [];

    each(collection, function(n, i) {
        if(fun(n, i)) {
            result.push(n);
        }
    });
    return result;
}

function rank(collection, fun) {
    var number;

    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if(fun(collection[i], collection[j])) {
                number = collection[i];
                collection[i] = collection[j];
                collection[j] = number;
            }
        }
    }
    return collection;
}

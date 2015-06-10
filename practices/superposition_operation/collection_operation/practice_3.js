 'use strict';

function hybrid_operation_to_uneven(collection) {

    var number = filter(collection,function(n) {
        return n % 2 != 0;
    });
    var temp = map(number, function(n) {
        return n * 3 + 5 ;
    });
    return reduce(temp,function(a, b) {
        return a + b;
    });
}

function each(collection,fun){
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}

function filter(collection,fun) {
    var result = [];
    each(collection,function(n) {
        if(fun(n)) {
            result.push(n);
        }
    });
    return result;
}
function map(collection,fun){
    var result = [];

    each(collection,function(n) {
        result.push(fun(n));
    });
    return result;
}

function reduce(collection,fun) {
    var result = [];

    each(collection,function(n,i) {
        if(i === 0) {
            result = collection[0];
        }else {
            result = fun(result, n);
        }
    });
    return result;
}
module.exports = hybrid_operation_to_uneven;

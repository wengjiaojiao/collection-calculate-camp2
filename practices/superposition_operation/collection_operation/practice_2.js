'use strict';

function hybrid_operation_to_uneven(collection) {

    var temp = filter(collection,function(n) {
        return n % 2 != 0;
    });
    return map(temp,function(n) {
        return n * 3 + 2;
    })
}

function each(collection,fun){
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}

function filter(collection,fun) {
    var result = [];

    each(collection,function(n) {
        if(fun(n)){
            result.push(n);
        }
    });
    return result;
}

function map(collection,fun) {
    var result = [];

    each(collection,function(n) {
        result.push(fun(n));
    });
    return result;
}
module.exports = hybrid_operation_to_uneven;

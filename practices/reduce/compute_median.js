'use strict';

function compute_median(collection) {
    var number;

    rank(collection, function(a, b){
        return a > b;
    });
    return median(collection);
}

module.exports = compute_median;

function rank(collection,fun) {
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

function median(collection) {
    var median;
    var middle = parseInt(collection.length / 2);

    if(collection.length % 2 ===0) {
        median = (collection[middle] + collection[middle - 1 ]) / 2;
    }else {
        median = collection[middle];
    }
    return median;
}

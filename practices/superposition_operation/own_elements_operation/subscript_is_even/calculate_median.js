'use strict';
var calculate_median = function(collection){
    var median;
    var num_array = filter(collection, function(n, i) {
        return i % 2 === 0;
    });

    return cal_median(num_array);
};

module.exports = calculate_median;


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

function cal_median(collection) {
    var median;
    var middle = parseInt(collection.length / 2);

    if(collection.length % 2 === 0) {
        median = (collection[middle] + collection[middle -1]) / 2;
    }else {
        median = collection[middle];
    }
    return median;
}

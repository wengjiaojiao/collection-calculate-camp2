'use strict';

function median_to_letter(collection) {
    var median;

    median = Math.ceil(cal_median(collection));
    var SIMPLE = 26;
    var x = 0;
    var letter ;

    for (var i = 0; i < collection.length; i++) {
        x = median/SIMPLE > 1 ? parseInt(median/SIMPLE) : x;
        if(median > SIMPLE) {
            median -= SIMPLE;
            letter = String.fromCharCode(x+96);
        }
    }
    letter += String.fromCharCode(median+96);
    return letter;
}

module.exports = median_to_letter;

function cal_median(collection) {
    var median;
    var middle = parseInt(collection.length / 2);

    if(collection.length % 2 === 0) {
        median = (collection[middle] + collection[middle - 1]) / 2;
    }else {
        median = collection[middle];
    }
    return median;
}

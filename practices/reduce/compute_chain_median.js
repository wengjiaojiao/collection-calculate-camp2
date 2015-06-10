'use strict';

function compute_chain_median(collection) {
    var string_array = [];
    var num_array = [];

    string_array = collection.split('->');
    for (var i = 0; i < string_array.length; i++) {
        num_array.push((parseInt(string_array[i])));
    }
    var temp;

    for (var i = 0; i < num_array.length; i++) {
        for (var j = i + 1; j < num_array.length; j++) {
            if(num_array[i] > num_array[j]) {
                temp = num_array[i];
                num_array[i] = num_array[j];
                num_array[j] = temp;
            }
        }
    }

    var middle = num_array.length / 2;
    var median;

    if(num_array.length % 2 == 0 ) {
        median = (num_array[middle] + num_array[middle-1]) / 2;
    }else {
        median = collection[middle];
    }

    return median;
}

module.exports = compute_chain_median;

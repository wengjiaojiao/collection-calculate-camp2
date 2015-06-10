'use strict';
function rank_by_two_large_one_small(collection){
    var result = rank(collection, function(a, b) {
        return a > b;
    });

    for(var i = 0; i < result.length-2; i += 3) {
        var temp = result[i];
        result[i] = result[i+1];
        result[i+1] = result[i+2];
        result[i+2] = temp;
    }

    return result;
}

module.exports = rank_by_two_large_one_small;



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

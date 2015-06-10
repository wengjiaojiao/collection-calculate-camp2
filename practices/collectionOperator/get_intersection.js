'use strict';

function get_intersection(collection_a, collection_b) {
    var result = [];

    each(collection_b, function(n) {
        if(exist(collection_a, n)) {
            result.push(n);
        }
    });
    return result;
}



function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}
function exist(collection, element) {
    var result = false;

    each(collection, function(n, i) {
        if(n === element) {
            result = true;
        }
    });
    return result;
}


module.exports = get_intersection;

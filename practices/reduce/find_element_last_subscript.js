'use strict';

function calculate_elements_sum(collection, element) {
    var result = 0;
    
    each(collection, function(n, i){
        if(n === element) {
            result = i;
        }
    });
    return result;
}

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}
module.exports = calculate_elements_sum;



//return _.lastIndexOf(collection,element);

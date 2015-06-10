'use strict';
var _ =require("../../mylodash.js");

function choose_common_elements(collection_a, collection_b) {
    var result = [];

     each(collection_a, function(n) {
         if(exist(collection_b, n)) {
             result.push(n);
         }
     });
    return result;
}

module.exports = choose_common_elements;

function each(collection, fun){
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

function exist(collection, element) {
    var result = false;

    each(collection, function(n) {
        if(n === element) {
            result = true;
        }
    });
    return result;
}



//return _.intersection(collection_a,collection_b);

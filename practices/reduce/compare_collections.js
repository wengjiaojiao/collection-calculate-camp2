'use strict';

function compare_collections(collection_a, collection_b) {
//     var result = true;
//
//     if(collection_a.length === collection_b.length) {
//         each(collection_a, function(n, i) {
//             if(n != collection_b[i]) {
//                 result = false;
//             }
//         });
//     }
//     return result;

    return collection_a.toString() === collection_b.toString();
}
module.exports = compare_collections;


function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

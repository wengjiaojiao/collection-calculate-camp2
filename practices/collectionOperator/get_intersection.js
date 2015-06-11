'use strict';
var _ = require('../../mylodash.js');

function get_intersection(collection_a, collection_b) {
    var result = [];

    _(collection_b).each(function(n) {
        if(_(collection_a).exist(n)) {
            result.push(n);
        }
    });
    return result;
}


module.exports = get_intersection;

'use strict';
var _ = require("../../mylodash.js");
function choose_divisible_integer(collection_a, collection_b) {
    var result = [];

    _(collection_a).each(function(n) {
        _(collection_b).each(function(m) {
            if(n % m === 0) {
                result.push(n);
            }
        });
    });
    return result;
}

module.exports = choose_divisible_integer;

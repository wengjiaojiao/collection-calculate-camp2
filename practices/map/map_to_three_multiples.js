'use strict';
 var _ = require("../../mylodash.js");

var map_to_three_multiples = function(collections){
    return _(collections).map(function(n) {
        return n * 3;
    }).value();
}
module.exports = map_to_three_multiples;

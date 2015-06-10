'use strict';
var _ = require("../../mylodash.js");

var map_to_four_multiples_add_one = function(collection){
    return _.map(collection,four);
}

function four(n) {
    return n * 4 + 1;
 }
module.exports = map_to_four_multiples_add_one;

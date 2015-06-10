'use strict';
 var _ = require("../../mylodash.js");

var map_to_three_multiples = function(collections){
    return _.map(collections,three);
}

function three(n) {
    return n * 3;
}
module.exports = map_to_three_multiples;

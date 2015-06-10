'use strict';
var _ = require('../../mylodash.js');

var number_map_to_word = function(collection){
    return _.map(collection,map_word);
}

function map_word(n) {
    return String.fromCharCode(n+96);
}
module.exports = number_map_to_word;

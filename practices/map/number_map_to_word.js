'use strict';
var _ = require('../../mylodash.js');

var number_map_to_word = function(collection){
    return _(collection).map(function(n) {
        return String.fromCharCode(n+96);
    }).value();
}

module.exports = number_map_to_word;

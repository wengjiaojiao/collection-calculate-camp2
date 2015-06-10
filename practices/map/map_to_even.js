'use strict';
var _ = require('../../mylodash.js');

function map_to_even(collection){
    return _.map(collection,twotimes);
}

function twotimes(n) {
    return n * 2 ;
}

module.exports = map_to_even;
